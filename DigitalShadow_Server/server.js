import express from 'express'
import dotenv from 'dotenv';
import cors from "cors";
import { clerkMiddleware, clerkClient } from '@clerk/express'
import { GoogleAuth, GenerateUrlForYoutubeAccess } from './ConnectYoutube.js';
import { GetYoutubeDataOfNewUser, GetYoutubeDataOfExistingUser, Aiprocessing } from './FetchYoutubeHistoryAndAiwork.js';
import { Database } from './database.js';


const app = express()
dotenv.config()
const port = 3000

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(clerkMiddleware())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post('/YoutubeConnectedCheck', async (req, res) => {
    try {
        let user = await clerkClient.users.getUser(req.body.userId)
        let userId = req.body.userId
        if (user.privateMetadata.Refresh_Token) {
            let { Collection, Cluster } = await Database("LikedHistory")
            let youtubeDataInDatabase = await Collection.findOne({ UserId: req.body.userId })
            if (!youtubeDataInDatabase) {
                let Result = await GetYoutubeDataOfNewUser(user.privateMetadata.Refresh_Token, user.privateMetadata.Access_Token, Collection, Cluster, userId)
                if (Result === "Refresh Token Expired") {
                    res.json({ YoutubeConnected: false, authUrl: GenerateUrlForYoutubeAccess(userId) })
                }
                let TitleData = await Collection.findOne({ UserId: req.body.userId }, { projection: { videos: 1 } })
                let AiData = await Aiprocessing(TitleData, true, userId)
                let daysPassed=0
                res.json({AiData,daysPassed:daysPassed,YoutubeConnected: true})
            }
            else {
                let PreviousTimestamp = await Collection.findOne({ UserId: userId }, { projection: { Timestamp: 1 } });
                const prev = new Date(PreviousTimestamp.Timestamp).getTime();
                const now = Date.now();

                const diffMs = now - prev;
                const hoursPassed = Math.floor(diffMs / (1000 * 60 * 60));
                const daysPassed = Math.floor(hoursPassed / 24);

                const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
                let is24HoursPassed = Date.now() - new Date(PreviousTimestamp.Timestamp).getTime() >= TWENTY_FOUR_HOURS;

                if (is24HoursPassed) {
                    let Result = await GetYoutubeDataOfExistingUser(user.privateMetadata.Refresh_Token, user.privateMetadata.Access_Token, Collection, Cluster, userId)
                    if (Result === "Refresh Token Expired") {
                        res.json({ YoutubeConnected: false, authUrl: GenerateUrlForYoutubeAccess(userId) })
                    }
                    else {
                        let AiInputVideoData = await Collection.findOne({ UserId: userId }, { projection: { _id: 0, videos: { $slice: Result } } })
                        console.log(AiInputVideoData.videos)
                        if (AiInputVideoData.videos?.length) {
                            let AiData = await Aiprocessing(AiInputVideoData.videos, false, userId)
                            res.json({AiData,daysPassed:daysPassed,YoutubeConnected: true})
                        }
                    }
                } else {
                    let { Collection, Cluster } = await Database("AiProcessedData")
                    let AiData = await Collection.findOne({ UserId:userId }, { projection: {Data: 1, _id:0,  } })
                    res.json({AiData,daysPassed:daysPassed,YoutubeConnected: true})
                    Cluster.close()
                }
            }
        }
        else {
            res.json({ YoutubeConnected: false, authUrl: GenerateUrlForYoutubeAccess(req.body.userId) })
        }
    } catch (error) {
        console.error("Error during YoutubeConnectedCheck:", error)
        res.status(500).send("Internal Server Error")
    }

})


app.get('/api/auth/callback/google', async (req, res) => {
    try {
        const code = req.query.code
        let token = await GoogleAuth(code)
        await clerkClient.users.updateUserMetadata(req.query.state, { privateMetadata: { Refresh_Token: token.refresh_token, Access_Token: token.access_token } })
        res.redirect("http://localhost:5173")
    } catch (error) {
        console.error("Error during Google OAuth callback:", error)
        res.status(500).send("Internal Server Error")
    }

})



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
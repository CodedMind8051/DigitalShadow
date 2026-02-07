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
                let AiDataString = await Aiprocessing(TitleData, true, userId)
                let AiReplacedData = AiDataString.replaceAll("```", "").replaceAll("json", "")
                let AiJsonData=JSON.parse(AiReplacedData)
                console.log(AiJsonData.categories)
                console.log(typeof AiJsonData)
            }
            else {
                let PreviousTimestamp = await Collection.findOne({ UserId: userId }, { projection: { Timestamp: 1 } });
                let isDayChanged = new Date(PreviousTimestamp.Timestamp).toDateString() !== new Date().toDateString();
                if (isDayChanged) {
                    let Result = await GetYoutubeDataOfExistingUser(user.privateMetadata.Refresh_Token, user.privateMetadata.Access_Token, Collection, Cluster, userId)
                    if (Result === "Refresh Token Expired") {
                        res.json({ YoutubeConnected: false, authUrl: GenerateUrlForYoutubeAccess(userId) })
                    }
                    else {

                    }

                    // Aiprocessing()
                }

            }
            // res.json({ YoutubeConnected: true })
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
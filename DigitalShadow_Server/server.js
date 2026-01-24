import express from 'express'
import dotenv from 'dotenv';
import cors from "cors";
import { clerkMiddleware, clerkClient } from '@clerk/express'
import { GoogleAuth, GenerateUrlForYoutubeAccess } from './ConnectYoutube.js';
import { GetYoutubeData } from './FetchYoutubeHistoryAndAiwork.js';


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

        if (user.privateMetadata.Refresh_Token) {
            GetYoutubeData(user.privateMetadata.Refresh_Token, user.privateMetadata.Access_Token)
           
            

            res.json({ YoutubeConnected: true})
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
        await clerkClient.users.updateUserMetadata(req.query.state.UserId, { privateMetadata: { Refresh_Token: token.refresh_token, Access_Token: token.access_token } })
        res.redirect("http://localhost:5173")
    } catch (error) {
        console.error("Error during Google OAuth callback:", error)
        res.status(500).send("Internal Server Error")
    }

})



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
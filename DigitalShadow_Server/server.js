import express from 'express'
import { google } from 'googleapis'
import dotenv from 'dotenv';
import cors from "cors";
import { clerkMiddleware, clerkClient } from '@clerk/express'
import { GoogleAuth } from './ConnectYoutube.js';


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
    console.log(req.body.userId);
    let user = await clerkClient.users.getUser(req.body.userId)

    if (user.privateMetadata.Refresh_Token) {
        console.log("User has connected Youtube");
    }
    else {

        

        await clerkClient.users.updateUserMetadata(req.body.userId, { privateMetadata: { Refresh_Token: "test123" } })
    }


    res.json({ message: 'Hello World!' })
})


app.get('/api/auth/callback/google', async (req, res) => {
    const code = req.query.code
    token = await GoogleAuth(code)
    console.log(token)
    res.send("Hii")
})



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
import express, { Router } from 'express'
import { google } from 'googleapis'
import dotenv from 'dotenv';
import cors from "cors";
import { clerkMiddleware, clerkClient } from '@clerk/express'


dotenv.config()
const app = express()
const port = 3000
let token = null


app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(clerkMiddleware())


// Google auth Start
const AuthClient = () => {
    return new google.auth.OAuth2(
        process.env.GoogleClientID,
        process.env.Google_secret_key,
        process.env.Google_Callback_url)
}

async function GoogleAuth(code) {
    const token = await AuthClient().getToken(code)
    AuthClient().setCredentials(token.tokens)
    return token.tokens
}
// Google auth end




// All function start



async function GetData() {
    const youtube = google.youtube({ version: "v3", auth: AuthClient() })
    const response = await youtube.videos.list({
        part: 'snippet,contentDetails',
        myRating: 'like',
        maxResults: 50
    });
    console.log(response)
}
// All function end



// All Routes start
app.get('/api/auth/callback/google', async (req, res) => {
    const code = req.query.code
    token = await GoogleAuth(code)
    console.log(token)
    res.send("Hii")
})



app.get("/", async (req, res) => {
    //   let userId = req.auth.userId
    //   let refresh_token = await FetchTokens(userId)
    //   AuthClient.setCredentials({token})
    //   await GetData()
    console.log(await clerkClient.users.getUserList())

    //   res.send("Upload successful")
})
// All Routes end





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


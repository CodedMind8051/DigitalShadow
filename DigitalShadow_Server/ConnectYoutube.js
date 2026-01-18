import { google } from 'googleapis'
import dotenv from 'dotenv';


const AuthClient = () => {
    return new google.auth.OAuth2(
        process.env.GoogleClientID,
        process.env.Google_secret_key,
        process.env.Google_Callback_url)
}

export  const url = AuthClient().generateAuthUrl({
    access_type: "offline",
    scope: ['profile', 'email', 'https://www.googleapis.com/auth/youtube.readonly'],
    prompt: "consent",
})



export async function GoogleAuth(code) {
    const token = await AuthClient().getToken(code)
    AuthClient().setCredentials(token.tokens)
    return token.tokens
}



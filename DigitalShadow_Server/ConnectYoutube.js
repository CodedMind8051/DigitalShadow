import { google } from 'googleapis'
import dotenv from 'dotenv';

dotenv.config()

export const AuthClient = () => {
    return new google.auth.OAuth2(
        process.env.GoogleClientID,
        process.env.Google_secret_key,
        process.env.Google_Callback_url)
}

export  const GenerateUrlForYoutubeAccess =(UserId)=> AuthClient().generateAuthUrl({
    access_type: "offline",
    scope: ['profile', 'email', 'https://www.googleapis.com/auth/youtube.readonly'],
    prompt: "consent",
    state: UserId
})



export async function GoogleAuth(code) {
    const token = await AuthClient().getToken(code)
    AuthClient().setCredentials(token.tokens)
    return token.tokens
}



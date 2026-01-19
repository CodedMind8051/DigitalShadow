import { google } from 'googleapis'
// import dotenv from 'dotenv';
import { AuthClient } from './ConnectYoutube.js';

// dotenv.config()

export async function GetYoutubeData(refresh_token, access_token) {
    console.log(refresh_token, access_token)
    let AuthClientInstence = await AuthClient()
    AuthClientInstence.setCredentials({
        refresh_token: refresh_token,
        access_token: access_token
    })
    const youtube = google.youtube({ version: "v3", auth: AuthClientInstence })
    const YoutubeData = await youtube.videos.list({
        part: 'snippet,contentDetails',
        myRating: 'like',
        maxResults: 50
    });
    console.log(YoutubeData.data.items[0])
}
import { google } from 'googleapis'
import { AuthClient } from './ConnectYoutube.js';
import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';

dotenv.config();

function Aiprocessing(youtubeData) {
    const ai = new GoogleGenAI({
        apiKey: process.env.Gemini_API_Key,
    });

    const models = [
        "gemma-3-27b-it",
        "gemma-3-1b-it",
        "gemma-3-4b-it",
        "gemini-2.5-flash-lite",
        "gemini-2.5-flash",
        "gemini-3-flash-preview",
        "gemini-2.5-flash-tts"
    ];

    for (let i = 0; i < models.length; i++) {
        const modelName = models[i];

        try {

            ProccesedAIData = ai.models.generateContent({
                model: modelName,
                contents: [
                    {
                        role: "user",
                        parts: [
                            { text: "Explain what is motor in 1 sentences." }
                        ],
                    },
                ],
            })

        } catch (error) {

        }

    }
}



export async function GetYoutubeData(refresh_token, access_token) {
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
    console.log(YoutubeData.data.items)
}
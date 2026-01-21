import { google } from 'googleapis'
import { AuthClient } from './ConnectYoutube.js';
import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';

dotenv.config();

export async function Aiprocessing(youtubeData) {
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

        const prompt = `
            Analyze the YouTube watch history below and classify each video into one of these categories:
            Productive, Study, Tech, Programming, Time Pass, Brain Rot/fuck.
            
            Input data:
            ${JSON.stringify(youtubeData, null, 2)}
            
            Return ONLY valid JSON that strictly matches the provided schema.
            Do not include markdown, explanations, or extra text.
            All summary fields that require it must be exactly 3 sentences.`;

        try {
            const Airesponse = await ai.models.generateContent({
                model: modelName,
                contents: [
                    {
                        role: "user",
                        parts: [{ text: prompt }]
                    }
                ],
                generationConfig: {
                    responseMimeType: "application/json"
                }
            });

            if (Airesponse.candidates?.[0]?.content?.parts?.[0]?.text) {
                console.log(Airesponse.candidates?.[0]?.content?.parts?.[0]?.text, modelName);
                return "work"
            }

        } catch (error) {
            if (error) {
                console.warn(`Model ${modelName} failed:`, error.message);
            }
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
        maxResults: 3
    });
    await Aiprocessing(YoutubeData.data.items.slice(0, 3).map(video=>({title:video.snippet.title})))
}


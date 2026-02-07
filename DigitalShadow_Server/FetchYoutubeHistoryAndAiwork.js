import { google } from 'googleapis'
import { AuthClient } from './ConnectYoutube.js';
import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
import { Database } from './database.js';


dotenv.config();

export async function Aiprocessing(youtubeData, isNewUser, userId) {
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
               You are a data analysis system that analyzes a FULL DAY of YouTube watch history.
               
               You will receive a list of videos watched in a single day.
               Each video contains at least: title, channel name, duration, and watch time.
               
               Your task is to analyze the ENTIRE DAY as ONE UNIT and produce a structured dashboard output.
               Do NOT generate per-video summaries.
               Do NOT repeat analysis multiple times.
               Everything must be derived from the full-day dataset.
               
               --------------------
               STEP 1: DATA-DRIVEN CATEGORY DISCOVERY (MANDATORY)
               --------------------
               Discover the dominant content themes of the day directly from the video titles and channels.
               
               Rules:
               - Create BETWEEN 3 and 5 categories total.
               - Categories MUST be inferred from the data, not pre-defined.
               - Category names must be short, clear, and topic-based (e.g. "Cricket", "Web Development", "Physics", "Movies", "Shorts").
               - Avoid vague labels like "Misc" unless absolutely necessary.
               - Assign a numeric index to each category starting from 0.
               
               --------------------
               STEP 2: VIDEO → CATEGORY INDEX MAPPING
               --------------------
               For every video in the input:
               - Assign exactly ONE categoryIndex based on its dominant topic.
               - Preserve original video order.
               - Do NOT add, remove, or reorder videos.
               
               --------------------
               STEP 3: CATEGORY STATISTICS
               --------------------
               For each discovered category:
               - Calculate totalVideos.
               - Calculate percentageOfTotal based on total videos watched that day.
               
               Percentages must accurately sum to ~100%.
               
               --------------------
               STEP 4: PRODUCTIVITY TYPE CLASSIFICATION
               --------------------
               Independently classify each video into exactly ONE of the following types:
               - Productive
               - Study
               - Time Pass
               - Brain Rot
               
               Rules:
               - This classification is independent of topic categories.
               - Use Brain Rot ONLY for low-effort, repetitive, or purely dopamine-driven content.
               - Aggregate totals and percentages for each type.
               
               --------------------
               STEP 5: IMPORTANT NEWS EXTRACTION
               --------------------
               Extract IMPORTANT NEWS items from today’s videos.
               
               Rules:
               - News must be factual, informational, or update-based.
               - Derive news only from watched content.
               - Return results as a LIST.
               - Each item must include: title, sourceCategory, and reason.
               
               --------------------
               STEP 6: IMPORTANT EVENTS DETECTION
               --------------------
               Detect meaningful behavioral EVENTS from today’s data.
               
               Examples (not exhaustive):
               - Category dominance
               - Productivity spikes
               - Focus consistency
               - Unusual consumption patterns
               
               Rules:
               - Events must be insight-based, not video-based.
               - Return results as a LIST.
               - Each event must include a title and explanation.
               
               --------------------
               STEP 7: DAILY NARRATIVE SECTIONS (STRICT)
               --------------------
               Generate the following text sections:
               
               1. Daily Summary  
                  - EXACTLY 3 sentences.
               
               2. Content Breakdown  
                  - EXACTLY 3 sentences.
                  - Must reference discovered category percentages.
               
               3. Final Verdict  
                  - EXACTLY 3 sentences.
                  - Must evaluate focus, balance, and discipline.
               
               Tone:
               - Analytical
               - Neutral
               - Dashboard-style
               - No emojis
               - No slang
               - No motivational fluff
               
               --------------------
               OUTPUT RULES (VERY IMPORTANT)
               --------------------
               - Return ONLY valid JSON.
               - No markdown.
               - No explanations.
               - No extra keys.
               - Sentence limits must be followed EXACTLY.
               
               --------------------
               REQUIRED OUTPUT SCHEMA
               --------------------
               {
                 "categories": [
                   {
                     "index": number,
                     "name": string,
                     "totalVideos": number,
                     "percentage": number
                   }
                 ],
                 "productivityTypes": [
                   {
                     "type": "Productive" | "Study" | "Time Pass" | "Brain Rot",
                     "totalVideos": number,
                     "percentage": number
                   }
                 ],
                 "importantNews": [
                   {
                     "title": string,
                     "sourceCategory": string,
                     "reason": string
                   }
                 ],
                 "importantEvents": [
                   {
                     "title": string,
                     "explanation": string
                   }
                 ],
                 "dailySummary": string,
                 "contentBreakdown": string,
                 "finalVerdict": string
               }
               --------------------
               INPUT DATA (FULL DAY WATCH HISTORY)
               --------------------
               ${JSON.stringify(youtubeData, null, 2)}
               `;

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
            let AiDataString = Airesponse.candidates?.[0]?.content?.parts?.[0]?.text

            let AiReplacedData = AiDataString.replaceAll("```", "").replaceAll("json", "")
            let AiJsonData = JSON.parse(AiReplacedData)
            if (AiJsonData) {
                if (isNewUser) {
                    let { Collection, Cluster } = await Database("AiProcessedData")
                    await Collection.insertOne({ UserId: userId, Data: AiJsonData, Timestamp: Date.now() });
                }
                return Airesponse.candidates?.[0]?.content?.parts?.[0]?.text
            }

        } catch (error) {
            if (error) {
                console.warn(`Model ${modelName} failed:`, error.message);
            }
        }

    }
}



export async function GetYoutubeDataOfNewUser(refresh_token, access_token, LikedHistoryCollection, Cluster, userId) {
    try {
        let AuthClientInstence = await AuthClient()
        AuthClientInstence.setCredentials({
            refresh_token: refresh_token,
            access_token: access_token
        })
        const youtube = google.youtube({ version: "v3", auth: AuthClientInstence })
        let nextPageToken = null;
        let i = 0;
        while (i < 3) {
            const YoutubeData = await youtube.videos.list({
                part: 'snippet,contentDetails',
                myRating: 'like',
                maxResults: 100,
                pageToken: nextPageToken
            });
            nextPageToken = YoutubeData.data.nextPageToken;
            let youtubeData = YoutubeData.data.items.map(video => ({ title: video.snippet.title }));

            if (i === 0) {
                await LikedHistoryCollection.insertOne({ UserId: userId, videos: youtubeData, Timestamp: Date.now() });
                i++
            }
            else {
                await LikedHistoryCollection.updateOne(
                    { UserId: userId },
                    {
                        $push: { videos: { $each: youtubeData } },
                        $set: { Timestamp: Date.now() }
                    },
                    { upsert: true }
                );
                i++
            }

        }

        Cluster.close()
    } catch (error) {
        console.error("Error fetching YouTube data:")
        return "Refresh Token Expired"
    }

    // await Aiprocessing(YoutubeData.data.items.slice(0, 10).map(video => ({ title: video.snippet.title })))
}




export async function GetYoutubeDataOfExistingUser(refresh_token, access_token, LikedHistoryCollection, Cluster, userId) {
    try {
        let AuthClientInstence = await AuthClient()
        AuthClientInstence.setCredentials({
            refresh_token: refresh_token,
            access_token: access_token
        })
        const youtube = google.youtube({ version: "v3", auth: AuthClientInstence })
        let nextPageToken = null;

        while (true) {
            const YoutubeData = await youtube.videos.list({
                part: 'snippet,contentDetails',
                myRating: 'like',
                maxResults: 100,
                pageToken: nextPageToken
            });
            nextPageToken = YoutubeData.data.nextPageToken;
            let stop = false
            let LastProcessedVideo = await LikedHistoryCollection.findOne({ UserId: userId }, { projection: { videos: { $slice: 1 } } });
            let youtubeData = YoutubeData.data.items.map(video => {
                if (stop || video.snippet.title === LastProcessedVideo.videos[0].title) {
                    nextPageToken = null;
                    stop = true
                    return null;
                }
                return { title: video.snippet.title }
            }).filter(video => video !== null);

            await LikedHistoryCollection.updateOne(
                { UserId: userId },
                {
                    $push: { videos: { $each: youtubeData, $position: 0 } },
                    $set: { Timestamp: Date.now() }
                },
                { upsert: true }
            );
            if (nextPageToken === null) {
                break;
            }
        }
        Cluster.close()
    } catch (error) {
        console.error("Error fetching YouTube data:")
        return "Refresh Token Expired"

    }

    // await Aiprocessing(YoutubeData.data.items.slice(0, 10).map(video => ({ title: video.snippet.title })))
}

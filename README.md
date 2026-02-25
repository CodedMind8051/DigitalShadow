<div align="center">

# <img src="DigitalShadow_Client/public/Eye.svg" alt="DigitalShadow Logo" width="40"/> DigitalShadow  

### *Your YouTube history, decoded.*

Turn your YouTube watch history into a **daily mirror of your mind**.  
See what you learned, what distracted you, and where your time really went.

</div>

---

## 🧠 What is DigitalShadow?

DigitalShadow is a web app that connects to your YouTube account and uses AI to analyze what you watch.  

It classifies your viewing into **learning, entertainment, news, and distraction**, then generates insights about your **focus, habits, and productivity**.

It doesn’t block YouTube.  
It shows you the truth behind it.

---

## ✨ Features

- 🔐 Google login with YouTube access  
- 📺 Reads YouTube watch history  
- 🤖 AI-based video categorization  
- 📊 Daily productivity score  
- 🎨 Clean visual dashboard  
- 📝 AI-generated daily summary  

---

## ⚙️ How It Works

1. User signs in with Google  
2. The app fetches YouTube watch history  
3. Video titles are sent to AI  
4. AI classifies each video  
5. Time and category data is processed  
6. A daily report is generated and displayed  

---

## 🛠 Tech Stack

### Frontend
- Vite  
- React  
- Tailwind CSS  

### Backend
- Node.js  
- Express  
- MongoDB  
- YouTube Data API  
- Google GenAI API  

---

## 📁 Project Structure

```
DigitalShadow/
├── DigitalShadow_Client/          # Vite + React frontend
│   ├── src/
│   ├── public/
│   └── package.json
└── DigitalShadow_Server/          # Node.js + Express backend
    ├── server.js
    ├── FetchYoutubeHistoryAndAiwork.js
    ├── database.js
    ├── ConnectYoutube.js
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB
- Google Cloud Console account
- Google GenAI API key

---

### 1. Clone the repository

```bash
git clone https://github.com/CodedMind8051/DigitalShadow.git
cd DigitalShadow
```

---

### 2. Setup Backend

```bash
cd DigitalShadow_Server
npm install
```

Create a `.env` file inside `DigitalShadow_Server/`:

```env
GoogleClientID=your_google_client_id
Google_secret_key=your_google_client_secret
Google_Callback_url=your_callback_url
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
Gemini_API_Key=your_gemini_api_key
MONGODB_URI=your_mongodb_connection_string
Frontend_Url=your_frontend_url
```

Start the backend:

```bash
node server.js
```

---

### 3. Setup Frontend

```bash
cd ../DigitalShadow_Client
npm install
```

Create a `.env` file inside `DigitalShadow_Client/`:

```env
VITE_BACKEND_URL=your_backend_url
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Start the frontend:

```bash
npm run dev
```

The app will run on:

```
Frontend: http://localhost:5173  
Backend: http://localhost:5000
```

---

## 🌐 Live Production

DigitalShadow is fully deployed and running in production:

👉 https://digitalshadow.codedmind.in

This is the official, production-ready version of the application.

---

## 🔮 Future Ideas

- [ ] Comparison with friends 
- [ ] Weekly and monthly reports 
- [ ] Chrome extension
- [ ] Channel blacklisting 
- [ ] AI habit coach 
- [ ] Focus streaks 
- [ ] Export reports as PDF

---

## 🏁 Built For

DigitalShadow was built for a hackathon to explore how **AI + personal data** can help people understand and improve their digital habits.

---

## 🤝 Contributing

Contributions are welcome. Feel free to submit a Pull Request.

---

## 📜 License

MIT License

---

<div align="center">
   Think, design, and—made by Coded_Mind__ !
   **[⭐ Star this repo](https://github.com/CodedMind8051/DigitalShadow.git)** 
   if you found it useful! 
 </div>
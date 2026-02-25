import './App.css'
import { useAuth } from '@clerk/clerk-react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeNotLogin from './components/HomeNotLogin.jsx';
import Dashboard from './Dashboard.jsx';
import PrivacyPolicy from './components/PrivicyPolicy';
import TermsOfService from './components/TermServices';
import { useEffect, useState } from 'react';

function ProtectedDashboard() {
  const { isSignedIn, userId } = useAuth();

  const [categories, setcategories] = useState([])
  const [ScoreData, setScoreData] = useState([])
  const [ImportantNewsData, setImportantNewsData] = useState([])
  const [SummeryData, setSummeryData] = useState([])
  const [daysPassed, setdaysPassed] = useState(0)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    if (isSignedIn) {
      const UserStored = JSON.parse(localStorage.getItem("userData"));

      fetch(`${import.meta.env.VITE_BACKEND_URL}/YoutubeConnectedCheck`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
        body: JSON.stringify({
          userId: userId,
          UserStored: !!UserStored,
          TimeStamp: UserStored?.Timestamp ?? 0
        }),
      })
        .then(res => res.json())
        .then(response => {

          if (!response.YoutubeConnected) {
            window.location.href = response.authUrl;
            return;
          }

          try {
            if (response.UseCach) {
              const stored = JSON.parse(localStorage.getItem("userData"));
              setdaysPassed(stored.daysPassed)
              setcategories(stored.AiData.categories)
              setScoreData(stored.AiData.productivityTypes)
              setImportantNewsData(stored.AiData.importantNews)
              setSummeryData([{
                dailySummary: stored.AiData.dailySummary,
                contentBreakdown: stored.AiData.contentBreakdown,
                finalVerdict: stored.AiData.finalVerdict,
                FinalMetric: stored.AiData.FinalMetric,
              }])
            } else {
              localStorage.setItem("userData", JSON.stringify(response));
              setdaysPassed(response.daysPassed)
              setcategories(response.AiData.Data.categories)
              setScoreData(response.AiData.Data.productivityTypes)
              setImportantNewsData(response.AiData.Data.importantNews)
              setSummeryData([{
                dailySummary: response.AiData.Data.dailySummary,
                contentBreakdown: response.AiData.Data.contentBreakdown,
                finalVerdict: response.AiData.Data.finalVerdict,
                FinalMetric: response.AiData.Data.FinalMetric,
              }])
            }

            setloading(false)

          } catch (err) {
            window.location.reload()
          }
        })
        .catch(() => window.location.reload());
    }
  }, [userId, isSignedIn]);

  if (!isSignedIn) {
    return <HomeNotLogin/>
  }

  return (
    <main className='flex min-h-screen flex-col bg-neutral-900 text-white'>
      <Dashboard
        loading={loading}
        daysPassed={daysPassed}
        categories={categories}
        ScoreData={ScoreData}
        ImportantNewsData={ImportantNewsData}
        SummeryData={SummeryData}
      />
    </main>
  )
}



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedDashboard />}/>
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  )
}

export default App

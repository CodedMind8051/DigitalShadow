import './App.css'
import { useAuth } from '@clerk/clerk-react';
import HomeNotLogin from './components/HomeNotLogin.jsx';
import { useEffect } from 'react';
import Dashboard from './Dashboard.jsx';
import { useState } from 'react';


function App() {

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
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({
          userId: userId,
          UserStored:!! UserStored,
          TimeStamp:UserStored?.Timestamp ?? 0
        }),
      }).then((responses) => responses.json())
        .then((response) => {
          if (!response.YoutubeConnected) {
            window.location.href = response.authUrl;
            console.warn("user needs to connect Youtube");
          }
          else {
            try {
              if (response.UseCach) {
                const UserStored = JSON.parse(localStorage.getItem("userData"));
                setdaysPassed(UserStored.daysPassed)
                setcategories(UserStored.AiData.categories)
                setScoreData(UserStored.AiData.productivityTypes)
                setImportantNewsData(UserStored.AiData.importantNews)
                let AllSummeryData = [{
                  dailySummary: UserStored.AiData.dailySummary,
                  contentBreakdown: UserStored.AiData.contentBreakdown,
                  finalVerdict: UserStored.AiData.finalVerdict,
                  FinalMetric: UserStored.AiData.FinalMetric,
                }]
                setSummeryData(AllSummeryData)
                setloading(false)
              }
              else {
                localStorage.setItem("userData", JSON.stringify({response}));
                setdaysPassed(response.daysPassed)
                setcategories(response.AiData.Data.categories)
                setScoreData(response.AiData.Data.productivityTypes)
                setImportantNewsData(response.AiData.Data.importantNews)
                let AllSummeryData = [{
                  dailySummary: response.AiData.Data.dailySummary,
                  contentBreakdown: response.AiData.Data.contentBreakdown,
                  finalVerdict: response.AiData.Data.finalVerdict,
                  FinalMetric: response.AiData.Data.FinalMetric,
                }]
                setSummeryData(AllSummeryData)
                setloading(false)
              }
            } catch (error) {
              window.location.reload()
              console.warn(error)
            }

          }

        }
        ).catch((error) => {
          window.location.reload()
          console.error("Error:", error);
        });
    }
  }, [userId])


  if (!isSignedIn) {
    return <HomeNotLogin />
  }

  return (
    <>
      <main className='flex  min-width-screen min-h-screen flex-col bg-neutral-900 text-white'>
        <Dashboard
          loading={loading}
          daysPassed={daysPassed}
          categories={categories}
          ScoreData={ScoreData}
          ImportantNewsData={ImportantNewsData}
          SummeryData={SummeryData}
        />
      </main>

    </>
  )
}

export default App

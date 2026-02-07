import './App.css'
import { useAuth } from '@clerk/clerk-react';
import HomeNotLogin from './components/HomeNotLogin.jsx';
import { useEffect } from 'react';
import Dashboard from './Dashboard.jsx';

function App() {
  const { isSignedIn, userId } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      fetch("http://localhost:3000/YoutubeConnectedCheck", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({
          userId: userId,
        }),
      }).then((responses) => responses.json())
        .then((response) => {
          if (!response.YoutubeConnected) {
            window.location.href = response.authUrl;
            console.log("user needs to connect Youtube");
          }
          else {
            console.log("User has connected Youtube");
          }

        }
        ).catch((error) => {
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
        <Dashboard />
      </main>

    </>
  )
}






export default App

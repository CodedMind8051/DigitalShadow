import './App.css'
import { UserButton, useAuth } from '@clerk/clerk-react';
import HomeNotLogin from './components/HomeNotLogin.jsx';
import { useEffect } from 'react';

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
      }).then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [userId])


  if (!isSignedIn) {
    return <HomeNotLogin />
  }

  return (
    <>
      <UserButton />
    </>
  )
}






export default App

import { useState } from 'react'
import Header from './components/Heder.jsx'
import Tabs from './components/Tabs.jsx'
import VideoCatagory from './components/VideoCatagory.jsx'
import VideoTypeScores from './components/ScoreType.jsx'
import ImportantNews from './components/News.jsx'
import CompleteSummary from './components/SummerySection.jsx'

function Dashboard({ loading, daysPassed, categories, ScoreData, ImportantNewsData, SummeryData }) {
    const [activeTab, setActiveTab] = useState('last 24 hours');

    return (
        <div className='w-full min min-h-screen flex flex-col bg-black/80 text-white'>
            <Header />
            {loading ?
                <main className="flex min-h-screen items-center justify-center bg-black/80 text-white">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
                </main>
                : <div>
                    <div className="flex  w-full items-center justify-center mt-3.5  h-16.5 " style={{ animationDelay: '100ms' }}>
                        <Tabs daysPassed={daysPassed} activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                    <div className='w-full flex items-center justify-center mt-5'>
                        <VideoCatagory categories={categories} isVisible={true} />
                    </div>
                    <div className='w-full flex items-center justify-center mt-5 '>
                        <VideoTypeScores ScoreData={ScoreData} />
                    </div>
                    <div className='w-full flex items-center justify-center mt-5'>
                        <ImportantNews ImportantNewsData={ImportantNewsData} />
                    </div>
                    <div className='w-full flex items-center justify-center mt-5'>
                        <CompleteSummary SummeryData={SummeryData} />
                    </div>
                </div>}

        </div>
    )
}

export default Dashboard
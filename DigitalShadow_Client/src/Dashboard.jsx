import { useState } from 'react'
import Header from './components/Heder.jsx'
import Tabs from './components/Tabs.jsx'
import VideoCatagory from './components/VideoCatagory.jsx'
import { Play, Trophy, Zap, Activity, Target } from 'lucide-react';

function Dashboard() {
    const [activeTab, setActiveTab] = useState('today');
    const categories = [
        { name: 'Cricket Learning', videos: 12, percentage: 25, color: '#22c55e', icon: Trophy },
        { name: 'Cricket Matches', videos: 14, percentage: 29, color: '#3b82f6', icon: Play },
        { name: 'Tech Tutorials', videos: 10, percentage: 21, color: '#a855f7', icon: Zap },
        { name: 'Entertainment', videos: 8, percentage: 17, color: '#f59e0b', icon: Activity },
        { name: 'Time Wasted', videos: 4, percentage: 8, color: '#ef4444', icon: Target }
    ];

    return (
        <div className='w-full min min-h-screen flex flex-col bg-black/80 text-white'>
            <Header />
            <div className="flex  w-full items-center justify-center mt-3.5  h-16.5 " style={{ animationDelay: '100ms' }}>
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className='w-full flex items-center justify-center mt-5'>
                <VideoCatagory categories={categories} isVisible={true} />
            </div>
        </div>
    )
}

export default Dashboard
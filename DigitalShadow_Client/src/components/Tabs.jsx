function Tabs(  {activeTab, setActiveTab }) {
    return (
        <div className="flex gap-1  p-1 bg-neutral-900/50 rounded-xl border border-neutral-800 w-fit animate-scale" style={{ animationDelay: '100ms' }}>
            {['last 24 hours'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${activeTab === tab ? 'bg-white text-black shadow-lg' : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                        }`}
                >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
            ))}
        </div>
    );

}

export default Tabs
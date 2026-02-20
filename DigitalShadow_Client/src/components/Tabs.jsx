function Tabs(  {daysPassed, activeTab, setActiveTab }) {
    return (
        <div className="flex gap-1  p-1 bg-neutral-900/50 rounded-xl border border-neutral-800 w-fit animate-scale" style={{ animationDelay: '100ms' }}>
            {[`last ${daysPassed>=1 ? daysPassed+" Day" : "24 hours"}`].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300  bg-white text-black shadow-lg`
                        }
                >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
            ))}
        </div>
    );

}

export default Tabs
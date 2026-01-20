import React, { useState, useEffect } from 'react';
import { Play, Trophy, Zap, Calendar, BarChart3, PieChart, Activity, Target, Flame, TrendingUp, Sparkles, ArrowUpRight, ChevronRight, Brain, Coffee, Newspaper, Star, BookOpen } from 'lucide-react';

// Header Component
const Header = () => (
  <div className="border-b border-neutral-800 bg-black/80 backdrop-blur-xl sticky top-0 z-50 animate-slide-top">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 rounded-xl blur-xl animate-pulse" />
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center border border-neutral-700 animate-float">
              <Activity className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="animate-slide-left" style={{ animationDelay: '200ms' }}>
            <h1 className="text-2xl font-bold text-white tracking-tight">DigitalShadow</h1>
            <p className="text-xs text-neutral-400 font-medium">Your YouTube history, decoded</p>
          </div>
        </div>
        <button className="group relative px-6 py-2.5 bg-white text-black rounded-lg text-sm font-semibold overflow-hidden animate-slide-right" style={{ animationDelay: '300ms' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative flex items-center gap-2">
            Connect YouTube
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </button>
      </div>
    </div>
  </div>
);

// Tabs Component
const Tabs = ({ activeTab, setActiveTab }) => (
  <div className="flex gap-1 mb-10 p-1 bg-neutral-900/50 rounded-xl border border-neutral-800 w-fit animate-scale" style={{ animationDelay: '100ms' }}>
    {['today', 'week', 'month'].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
          activeTab === tab ? 'bg-white text-black shadow-lg' : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
        }`}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </div>
);

// Video Categories Component
const VideoCategories = ({ categories, isVisible }) => (
  <div className="relative mb-10 animate-slide-bottom" style={{ animationDelay: '200ms' }}>
    <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-black rounded-2xl blur-xl" />
    <div className="relative border border-neutral-800 rounded-2xl p-8 bg-gradient-to-br from-neutral-950 to-black">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-white">Video Categories</h3>
        <Target className="w-6 h-6 text-neutral-500" />
      </div>
      <div className="space-y-8">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div 
              key={idx}
              className="group animate-slide-left card-hover"
              style={{ animationDelay: `${(idx + 3) * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl blur-md" style={{ backgroundColor: `${cat.color}40` }} />
                    <div className="relative w-14 h-14 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform" style={{ borderColor: `${cat.color}40`, backgroundColor: `${cat.color}10` }}>
                      <Icon className="w-7 h-7" style={{ color: cat.color }} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{cat.name}</div>
                    <div className="text-sm text-neutral-400">{cat.videos} videos watched</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold" style={{ color: cat.color }}>{cat.percentage}%</div>
                  <div className="text-xs text-neutral-500 font-medium">of total</div>
                </div>
              </div>
              <div className="relative h-3 bg-neutral-900 rounded-full overflow-hidden">
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    width: isVisible ? `${cat.percentage}%` : '0%',
                    backgroundColor: cat.color,
                    transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: `${(idx + 3) * 80}ms`,
                    boxShadow: `0 0 20px ${cat.color}40`
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

// Video Type Score Card Component
const ScoreCard = ({ title, count, description, icon: Icon, color, delay, gradient }) => (
  <div className="relative group animate-scale" style={{ animationDelay: `${delay}ms` }}>
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    <div className="relative border border-neutral-800 rounded-2xl p-6 bg-gradient-to-br from-neutral-950 to-black card-hover">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm text-neutral-400 font-medium">{title}</h3>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center animate-float`} style={{ backgroundColor: `${color}10`, animationDelay: `${delay / 1000}s` }}>
          <Icon className="w-4 h-4 pulse-glow" style={{ color }} />
        </div>
      </div>
      <div className="text-5xl font-bold mb-2" style={{ color }}>{count}</div>
      <p className="text-xs text-neutral-500">{description}</p>
    </div>
  </div>
);

// Video Type Scores Component
const VideoTypeScores = ({ countUp }) => {
  const scores = [
    { title: 'Productive Videos', count: countUp.productive, description: 'Work & productivity content', icon: Target, color: '#22c55e', gradient: 'from-emerald-500/20 to-green-500/20', delay: 300 },
    { title: 'Study Videos', count: countUp.study, description: 'Learning & education', icon: BookOpen, color: '#3b82f6', gradient: 'from-blue-500/20 to-cyan-500/20', delay: 400 },
    { title: 'Brain Rout', count: countUp.brain, description: 'Mental workout content', icon: Brain, color: '#a855f7', gradient: 'from-purple-500/20 to-pink-500/20', delay: 500 },
    { title: 'Time Pass', count: countUp.timepass, description: 'Entertainment & leisure', icon: Coffee, color: '#f59e0b', gradient: 'from-orange-500/20 to-red-500/20', delay: 600 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {scores.map((score, idx) => (
        <ScoreCard key={idx} {...score} />
      ))}
    </div>
  );
};

// News Card Component
const NewsCard = ({ news, idx }) => {
  const Icon = news.icon;
  return (
    <div 
      className="group relative animate-scale card-hover"
      style={{ animationDelay: `${(idx + 10) * 100}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: `${news.color}20` }} />
      <div className="relative border border-neutral-800 rounded-2xl p-6 bg-black/50 backdrop-blur-sm overflow-hidden">
        <div className="shimmer absolute inset-0" />
        <div className="relative">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${news.color}20` }}>
              <Icon className="w-5 h-5" style={{ color: news.color }} />
            </div>
            <div className="flex-1">
              <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: `${news.color}20`, color: news.color }}>
                {news.category}
              </span>
            </div>
          </div>
          <h4 className="font-bold text-white text-base mb-2 leading-tight">{news.title}</h4>
          <p className="text-xs text-neutral-400 font-medium">{news.source}</p>
        </div>
        <ChevronRight className="absolute bottom-4 right-4 w-4 h-4 text-neutral-600 group-hover:text-neutral-400 group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
};

// Important News Component
const ImportantNews = ({ news }) => (
  <div className="relative mb-10 animate-scale" style={{ animationDelay: '700ms' }}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl" />
    <div className="relative border border-neutral-800 rounded-3xl p-8 bg-gradient-to-br from-neutral-950 to-black card-hover">
      <div className="flex items-center gap-4 mb-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-lg" />
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center border border-blue-500/20">
            <Newspaper className="w-6 h-6 text-blue-400 pulse-glow" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Important News</h3>
          <p className="text-sm text-neutral-400 font-medium">From videos you watched today</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {news.map((item, idx) => (
          <NewsCard key={idx} news={item} idx={idx} />
        ))}
      </div>
    </div>
  </div>
);

// Event Card Component
const EventCard = ({ event, idx }) => {
  const Icon = event.icon;
  return (
    <div 
      className="group relative animate-slide-left card-hover"
      style={{ animationDelay: `${(idx + 15) * 100}ms` }}
    >
      <div className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: `${event.color}20` }} />
      <div className="relative border border-neutral-800 rounded-xl p-5 bg-black/50 backdrop-blur-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${event.color}20` }}>
          <Icon className="w-6 h-6" style={{ color: event.color }} />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-white text-base mb-1">{event.event}</h4>
          <p className="text-sm text-neutral-400">{event.detail}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-neutral-600 group-hover:text-neutral-400 group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
};

// Important Events Component
const ImportantEvents = ({ events }) => (
  <div className="relative mb-10 animate-scale" style={{ animationDelay: '800ms' }}>
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 rounded-3xl blur-2xl" />
    <div className="relative border border-neutral-800 rounded-3xl p-8 bg-gradient-to-br from-neutral-950 to-black card-hover">
      <div className="flex items-center gap-4 mb-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl blur-lg" />
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 flex items-center justify-center border border-emerald-500/20">
            <Star className="w-6 h-6 text-emerald-400 pulse-glow" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Important Events</h3>
          <p className="text-sm text-neutral-400 font-medium">Your milestones and achievements</p>
        </div>
      </div>
      <div className="space-y-4">
        {events.map((event, idx) => (
          <EventCard key={idx} event={event} idx={idx} />
        ))}
      </div>
    </div>
  </div>
);

// Summary Section Component
const SummarySection = ({ title, icon: Icon, iconColor, children }) => (
  <div className="relative">
    <div className="shimmer absolute inset-0 rounded-xl" />
    <div className="relative border border-neutral-800 rounded-xl p-6 bg-black/50 backdrop-blur-sm">
      <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
        <Icon className="w-5 h-5" style={{ color: iconColor }} />
        {title}
      </h4>
      {children}
    </div>
  </div>
);

// Complete Summary Component
const CompleteSummary = () => (
  <div className="relative animate-slide-bottom" style={{ animationDelay: '900ms' }}>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
    <div className="relative border border-neutral-800 rounded-3xl p-8 bg-gradient-to-br from-neutral-950 to-black card-hover">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl blur-lg" />
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center border border-purple-500/20">
            <Sparkles className="w-6 h-6 text-purple-400 pulse-glow" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Complete Summary</h3>
          <p className="text-sm text-neutral-400 font-medium">Your day at a glance</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <SummarySection title="Productivity Overview" icon={Trophy} iconColor="#22c55e">
          <p className="text-neutral-300 leading-relaxed mb-4">
            Today you hit a solid <span className="text-emerald-400 font-bold">78 runs</span> in your productivity innings! You watched <span className="text-blue-400 font-bold">48 videos</span> with <span className="text-emerald-400 font-bold">67% being productive content</span>. Your focus peaked during morning hours when you consumed most of your cricket learning and tech tutorial content.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="border border-neutral-800 rounded-lg p-3 bg-black">
              <div className="text-xs text-neutral-400 mb-1">Total Videos</div>
              <div className="text-2xl font-bold text-white">48</div>
            </div>
            <div className="border border-neutral-800 rounded-lg p-3 bg-black">
              <div className="text-xs text-neutral-400 mb-1">Productive</div>
              <div className="text-2xl font-bold text-emerald-400">67%</div>
            </div>
            <div className="border border-neutral-800 rounded-lg p-3 bg-black">
              <div className="text-xs text-neutral-400 mb-1">Top Category</div>
              <div className="text-base font-bold text-blue-400">Cricket</div>
            </div>
            <div className="border border-neutral-800 rounded-lg p-3 bg-black">
              <div className="text-xs text-neutral-400 mb-1">Streak</div>
              <div className="text-2xl font-bold text-orange-400">5 🔥</div>
            </div>
          </div>
        </SummarySection>

        <SummarySection title="Content Breakdown" icon={Brain} iconColor="#a855f7">
          <p className="text-neutral-300 leading-relaxed">
            Your content consumption was well-balanced. Cricket content dominated at <span className="text-blue-400 font-bold">29% matches</span> and <span className="text-emerald-400 font-bold">25% learning videos</span>. You also invested <span className="text-purple-400 font-bold">21% in tech tutorials</span>, showing strong commitment to skill development. Entertainment took up a moderate <span className="text-orange-400 font-bold">17%</span>, and you kept time-wasting content minimal at just <span className="text-red-400 font-bold">8%</span> - excellent discipline! 🎯
          </p>
        </SummarySection>

        <SummarySection title="Final Verdict" icon={TrendingUp} iconColor="#22c55e">
          <p className="text-neutral-300 leading-relaxed">
            Keep this momentum going - you're building a strong winning streak! 🏏 Your 5-day focus streak shows consistency and dedication. The balance between learning (cricket techniques, tech tutorials) and entertainment is ideal for sustainable productivity. Consider maintaining this pattern and perhaps increasing study content slightly for even better results. Overall, this is a championship-level performance! 🏆
          </p>
        </SummarySection>
      </div>
    </div>
  </div>
);

// Main App Component
export default function DigitalShadowUI() {
  const [activeTab, setActiveTab] = useState('today');
  const [isVisible, setIsVisible] = useState(false);
  const [countUp, setCountUp] = useState({ productive: 0, study: 0, brain: 0, timepass: 0 });

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCountUp({
        productive: Math.floor(18 * progress),
        study: Math.floor(12 * progress),
        brain: Math.floor(10 * progress),
        timepass: Math.floor(8 * progress)
      });

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const categories = [
    { name: 'Cricket Learning', videos: 12, percentage: 25, color: '#22c55e', icon: Trophy },
    { name: 'Cricket Matches', videos: 14, percentage: 29, color: '#3b82f6', icon: Play },
    { name: 'Tech Tutorials', videos: 10, percentage: 21, color: '#a855f7', icon: Zap },
    { name: 'Entertainment', videos: 8, percentage: 17, color: '#f59e0b', icon: Activity },
    { name: 'Time Wasted', videos: 4, percentage: 8, color: '#ef4444', icon: Target }
  ];

  const importantNews = [
    { title: "India wins ICC World Cup 2024", source: "Cricket News", category: "Cricket", icon: Trophy, color: '#22c55e' },
    { title: "New AI breakthrough in machine learning announced", source: "Tech Weekly", category: "Technology", icon: Sparkles, color: '#a855f7' },
    { title: "React 19 released with new features", source: "Dev News", category: "Development", icon: Zap, color: '#3b82f6' },
    { title: "IPL 2025 auction creates records", source: "Sports Daily", category: "Cricket", icon: Star, color: '#f59e0b' }
  ];

  const importantEvents = [
    { event: "Your most productive day this week", detail: "78% productivity score achieved on Friday", icon: TrendingUp, color: '#22c55e' },
    { event: "5-day focus streak milestone", detail: "Consistently maintained high productivity", icon: Flame, color: '#f59e0b' },
    { event: "Cricket learning peak detected", detail: "Watched 12 technique videos today", icon: BookOpen, color: '#3b82f6' }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInFromTop { from { transform: translateY(-30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes slideInFromBottom { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes slideInFromLeft { from { transform: translateX(-30px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideInFromRight { from { transform: translateX(30px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
        
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slide-top { animation: slideInFromTop 0.8s ease-out forwards; }
        .animate-slide-bottom { animation: slideInFromBottom 0.8s ease-out forwards; }
        .animate-slide-left { animation: slideInFromLeft 0.8s ease-out forwards; }
        .animate-slide-right { animation: slideInFromRight 0.8s ease-out forwards; }
        .animate-scale { animation: scaleIn 0.8s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .pulse-glow {
          animation: pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <Header />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <VideoCategories categories={categories} isVisible={isVisible} />
        <VideoTypeScores countUp={countUp} />
        <ImportantNews news={importantNews} />
        <ImportantEvents events={importantEvents} />
        <CompleteSummary />
      </div>
    </div>
  );
}

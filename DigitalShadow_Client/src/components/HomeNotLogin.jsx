import { SignInButton } from '@clerk/clerk-react';
import { Activity, Eye, Shield, Youtube } from 'lucide-react';
import "../css/Animation.css"
import { Link } from "react-router-dom";

export default function HomeNotLogin() {
  return (
    <div className="min-h-screen min-w-screen overflow-y-scroll bg-gradient-to-br from-black via-zinc-900 to-black text-white relative overflow-hidden">
      <div className="blob absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="blob-delay absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl pointer-events-none" />
      
      <nav className="nav-animate fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-zinc-800/60 bg-black/60 backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <Eye className="w-8 h-8 text-purple-400" />
          <h1 className="text-base font-bold tracking-wide bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            DigitalShadow
          </h1>
        </div>
        <SignInButton mode="modal">
          <button className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition border border-zinc-700 rounded-lg hover:border-purple-500/60">
            Sign In
          </button>
        </SignInButton>
      </nav>

      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-40 md:pt-52 pb-20">
        <div className="hero-badge inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8">
          <Activity className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-300">YouTube Watch History Analysis</span>
        </div>

        <h2 className="hero-title text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl mb-6">
          Understand your
          <span className="gradient-text block mt-2">
            YouTube habits.
          </span>
          <span className="block mt-2 text-gray-400 text-3xl md:text-5xl">
            Not your excuses.
          </span>
        </h2>

        <p className="hero-desc mt-6 text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
          DigitalShadow analyzes your YouTube watch history to reveal patterns in your viewing behavior.
          See what you learn, what you waste, and what quietly steals your focus.
        </p>

        {/* NEW: What we do section */}
        <div className="mt-12 max-w-3xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Youtube className="w-8 h-8 text-red-500" />
            <h3 className="text-2xl font-bold text-white">How DigitalShadow Works</h3>
          </div>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            Connect your YouTube account to get AI-powered insights about your viewing habits. 
            We analyze your watch history and liked videos to help you understand your content 
            consumption patterns, productivity, and interests.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4">
              <div className="text-blue-400 font-semibold mb-2">📊 Content Analysis</div>
              <div className="text-gray-400">Categorize videos into learning, entertainment, and productivity</div>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4">
              <div className="text-purple-400 font-semibold mb-2">🤖 AI Insights</div>
              <div className="text-gray-400">Get intelligent analysis of your YouTube viewing patterns</div>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4">
              <div className="text-green-400 font-semibold mb-2">🔒 Privacy First</div>
              <div className="text-gray-400">Your data is processed securely and never sold</div>
            </div>
          </div>
        </div>

        <div className="hero-cta mt-12 bg-[#060607] flex flex-col sm:flex-row gap-4">
          <SignInButton mode="modal">
            <button className="cta-btn group px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center space-x-2">
              <span>Connect YouTube & Get Started</span>
              <Eye className="w-5 h-5 group-hover:scale-110 transition" />
            </button>
          </SignInButton>
        </div>

        <div className="hero-chips mt-16 flex flex-wrap items-center justify-center gap-3">
          {[
            { icon: <Shield className="w-4 h-4 text-green-400" />, label: 'Privacy First' },
            { icon: <Youtube className="w-4 h-4 text-red-500" />, label: 'YouTube Integration' },
            { icon: <Activity className="w-4 h-4 text-blue-400" />, label: 'Real-time Analysis' },
            { icon: <Eye className="w-4 h-4 text-purple-400" />, label: 'Insightful Reports' },
          ].map(({ icon, label }) => (
            <div key={label} className="chip flex items-center space-x-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full px-4 py-2 cursor-default">
              {icon}
              <span className="text-sm text-gray-300">{label}</span>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer-fade w-full border-t border-zinc-800/50 py-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">
            DigitalShadow - AI-powered YouTube watch history analysis for self-awareness
          </p>
          <p className="text-xs text-gray-600 mt-2">
            We use YouTube Data API to analyze your watch history. Your data is never sold or shared.
          </p>
          <div className="mt-3 flex items-center justify-center space-x-6 text-xs text-gray-600">
            <Link to="/privacy" className="hover:text-gray-400 transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gray-400 transition">
              Terms of Service
            </Link>
            <a href="mailto:support@digitalshadow.codedmind.in" className="hover:text-gray-400 transition">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
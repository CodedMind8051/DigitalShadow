import React from 'react';
import { SignInButton } from '@clerk/clerk-react';
import { Activity, Eye, Shield } from 'lucide-react';

export default function HomeNotLogin() {

  return (
    <div className="min-h-screen min-w-screen overflow-y-scroll bg-gradient-to-br from-black via-zinc-900 to-black text-white relative overflow-hidden">
 
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse"></div>
      

      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-zinc-800/50">
        <div className="flex items-center space-x-6">
          <Eye className="w-20 h-14  text-purple-400"  />
          <h1 className="text-md font-bold tracking-wide bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Digital Shadow
          </h1>
        </div>
        <SignInButton  mode="modal">
          <button className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition border border-zinc-700 rounded-lg hover:border-zinc-600">
            Sign In
          </button>
        </SignInButton>
      </nav>

      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-20 md:mt-32">

        <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8">
          <Activity className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-300">Digital Awareness Platform</span>
        </div>

 
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl mb-6">
          Understand your
          <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            digital behavior.
          </span>
          <span className="block mt-2 text-gray-400 text-3xl md:text-5xl">
            Not your excuses.
          </span>
        </h2>

 
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
          DigitalShadow turns your online activity into clarity.
          See what you learn, what you waste, and what quietly steals your focus.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <SignInButton mode="modal">
            <button className="group px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Get Started Free</span>
              <Eye className="w-5 h-5 group-hover:scale-110 transition" />
            </button>
          </SignInButton>
        </div>


        <div className="mt-19 p-7 flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center space-x-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full px-4 py-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300">Privacy First</span>
          </div>
          <div className="flex items-center space-x-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full px-4 py-2">
            <Activity className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Real-time Tracking</span>
          </div>
          <div className="flex items-center space-x-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full px-4 py-2">
            <Eye className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Insightful Analytics</span>
          </div>
        </div>
      </main>

      <footer className=" bottom-0 w-full border-t border-zinc-800/50 py-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Built for people who want control, not dopamine.
          </p>
          <div className="mt-3 flex items-center justify-center space-x-6 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition">Terms</a>
            <a href="#" className="hover:text-gray-400 transition">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
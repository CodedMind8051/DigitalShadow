import { SignInButton } from '@clerk/clerk-react';
import { Activity, Eye, Shield } from 'lucide-react';

const styles = `
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50%       { background-position: 100% 50%; }
  }
  @keyframes floatBlob {
    0%, 100% { transform: scale(1) translate(0, 0); }
    33%       { transform: scale(1.05) translate(10px, -15px); }
    66%       { transform: scale(0.97) translate(-8px, 10px); }
  }

  .nav-animate   { animation: fadeInDown 0.6s ease both; }
  .hero-badge    { animation: fadeInUp 0.6s ease 0.2s both; }
  .hero-title    { animation: fadeInUp 0.7s ease 0.35s both; }
  .hero-sub      { animation: fadeInUp 0.7s ease 0.45s both; }
  .hero-desc     { animation: fadeInUp 0.7s ease 0.55s both; }
  .hero-cta      { animation: fadeInUp 0.7s ease 0.65s both; }
  .hero-chips    { animation: fadeIn  0.8s ease 0.85s both; }
  .footer-fade   { animation: fadeIn  1s   ease 1s    both; }

  .gradient-text {
    background: linear-gradient(90deg, #c084fc, #f472b6, #60a5fa);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 4s ease infinite;
  }

  .blob {
    animation: floatBlob 8s ease-in-out infinite;
  }
  .blob-delay {
    animation: floatBlob 10s ease-in-out 2s infinite;
  }

  .cta-btn {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .cta-btn:hover {
    transform: scale(1.06);
    box-shadow: 0 0 40px rgba(168, 85, 247, 0.55);
  }

  .chip {
    transition: border-color 0.25s, background 0.25s;
  }
  .chip:hover {
    border-color: rgba(168,85,247,0.5);
    background: rgba(168,85,247,0.08);
  }
`;

export default function HomeNotLogin() {
  return (
    <div className="min-h-screen min-w-screen overflow-y-scroll bg-gradient-to-br from-black via-zinc-900 to-black text-white relative overflow-hidden">
      <style>{styles}</style>

      {/* Ambient blobs */}
      <div className="blob absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="blob-delay absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl pointer-events-none" />

      {/* ── FIXED NAVBAR ── */}
      <nav className="nav-animate fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-zinc-800/60 bg-black/60 backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <Eye className="w-8 h-8 text-purple-400" />
          <h1 className="text-base font-bold tracking-wide bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Digital Shadow
          </h1>
        </div>
        <SignInButton mode="modal">
          <button className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition border border-zinc-700 rounded-lg hover:border-purple-500/60">
            Sign In
          </button>
        </SignInButton>
      </nav>

      {/* ── MAIN (offset for fixed nav) ── */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-40 md:pt-52 pb-20">

        {/* Badge */}
        <div className="hero-badge inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8">
          <Activity className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-300">Digital Awareness Platform</span>
        </div>

        {/* Headline */}
        <h2 className="hero-title text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl mb-6">
          Understand your
          <span className="gradient-text block mt-2">
            digital behavior.
          </span>
          <span className="block mt-2 text-gray-400 text-3xl md:text-5xl">
            Not your excuses.
          </span>
        </h2>

        {/* Description */}
        <p className="hero-desc mt-6 text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
          DigitalShadow turns your online activity into clarity.
          See what you learn, what you waste, and what quietly steals your focus.
        </p>

        {/* CTA */}
        <div className="hero-cta mt-12 flex flex-col sm:flex-row gap-4">
          <SignInButton mode="modal">
            <button className="cta-btn group px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center space-x-2">
              <span>Get Started Free</span>
              <Eye className="w-5 h-5 group-hover:scale-110 transition" />
            </button>
          </SignInButton>
        </div>

        {/* Chips */}
        <div className="hero-chips mt-16 flex flex-wrap items-center justify-center gap-3">
          {[
            { icon: <Shield className="w-4 h-4 text-green-400" />, label: 'Privacy First' },
            { icon: <Activity className="w-4 h-4 text-blue-400" />, label: 'Real-time Tracking' },
            { icon: <Eye className="w-4 h-4 text-purple-400" />, label: 'Insightful Analytics' },
          ].map(({ icon, label }) => (
            <div key={label} className="chip flex items-center space-x-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full px-4 py-2 cursor-default">
              {icon}
              <span className="text-sm text-gray-300">{label}</span>
            </div>
          ))}
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer-fade w-full border-t border-zinc-800/50 py-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">Built for people who want control, not dopamine.</p>
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
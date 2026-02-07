import {Target,Brain, Coffee,BookOpen } from 'lucide-react';



const ScoreCard = ({ title, count, description, icon: Icon, color, delay, gradient }) => (
  <div className="relative h-[60%] group animate-scale" style={{ animationDelay: `${delay}ms` }}>
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
function VideoTypeScores({countUp}){
 const scores = [
    { title: 'Productive Videos', count: countUp.productive, description: 'Work & productivity content', icon: Target, color: '#22c55e', gradient: 'from-emerald-500/20 to-green-500/20', delay: 300 },
    { title: 'Study Videos', count: countUp.study, description: 'Learning & education', icon: BookOpen, color: '#3b82f6', gradient: 'from-blue-500/20 to-cyan-500/20', delay: 400 },
    { title: 'Brain Rout', count: countUp.brain, description: 'Mental workout content', icon: Brain, color: '#a855f7', gradient: 'from-purple-500/20 to-pink-500/20', delay: 500 },
    { title: 'Time Pass', count: countUp.timepass, description: 'Entertainment & leisure', icon: Coffee, color: '#f59e0b', gradient: 'from-orange-500/20 to-red-500/20', delay: 600 }
  ];

  return (
    <div className="grid  w-[65%]  max-[800px]:w-[95%] grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
      {scores.map((score, idx) => (
        <ScoreCard key={idx} {...score} />
      ))}
    </div>
  );
}

export default VideoTypeScores
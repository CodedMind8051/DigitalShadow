import {  Target } from 'lucide-react';

function VideoCatagory({ categories, isVisible }) {
  return (

    <div className="relative  max-[800px]:w-[95%] mb-10 w-[80%] animate-slide-bottom" style={{ animationDelay: '200ms' }}>
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
                className="group animate-slide-left card-hover hover:cursor-pointer"
                style={{ animationDelay: `${(idx + 3) * 80}ms` } }
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


}

export default VideoCatagory
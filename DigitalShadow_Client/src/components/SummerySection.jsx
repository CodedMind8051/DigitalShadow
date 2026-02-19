import { Trophy, TrendingUp, Sparkles, Brain } from 'lucide-react';

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

function CompleteSummary({ SummeryData }) {

   if (SummeryData.length===0){
    return null
   }
    return (
        <div className="relative mb-10  max-[800px]:w-[95%] w-[65%] animate-slide-bottom" style={{ animationDelay: '900ms' }}>
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
                            {SummeryData[0].dailySummary}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div className="border border-neutral-800 rounded-lg p-3 bg-black">
                                <div className="text-xs text-neutral-400 mb-1">Total Videos</div>
                                <div className="text-2xl font-bold text-white">{SummeryData[0].FinalMetric.TotalVideos}</div>
                            </div>
                            <div className="border border-neutral-800 rounded-lg p-3 bg-black">
                                <div className="text-xs text-neutral-400 mb-1">Productive</div>
                                <div className="text-2xl font-bold text-emerald-400">{SummeryData[0].FinalMetric.Productive}</div>
                            </div>
                            <div className="border border-neutral-800 rounded-lg p-3 bg-black">
                                <div className="text-xs text-neutral-400 mb-1">Top Category</div>
                                <div className="text-base font-bold text-blue-400">{SummeryData[0].FinalMetric.TopCategory}</div>
                            </div>
                            <div className="border border-neutral-800 rounded-lg p-3 bg-black">
                                <div className="text-xs text-neutral-400 mb-1">Streak</div>
                                <div className="text-2xl font-bold text-orange-400">{SummeryData[0].FinalMetric.Streak} 🔥</div>
                            </div>
                        </div>
                    </SummarySection>

                    <SummarySection title="Content Breakdown" icon={Brain} iconColor="#a855f7">
                        <p className="text-neutral-300 leading-relaxed">
                            {SummeryData[0].contentBreakdown}
                        </p>
                    </SummarySection>

                    <SummarySection title="Final Verdict" icon={TrendingUp} iconColor="#22c55e">
                        <p className="text-neutral-300 leading-relaxed">
                            {SummeryData[0].finalVerdict}
                        </p>
                    </SummarySection>
                </div>
            </div>
        </div>
    )
}

export default CompleteSummary






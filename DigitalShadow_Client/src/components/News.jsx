import { ChevronRight, Newspaper } from 'lucide-react';




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


export default function ImportantNews({ news }) {
    return (
        <div className="relative mb-10 animate-scale  max-[800px]:w-[95%] w-[65%]" style={{ animationDelay: '700ms' }}>
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

    )
}



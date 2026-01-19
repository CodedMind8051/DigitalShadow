import { Eye, ArrowUpRight } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

function Header() {
  return (
    <div className="border-b border-neutral-800 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          
          {/* Logo + Title */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-white/10 rounded-xl blur-xl animate-pulse" />
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center border border-neutral-700">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>

            <div className="truncate">
              <h1 className="text-lg sm:text-2xl font-bold text-white tracking-tight truncate">
                DigitalShadow
              </h1>
              <p className="hidden sm:block text-sm text-neutral-400 font-medium">
                Your YouTube history, decoded
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            
            {/* Button */}
            <button
              className="group relative px-3 sm:px-6 py-2 sm:py-2.5 bg-white text-black rounded-lg text-xs sm:text-sm font-semibold overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-1.5 sm:gap-2">
                <span className="hidden sm:inline">Connect YouTube</span>
                <span className="sm:hidden">Connect</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>

            {/* User Avatar */}
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "w-9 h-9 sm:w-10 sm:h-10 rounded-lg"
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

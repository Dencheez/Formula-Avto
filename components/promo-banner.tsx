"use client"

import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

export function PromoBanner() {
  return (
    <div className={cn(
      "mx-4 p-5 rounded-3xl flex items-center justify-between",
      "bg-gradient-to-br from-[#E0F2FE] to-[#F0F9FF]",
      "border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)]",
      "relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 active:scale-[0.98]"
    )}>
      {/* Decorative accent background */}
      <div className="absolute top-[-50%] right-[-10%] w-[150px] h-[150px] bg-purple-400/10 blur-[60px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 flex flex-col gap-1">
        <h3 className="font-bold text-lg text-foreground tracking-tight">Новые и с пробегом</h3>
        <p className="text-sm text-muted-foreground/80 leading-tight">Найдите ту самую машину</p>
      </div>

      <div className="relative z-10">
        <div className="relative w-28 h-20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
          {/* Main image */}
          <img 
            src="/10815917.png" 
            alt="Search cars" 
            className="w-full h-full object-contain drop-shadow-md"
          />
          
          {/* Enhanced Search Badge */}
          <div className={cn(
            "absolute -right-1 -top-1 w-9 h-9",
            "bg-gradient-to-tr from-purple-600 to-purple-400",
            "rounded-full flex items-center justify-center",
            "shadow-lg shadow-purple-500/30",
            "border-2 border-white transition-all duration-300",
            "group-hover:rotate-12 group-hover:scale-110"
          )}>
            <Search className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

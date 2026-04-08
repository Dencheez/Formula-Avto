"use client"

import { categories } from "@/lib/data"
import { Car, Sparkles, Star, Truck, Bike, Key, Settings, Cog } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  car: Car,
  sparkles: Sparkles,
  star: Star,
  truck: Truck,
  bike: Bike,
  key: Key,
  settings: Settings,
  cog: Cog,
}

interface CategoryGridProps {
  onCategorySelect?: (categoryId: string) => void
}

export function CategoryGrid({ onCategorySelect }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-6 gap-2 p-4 bg-white">
      {categories.map((category, index) => {
        const Icon = iconMap[category.icon] || Car
        const isWide = index === 3 || index === 4
        const colSpan = isWide ? "col-span-3" : "col-span-2"
        return (
          <button
            key={category.id}
            onClick={() => onCategorySelect?.(category.id)}
            className={`
              ${colSpan} 
              relative flex flex-col items-start p-3 
              bg-[#F2F4F7] rounded-2xl 
              hover:bg-[#E5E7EB] transition-all 
              min-h-[110px] overflow-hidden group
            `}
          >
            <span className="text-[13px] font-semibold text-[#242424] text-left leading-tight z-10 max-w-[80%]">
              {category.name}
            </span>
            <div className="flex-1 flex items-end justify-end w-full">
              <Icon className="h-10 w-10 text-muted-foreground" />
            </div>
          </button>
        )
      })}
    </div>
  )
}

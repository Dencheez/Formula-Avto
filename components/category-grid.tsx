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
    <div className="grid grid-cols-3 gap-3 p-4">
      {categories.map((category) => {
        const Icon = iconMap[category.icon] || Car
        return (
          <button
            key={category.id}
            onClick={() => onCategorySelect?.(category.id)}
            className="flex flex-col items-start p-3 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors min-h-[100px]"
          >
            <span className="text-sm font-medium text-foreground text-left leading-tight">
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

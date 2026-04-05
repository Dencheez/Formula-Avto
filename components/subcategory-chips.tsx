"use client"

import { vehicleSubcategories } from "@/lib/data"

interface SubcategoryChipsProps {
  title: string
}

export function SubcategoryChips({ title }: SubcategoryChipsProps) {
  return (
    <div className="px-4 py-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {vehicleSubcategories.map((sub) => (
          <button
            key={sub}
            className="px-4 py-2 rounded-full border border-border text-sm hover:bg-secondary transition-colors"
          >
            {sub}
          </button>
        ))}
      </div>
    </div>
  )
}

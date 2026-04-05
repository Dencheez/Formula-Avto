"use client"

import { useState } from "react"

interface CategoryItem {
  id: string
  title: string
  subcategories: string[]
}

const categoriesData: CategoryItem[] = [
  {
    id: "commercial",
    title: "Коммерческий транспорт",
    subcategories: ["Грузовики", "Тягачи", "Прицепы", "Шины", "Сельхозтехника", "Ещё"],
  },
  {
    id: "parts",
    title: "Запчасти",
    subcategories: ["Шины и диски", "Запчасти для авто", "Аудио- и видеотехника", "Ещё"],
  },
  {
    id: "moto",
    title: "Мотоциклы",
    subcategories: ["Мотоциклы", "Мопеды и скутеры", "Снегоходы", "Квадроциклы", "Ещё"],
  },
  {
    id: "water",
    title: "Водный транспорт",
    subcategories: ["Моторные лодки", "Надувные лодки", "Катера и яхты", "Гидроциклы", "Ещё"],
  },
  {
    id: "services",
    title: "Транспортные услуги",
    subcategories: ["Автосервисы", "Аренда авто", "Аренда спецтехники"],
  },
]

export function Categories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <div className="py-6">
      <div className="flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-hide">
        {categoriesData.map((cat) => (
          <div
            key={cat.id}
            className="min-w-[85%] max-w-[85%] snap-start flex-shrink-0"
          >
            {/* Title */}
            <h2 className="text-xl font-bold mb-3">{cat.title}</h2>

            {/* Image placeholder */}
            <div className="relative aspect-[16/9] bg-secondary rounded-xl overflow-hidden mb-3">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <span className="text-sm">Фото</span>
              </div>
            </div>

            {/* Subcategory chips */}
            <div className="flex flex-wrap gap-2">
              {cat.subcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === `${cat.id}-${sub}` ? null : `${cat.id}-${sub}`
                    )
                  }
                  className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                    activeCategory === `${cat.id}-${sub}`
                      ? "bg-foreground text-background border-foreground"
                      : "border-border hover:bg-secondary"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
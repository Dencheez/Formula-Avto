"use client"

import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const youngCars = [
  {
    id: "y1",
    title: "Kia Rio 1.6 MT, 2021, 86 000 км",
    price: 1500000,
    location: "Ставропольский край, Будённовский...",
    badge: "Только на Форум Авто",
    badgeColor: "bg-purple-600",
  },
  {
    id: "y2",
    title: "Toyota Camry 2.5 AT, 2020,...",
    price: 3000000,
    location: "Москва",
    badge: "Надёжный партнёр",
    badgeColor: "bg-green-500",
  },
  {
    id: "y3",
    title: "Hyundai Tucson 2.0 AT, 2022, 45 000 км",
    price: 2800000,
    location: "Санкт-Петербург",
    badge: "1 владелец",
    badgeColor: "bg-blue-500",
  },
  {
    id: "y4",
    title: "Volkswagen Polo 1.6 AT, 2021, 52 000 км",
    price: 1350000,
    location: "Краснодарский край, Краснодар",
    badge: "Надёжный партнёр",
    badgeColor: "bg-green-500",
  },
  {
    id: "y5",
    title: "Skoda Octavia 1.4 AT, 2022, 38 000 км",
    price: 2100000,
    location: "Московская обл., Химки",
    badge: "Проверено",
    badgeColor: "bg-blue-500",
  },
  {
    id: "y6",
    title: "Geely Coolray 1.5 AT, 2023, 15 000 км",
    price: 1750000,
    location: "Новосибирская обл., Новосибирск",
    badge: "1 владелец",
    badgeColor: "bg-blue-500",
  },
]

export function Avto3() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price)
  }

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Автомобили до 3 лет</h2>
      <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
        {youngCars.map((car) => (
          <div
            key={car.id}
            className="min-w-[calc(50%-6px)] max-w-[calc(50%-6px)] snap-start rounded-xl overflow-hidden bg-background border border-border flex-shrink-0"
          >
            <div className="relative aspect-[4/3] bg-secondary">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                Фото
              </div>
              <span
                className={`absolute bottom-2 left-2 px-2 py-1 ${car.badgeColor} text-white text-xs rounded`}
              >
                {car.badge}
              </span>
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 h-8 w-8 bg-white/80 rounded-full"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium line-clamp-2">{car.title}</h3>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="font-bold">{formatPrice(car.price)} ₽</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {car.location}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button variant="outline" className="mt-4 rounded-xl">
        Показать все
      </Button>
    </div>
  )
}
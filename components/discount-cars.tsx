"use client"

import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const discountCars = [
  {
    id: "1",
    title: "Kia Rio 1.6 AT, 2016,...",
    price: 899999,
    originalPrice: 980000,
    location: "Нижегородская обл., Нижний Новгород",
    badge: "Надёжный партнёр",
    badgeColor: "bg-green-500",
  },
  {
    id: "2",
    title: "Kia Rio 1.6 AT, 2016,...",
    price: 799000,
    location: "Москва",
    timeAgo: "7 дней назад",
    badge: "1 владелец",
    badgeColor: "bg-blue-500",
    badgeCount: "14",
  },
]

export function DiscountCars() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price)
  }

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Скидки на авто с пробегом</h2>
      <div className="grid grid-cols-2 gap-3">
        {discountCars.map((car) => (
          <div key={car.id} className="rounded-xl overflow-hidden bg-background border border-border">
            <div className="relative aspect-[4/3] bg-secondary">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                Фото
              </div>
              <span className={`absolute bottom-2 left-2 px-2 py-1 ${car.badgeColor} text-white text-xs rounded`}>
                {car.badge}
                {car.badgeCount && <span className="ml-1">{car.badgeCount}</span>}
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
                <span className="text-xs">💰</span>
              </div>
              {car.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">
                  {formatPrice(car.originalPrice)} ₽
                </span>
              )}
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{car.location}</p>
              {car.timeAgo && (
                <p className="text-xs text-muted-foreground">{car.timeAgo}</p>
              )}
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

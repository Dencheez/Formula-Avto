"use client"

import { Heart, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFavorites } from "@/lib/favorites-context"
import { useContact } from "@/lib/contact-context"
import { cn } from "@/lib/utils"

import { discountCars } from "@/lib/data"

interface DiscountCarsProps {
  onShowAll?: () => void
}

export function DiscountCars({ onShowAll }: DiscountCarsProps) {
  const { toggleFavorite, isFavorite } = useFavorites()
  const { openContact } = useContact()
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
              {car.images && car.images.length > 0 ? (
                <img
                  src={car.images[0]}
                  alt={car.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                  Фото
                </div>
              )}
              {car.badges && car.badges.length > 0 && (
                <span className="absolute bottom-2 left-2 px-2 py-1 bg-primary text-white text-xs rounded">
                  {car.badges[0]}
                </span>
              )}
              <Button
                size="icon"
                variant="ghost"
                onClick={() => toggleFavorite(car.id)}
                className="absolute top-2 right-2 h-8 w-8 bg-white/80 rounded-full group"
              >
                <Heart
                  className={cn(
                    "h-4 w-4 transition-colors",
                    isFavorite(car.id) ? "fill-red-500 text-red-500" : "text-gray-400 group-hover:text-red-500"
                  )}
                />
              </Button>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium line-clamp-2">{car.title}</h3>
              <div className="flex items-center justify-between mt-2 flex-wrap gap-y-1">
                <div className="flex flex-col">
                  <span className="font-bold">{formatPrice(car.price)} ₽</span>
                  {car.originalPrice && (
                    <span className="text-[10px] text-muted-foreground line-through">
                      {formatPrice(car.originalPrice)} ₽
                    </span>
                  )}
                </div>
                <div className="flex gap-1.5">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => openContact(car)}
                    className="h-7 w-7 rounded-full bg-green-500 hover:bg-green-600 text-white p-1"
                  >
                    <Phone className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => openContact(car)}
                    className="h-7 w-7 rounded-full bg-blue-500 hover:bg-blue-600 text-white p-1"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button variant="outline" className="mt-4 rounded-xl" onClick={onShowAll}>
        Показать все
      </Button>
    </div>
  )
}

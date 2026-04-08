"use client"

import { Heart, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFavorites } from "@/lib/favorites-context"
import { useContact } from "@/lib/contact-context"
import { cn } from "@/lib/utils"

import { youngCars } from "@/lib/data"

interface Avto3Props {
  onShowAll?: () => void
}

export function Avto3({ onShowAll }: Avto3Props) {
  const { toggleFavorite, isFavorite } = useFavorites()
  const { openContact } = useContact()

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
                <span
                  className="absolute bottom-2 left-2 px-2 py-1 bg-primary text-white text-xs rounded"
                >
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
              <div className="flex items-center justify-between ">
                <span className="font-bold text-[18px] mt-2">{formatPrice(car.price)} ₽</span>
                <div className="flex flex-col gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => openContact(car)}
                    className="h-8 w-8 rounded-full bg-green-500 hover:bg-green-600 text-white p-1"
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => openContact(car)}
                    className="h-8 w-8 rounded-full bg-blue-500 hover:bg-blue-600 text-white p-1"
                  >
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {car.location}
              </p>
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
"use client"

import { useState } from "react"
import { Phone, MessageSquare, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFavorites } from "@/lib/favorites-context"
import { useContact } from "@/lib/contact-context"
import { cn } from "@/lib/utils"
import { recommendationCars } from "@/lib/data"

export function Recommendation() {
  const { toggleFavorite, isFavorite } = useFavorites()
  const { openContact } = useContact()
  const [visibleCount, setVisibleCount] = useState(10)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price)
  }

  const visibleCars = recommendationCars.slice(0, visibleCount)

  return (
    <div className="py-6">
      <h2 className="text-xl font-bold mb-4">Рекомендации</h2>

      <div className="flex flex-col">
        {visibleCars.map((car) => (
          <div key={car.id} className="bg-background border-b border-border">
            {/* Image area with horizontal scroll */}
            <div className="relative">
              <div className="flex gap-1 overflow-x-auto scrollbar-hide">
                <div className="flex-shrink-0 w-[75%] aspect-[4/3] bg-secondary relative">
                  {car.images && car.images.length > 0 ? (
                    <img
                      src={car.images[0]}
                      alt={car.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <span className="text-sm">Фото</span>
                    </div>
                  )}
                  {car.badges && car.badges.length > 0 && (
                    <div className="absolute bottom-2 left-2 flex gap-2">
                      {car.badges.map((badge, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 rounded text-xs font-medium ${badge === "Надёжный партнёр"
                            ? "bg-green-500 text-white"
                            : badge === "Проверено"
                              ? "bg-blue-500 text-white"
                              : "bg-blue-500 text-white"
                            }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex-shrink-0 w-[30%] aspect-[4/3] bg-secondary relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <span className="text-sm">Фото</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Info section */}
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-xl font-bold">
                      {formatPrice(car.price)} ₽
                    </span>
                    {car.note && (
                      <span className="text-sm text-muted-foreground">
                        {car.note}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-medium mt-1">
                    {car.title}
                    {car.year > 0 && `, ${car.year}`}
                    {car.mileage > 0 &&
                      `, ${formatPrice(car.mileage)} км`}
                  </h3>

                  {car.engine && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {car.engine}
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground mt-2">
                    {car.location}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {car.timeAgo}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => openContact(car)}
                    className="h-10 w-10 rounded-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => openContact(car)}
                    className="h-10 w-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    <MessageSquare className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => toggleFavorite(car.id)}
                    className="h-10 w-10 group"
                  >
                    <Heart
                      className={cn(
                        "h-5 w-5 transition-colors",
                        isFavorite(car.id) ? "fill-red-500 text-red-500" : "text-muted-foreground group-hover:text-red-500"
                      )}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < recommendationCars.length && (
        <div className="px-4 py-4">
          <Button
            variant="outline"
            className="w-full rounded-xl"
            onClick={() =>
              setVisibleCount((prev) =>
                Math.min(prev + 10, recommendationCars.length)
              )
            }
          >
            Показать ещё{" "}
            {Math.min(10, recommendationCars.length - visibleCount)} из{" "}
            {recommendationCars.length - visibleCount}
          </Button>
        </div>
      )}
    </div>
  )
}

"use client"

import { Phone, MessageSquare, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Vehicle } from "@/lib/types"
import { cn } from "@/lib/utils"

interface VehicleCardProps {
  vehicle: Vehicle
  onFavorite?: (id: string) => void
  onCall?: (id: string) => void
  onMessage?: (id: string) => void
}

export function VehicleCard({ vehicle, onFavorite, onCall, onMessage }: VehicleCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price)
  }

  return (
    <div className="bg-background border-b border-border">
      <div className="relative">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          <div className="flex-shrink-0 w-full aspect-[4/3] bg-secondary relative">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <span className="text-sm">Фото</span>
            </div>
            {vehicle.badges && vehicle.badges.length > 0 && (
              <div className="absolute bottom-2 left-2 flex gap-2">
                {vehicle.badges.map((badge, index) => (
                  <span
                    key={index}
                    className={cn(
                      "px-2 py-1 rounded text-xs font-medium",
                      badge === "Надёжный партнёр" 
                        ? "bg-green-500 text-white" 
                        : "bg-blue-500 text-white"
                    )}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-xl font-bold">
                {formatPrice(vehicle.price)} ₽
              </span>
              {vehicle.priceType === "rent" && (
                <span className="text-muted-foreground">за день</span>
              )}
              {vehicle.pricePerMonth && (
                <span className="text-sm text-muted-foreground">
                  от {formatPrice(vehicle.pricePerMonth)} ₽ в месяц
                </span>
              )}
              {vehicle.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(vehicle.originalPrice)} ₽
                </span>
              )}
            </div>
            
            <h3 className="text-base font-medium mt-1">
              {vehicle.title}
              {vehicle.year > 0 && `, ${vehicle.year}`}
              {vehicle.mileage > 0 && `, ${formatPrice(vehicle.mileage)} км`}
            </h3>
            
            {vehicle.engine && (
              <p className="text-sm text-muted-foreground mt-1">
                {vehicle.engine}, {vehicle.transmission}, {vehicle.drive}, {vehicle.bodyType}
              </p>
            )}
            
            {vehicle.hasCredit && (
              <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                Можно в кредит
              </span>
            )}
            
            <p className="text-sm text-muted-foreground mt-2">{vehicle.location}</p>
            <p className="text-sm text-muted-foreground">{vehicle.timeAgo}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onCall?.(vehicle.id)}
              className="h-10 w-10 rounded-full bg-green-500 hover:bg-green-600 text-white"
            >
              <Phone className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onMessage?.(vehicle.id)}
              className="h-10 w-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onFavorite?.(vehicle.id)}
              className="h-10 w-10"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

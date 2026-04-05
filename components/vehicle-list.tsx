"use client"

import { vehicles } from "@/lib/data"
import { VehicleCard } from "./vehicle-card"

interface VehicleListProps {
  title?: string
}

export function VehicleList({ title }: VehicleListProps) {
  return (
    <div className="pb-4">
      {title && (
        <h2 className="text-xl font-bold px-4 py-4">{title}</h2>
      )}
      <div className="divide-y divide-border">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  )
}

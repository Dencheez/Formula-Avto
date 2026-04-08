import { allVehicles } from "@/lib/data"
import { VehicleCard } from "./vehicle-card"
import type { Vehicle } from "@/lib/types"

interface VehicleListProps {
  title?: string
  data?: Vehicle[]
}

export function VehicleList({ title, data = allVehicles }: VehicleListProps) {
  return (
    <div className="pb-4">
      {title && (
        <h2 className="text-xl font-bold px-4 py-4">{title}</h2>
      )}
      <div className="divide-y divide-border">
        {data.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  )
}

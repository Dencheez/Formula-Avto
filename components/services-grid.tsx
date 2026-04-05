"use client"

import { services } from "@/lib/data"
import { 
  Book, 
  Newspaper, 
  Warehouse, 
  ShieldCheck, 
  FileText, 
  BadgeCheck, 
  Gavel, 
  Calculator, 
  Shield 
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  book: Book,
  newspaper: Newspaper,
  warehouse: Warehouse,
  "shield-check": ShieldCheck,
  "file-text": FileText,
  "badge-check": BadgeCheck,
  gavel: Gavel,
  calculator: Calculator,
  shield: Shield,
}

export function ServicesGrid() {
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Сервисы</h2>
      <div className="grid grid-cols-3 gap-4">
        {services.map((service) => {
          const Icon = iconMap[service.icon] || Shield
          return (
            <button
              key={service.id}
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-secondary transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                <Icon className="h-7 w-7 text-muted-foreground" />
              </div>
              <span className="text-xs text-center text-muted-foreground leading-tight">
                {service.name}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

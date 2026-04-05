"use client"

import { Phone, MessageCircle, Building } from "lucide-react"

const quickActions = [
  { id: "company", label: "ПартКом - Астрахань-...", sublabel: "Компания", icon: Building },
  { id: "call", label: "Позвонить", icon: Phone, color: "bg-green-500 text-white" },
  { id: "message", label: "Написать", icon: MessageCircle, color: "bg-blue-500 text-white" },
]

export function QuickActions() {
  return (
    <div className="px-4 py-4">
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {quickActions.map((action) => {
          const Icon = action.icon
          return (
            <button
              key={action.id}
              className="flex-shrink-0 flex flex-col items-center gap-2 p-4 bg-secondary rounded-xl min-w-[100px]"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${action.color || "bg-background"}`}>
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-center">{action.label}</span>
              {action.sublabel && (
                <span className="text-xs text-muted-foreground">{action.sublabel}</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

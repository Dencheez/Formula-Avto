"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Search, Heart, ListFilterPlus, MessageCircle, User } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "search", label: "Поиск", icon: Search, href: "/" },
  { id: "favorites", label: "Избранное", icon: Heart, href: "/favorites" },
  { id: "add", label: "Объявления", icon: ListFilterPlus, href: "/listings" },
  { id: "messages", label: "Сообщения", icon: MessageCircle, href: "/messages" },
  { id: "profile", label: "Профиль", icon: User, href: "/profile" },
]

export function BottomNavigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border">
      <div className="flex items-center justify-around py-2 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = pathname === tab.href || (tab.href !== "/" && pathname.startsWith(tab.href))
          const isHome = tab.href === "/" && pathname === "/"
          const active = isActive || isHome

          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-1 min-w-[60px] transition-colors",
                active ? "text-foreground" : "text-muted-foreground"
              )}
            >
              <Icon className={cn("h-6 w-6", active && "fill-current")} />
              <span className="text-xs">{tab.label}</span>
            </Link>
          )
        })}
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  )
}

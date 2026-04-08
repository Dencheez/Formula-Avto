"use client"

import { Search } from "lucide-react"

export function PromoBanner() {
  return (
    <div className="mx-4 p-4 bg-blue-200 rounded-2xl flex items-center justify-between">
      <div>
        <h3 className="font-bold text-foreground">Новые и с пробегом</h3>
        <p className="text-sm text-muted-foreground">Найдите ту самую машину</p>
      </div>
      <div className="relative">
        <div className="w-24 h-16 rounded-lg flex items-center justify-center">
          <img src="/10815917.png" alt="search" className="w-100 h-35" />
          <div className="absolute -right-2 -top-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <Search className="h-4 w-4 text-primary-foreground" />
          </div>
        </div>
      </div>
    </div>
  )
}

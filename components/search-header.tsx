"use client"

import { SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SearchHeaderProps {
  onBack?: () => void
  onFilter?: () => void
}

export function SearchHeader({ onBack, onFilter }: SearchHeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex items-center gap-3 bg-background px-4 py-3 border-b border-border">
      <Button variant="ghost" size="icon" onClick={onBack} className="shrink-0">
        <Link href="/">  <h2>ФА</h2></Link>
      </Button>
      <div className="flex-1 flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
        <input type="text" placeholder="Поиск во всех рег..." className="w-full bg-transparent border-none outline-none" />
      </div>

      <Button variant="ghost" size="icon" className="shrink-0">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
          <path d="M11 8a3 3 0 0 0-3 3" />
        </svg>
      </Button>

      <Button variant="ghost" size="icon" onClick={onFilter} className="shrink-0">
        <SlidersHorizontal className="h-5 w-5" />
      </Button>
    </header>
  )
}

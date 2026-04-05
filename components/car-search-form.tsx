"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CarSearchForm() {
  return (
    <div className="mx-4 p-4 bg-secondary/30 rounded-2xl">
      <h3 className="text-lg font-semibold mb-4">Найти автомобиль</h3>
      
      <div className="space-y-3">
        <button className="w-full flex items-center justify-between p-3 bg-background rounded-xl border border-border">
          <span className="text-muted-foreground">Марка и модель</span>
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </button>
        
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-between p-3 bg-background rounded-xl border border-border">
            <span className="text-muted-foreground">Цена</span>
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </button>
          
          <button className="flex-1 flex items-center justify-between p-3 bg-background rounded-xl border border-border">
            <span className="text-muted-foreground">Год</span>
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
        
        <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-xl py-6">
          Показать 898 632 объявления
        </Button>
      </div>
    </div>
  )
}

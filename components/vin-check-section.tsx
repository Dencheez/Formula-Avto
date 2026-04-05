"use client"

import { Button } from "@/components/ui/button"

export function VinCheckSection() {
  return (
    <div className="mx-4 p-4 bg-secondary/50 rounded-2xl">
      <h3 className="text-lg font-bold mb-2">
        Проверка по VIN и госномеру
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Узнайте о ДТП, ремонтах, скрутке пробега и других недостатках машины — купите отчёт Автотеки
      </p>
      <Button variant="outline" className="rounded-xl">
        Проверить авто
      </Button>
    </div>
  )
}

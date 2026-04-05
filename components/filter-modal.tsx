"use client"

import { X, ChevronDown, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { subcategories } from "@/lib/data"
import { cn } from "@/lib/utils"

interface FilterModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FilterModal({ isOpen, onClose }: FilterModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-background">
      <div className="flex items-center justify-between px-4 py-4 border-b border-border">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
        <h2 className="text-lg font-semibold">Фильтры</h2>
        <Button variant="ghost" className="text-foreground">
          Сбросить
        </Button>
      </div>

      <div className="overflow-y-auto h-[calc(100vh-140px)] pb-24">
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span className="text-primary font-medium">Все категории</span>
            <span>{">"}</span>
            <span>Транспорт</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Транспорт</h3>

          <div className="flex flex-wrap gap-2 mb-6">
            {subcategories.map((sub) => (
              <button
                key={sub}
                className="px-4 py-2 rounded-full border border-border text-sm hover:bg-secondary transition-colors"
              >
                {sub}
              </button>
            ))}
            <button className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:bg-secondary transition-colors">
              Ещё 1
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-3">Где искать</h4>
              <button className="w-full flex items-center justify-between p-3 bg-secondary rounded-xl">
                <span>Все регионы</span>
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Цена</h4>
              <div className="flex gap-3">
                <Input 
                  placeholder="От" 
                  className="flex-1 bg-secondary border-0 rounded-xl"
                />
                <Input 
                  placeholder="до" 
                  className="flex-1 bg-secondary border-0 rounded-xl"
                />
              </div>
              <div className="flex items-center gap-2 mt-3">
                <Checkbox id="market-price" />
                <label htmlFor="market-price" className="text-sm">
                  Только рыночные цены
                </label>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Продавцы</h4>
              <div className="flex gap-2">
                {["Все", "Частные", "Компании"].map((type, index) => (
                  <button
                    key={type}
                    className={cn(
                      "flex-1 py-3 rounded-xl text-sm font-medium transition-colors",
                      index === 0
                        ? "bg-foreground text-background"
                        : "bg-secondary text-foreground"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border">
        <Button 
          className="w-full py-6 rounded-xl bg-foreground text-background hover:bg-foreground/90"
          onClick={onClose}
        >
          Показать больше 1 тыс. объявлений
        </Button>
      </div>
    </div>
  )
}

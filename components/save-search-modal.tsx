"use client"

import { X, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

interface SaveSearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SaveSearchModal({ isOpen, onClose }: SaveSearchModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full bg-background rounded-t-3xl p-6 pb-8 animate-in slide-in-from-bottom">
        <div className="w-12 h-1 bg-muted rounded-full mx-auto mb-6" />
        
        <h2 className="text-2xl font-bold mb-2">
          Добавьте поиск в избранное
        </h2>
        <p className="text-muted-foreground mb-6">
          Мы сохраним настройки фильтров и сообщим о новых объявлениях.
        </p>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <MessageSquare className="h-5 w-5 text-muted-foreground" />
            <span>Пуш-уведомления</span>
          </div>
          <Switch defaultChecked />
        </div>
        <p className="text-sm text-primary mb-6 ml-8">как можно скорее</p>

        <div className="mb-6">
          <label className="text-sm text-muted-foreground mb-2 block">
            Название поиска
          </label>
          <div className="relative">
            <Input 
              defaultValue="Транспорт" 
              className="pr-10 bg-background border-border"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <Button 
          className="w-full py-6 rounded-xl bg-foreground text-background hover:bg-foreground/90"
          onClick={onClose}
        >
          Добавить
        </Button>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, login } = useAuth()
  const [isLogin, setIsLogin] = useState(true)

  if (!isAuthModalOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // База данных будет подключена позже, сейчас просто мокаем успешный вход
    login()
    closeAuthModal()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div 
        className="bg-background w-full max-w-md rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-xl font-bold">
            {isLogin ? "Вход" : "Регистрация"}
          </h2>
          <Button variant="ghost" size="icon" onClick={closeAuthModal} className="rounded-full">
            <X className="w-5 h-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Телефон или почта</label>
            <input 
              type="text" 
              required
              className="w-full h-12 px-4 rounded-xl border border-input bg-transparent outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              placeholder="Введите данные"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Пароль</label>
            <input 
              type="password" 
              required
              className="w-full h-12 px-4 rounded-xl border border-input bg-transparent outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              placeholder="Введите пароль"
            />
          </div>

          <Button type="submit" className="w-full h-12 rounded-xl text-base mt-2">
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </Button>

          <div className="text-center mt-6">
            <button 
              type="button" 
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-primary hover:underline"
            >
              {isLogin ? "Нет аккаунта? Зарегистрироваться" : "Уже есть аккаунт? Войти"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

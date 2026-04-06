"use client"

import { BottomNavigation } from "@/components/bottom-navigation"
import { Bell, Settings, MessageSquare, Heart, Phone, UserCircle } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

export default function ProfilePage() {
  const { openAuthModal, isAuthenticated, logout } = useAuth()

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto flex flex-col pb-20">
      {/* Header */}
      <header className="px-4 py-4 flex items-center justify-end gap-5">
        <button className="text-foreground">
          <Bell className="w-6 h-6" fill="currentColor" />
        </button>
        <button className="text-foreground">
          <Settings className="w-6 h-6" fill="currentColor" strokeWidth={1.5} />
        </button>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-10 pb-6 text-center">
        
        {isAuthenticated ? (
          <>
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <UserCircle className="w-20 h-20 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Вы авторизованы</h2>
            <p className="text-[#808080] text-[15px] mb-8">
              Добро пожаловать в профиль!
            </p>
            <button 
              onClick={logout}
              className="w-full max-w-[320px] bg-red-50 text-red-500 py-3.5 rounded-xl font-medium text-[16px] hover:bg-red-100 transition-colors"
            >
              Выйти из аккаунта
            </button>
          </>
        ) : (
          <>
            {/* Abstract Illustration Mockup */}
            <div className="relative w-40 h-40 mb-8 mt-20">
                {/* Top Left: Message Bubble (Blue) */}
                <div className="absolute top-4 left-6 w-14 h-14 bg-[#0099FF] rounded-full flex items-center justify-center shadow-sm">
                    <MessageSquare className="w-7 h-7 text-white" fill="currentColor" />
                </div>

                {/* Top Right: Heart (Coral) */}
                <div className="absolute top-4 right-6 w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center shadow-sm">
                    <Heart className="w-6 h-6 text-white" strokeWidth={3} />
                </div>

                {/* Bottom Left: Bell (Purple) */}
                <div className="absolute bottom-10 left-6 w-10 h-10 bg-[#B56EEA] rounded-full flex items-center justify-center shadow-sm">
                    <Bell className="w-5 h-5 text-white" fill="currentColor" />
                </div>

                {/* Bottom Right: Phone (Green) */}
                <div className="absolute bottom-2 right-4 w-20 h-20 bg-[#4AD32F] rounded-full flex items-center justify-center shadow-md border-4 border-white/60">
                    <Phone className="w-10 h-10 text-white transform -rotate-12" fill="currentColor" />
                    <div className="absolute -top-1 right-2 w-8 h-2 bg-green-500 rounded-full rotate-45"></div>
                </div>
            </div>

            <p className="text-[#808080] text-[15px] mb-8 leading-snug max-w-[280px]">
              Войдите или зарегистрируйтесь, чтобы пользоваться всеми функциями Авито.
            </p>

            <button 
              onClick={openAuthModal}
              className="w-full max-w-[320px] bg-[#E5F5FF] text-[#00AAFF] py-3.5 rounded-xl font-medium text-[16px] hover:bg-blue-100 transition-colors"
            >
              Войти или зарегистрироваться
            </button>
          </>
        )}
      </div>

      <BottomNavigation />
    </div>
  )
}
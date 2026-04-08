"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { BottomNavigation } from "@/components/bottom-navigation"
import { VehicleList } from "@/components/vehicle-list"
import { Car, Phone, Star, Settings } from "lucide-react"
import Link from "next/link"

export default function ListingsPage() {
  const { openAuthModal, isAuthenticated } = useAuth()
  const [activeTab, setActiveTab] = useState<'all' | 'mine'>('all')

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto flex flex-col pb-20">
      {/* Header - Styles matching Messages page */}
      <header className="px-4 py-4 flex items-center justify-between border-b border-border/40">
        <h1 className="text-xl font-bold">Объявления</h1>
        <Link href="/profile/settings">
          <button className="text-foreground">
            <Settings className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </Link>
      </header>

      {/* Tab Switcher - Same styling as Messages page */}
      <div className="px-4 pt-2 mb-2">
        <div className="flex bg-[#F2F2F7] p-1 rounded-xl">
          <button 
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-2 text-[15px] font-medium rounded-lg transition-all ${
              activeTab === 'all' 
                ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-black' 
                : 'text-[#8E8E93]'
            }`}
          >
            Все объявления
          </button>
          <button 
            onClick={() => setActiveTab('mine')}
            className={`flex-1 py-2 text-[15px] font-medium rounded-lg transition-all ${
              activeTab === 'mine' 
                ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-black' 
                : 'text-[#8E8E93]'
            }`}
          >
            Мои
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {activeTab === 'all' ? (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <VehicleList />
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center px-4 pt-10 pb-6 animate-in fade-in duration-300">
            {/* Abstract Illustration Mockup */}
            <div className="relative w-64 h-64 mb-10">
                {/* Top Left: Car Card */}
                <div className="absolute top-0 left-0 w-40 h-28 bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl p-3 shadow-sm">
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center p-2 shadow-inner">
                        <Car className="w-16 h-16 text-red-800" strokeWidth={1} />
                    </div>
                </div>

                {/* Top Right: Green Card */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-b from-green-300 to-green-100 rounded-xl shadow-sm"></div>

                {/* Middle: Chat & Call */}
                <div className="absolute top-32 left-0 w-48 h-12 bg-gradient-to-r from-blue-100 to-cyan-50 rounded-full rounded-bl-sm flex items-center px-4 shadow-sm">
                    <div className="flex flex-col gap-1.5 w-full">
                        <div className="h-1.5 bg-blue-200 rounded-full w-2/3"></div>
                        <div className="h-1.5 bg-blue-200 rounded-full w-4/5"></div>
                    </div>
                    <div className="absolute -right-2 w-10 h-10 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full flex items-center justify-center shadow-md">
                        <Phone className="w-5 h-5 text-black" fill="currentColor" />
                    </div>
                </div>

                {/* Bottom Left: Ruble coin */}
                <div className="absolute bottom-4 left-2 w-16 h-16 bg-gradient-to-br from-red-300 to-orange-200 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-red-700 font-bold text-2xl">₽</span>
                </div>

                {/* Bottom Middle: Purple House/Item */}
                <div className="absolute bottom-0 left-24 w-20 h-20 bg-gradient-to-tr from-purple-500 to-purple-200 rounded-2xl shadow-sm overflow-hidden">
                     <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-purple-500/20" style={{ clipPath: 'polygon(50% 0%, 100% 30%, 100% 100%, 0 100%, 0 30%)' }}></div>
                </div>

                {/* Right Side: Slider & Rating */}
                <div className="absolute top-24 right-4 w-12 h-32 bg-gradient-to-b from-purple-100 to-pink-50 rounded-full border border-purple-100/50 shadow-sm flex flex-col items-center pt-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm">
                        ×5
                    </div>
                    <div className="w-2 h-16 bg-white/60 rounded-full mt-2"></div>
                </div>
                
                <div className="absolute bottom-2 right-0 w-20 h-8 bg-green-100 rounded-full flex items-center justify-center gap-1 shadow-sm">
                    <Star className="w-4 h-4 text-green-600" fill="currentColor" />
                    <span className="font-bold text-green-900 text-sm">0,0</span>
                </div>
            </div>

            {isAuthenticated ? (
              <>
                <h2 className="text-center text-[#1A1A1A] text-xl font-bold mb-4">Разместите ваше первое объявление</h2>
                <button className="w-full max-w-[320px] bg-[#1A1A1A] text-white py-3.5 rounded-xl font-medium text-[15px] hover:bg-black transition-colors">
                  Подать объявление
                </button>
              </>
            ) : (
              <>
                <p className="text-center text-[#1A1A1A] text-lg mb-8 max-w-[300px]">
                  Пока пусто, но это не навсегда: здесь появятся ваши объявления
                </p>
                <button 
                  onClick={openAuthModal}
                  className="w-full max-w-[320px] bg-[#1A1A1A] text-white py-3.5 rounded-xl font-medium text-[15px] hover:bg-black transition-colors"
                >
                  Войти или зарегистрироваться
                </button>
              </>
            )}
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  )
}
"use client"

import { useAuth } from "@/lib/auth-context"
import { BottomNavigation } from "@/components/bottom-navigation"
import { MessageCircle, Settings, ShoppingBag, Store } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function MessagesPage() {
  const { isAuthenticated, openAuthModal } = useAuth()
  const [activeTab, setActiveTab] = useState<'buying' | 'selling'>('buying')

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto flex flex-col pb-20">
      <header className="px-4 py-4 flex items-center justify-between border-b border-border/40">
        <h1 className="text-xl font-bold">Сообщения</h1>
        <Link href="/profile/settings">
          <button className="text-foreground">
            <Settings className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </Link>
      </header>

      <div className="flex-1 flex flex-col pt-2">
        {!isAuthenticated ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-12 h-12 text-blue-500" fill="currentColor" />
            </div>
            <h2 className="text-lg font-bold mb-2">Общение с продавцами и покупателями</h2>
            <p className="text-muted-foreground text-[15px] mb-8">
              Чтобы писать сообщения и читать ответы, войдите в профиль или зарегистрируйтесь.
            </p>
            <button
              onClick={openAuthModal}
              className="w-full max-w-[320px] bg-black text-white py-3.5 rounded-xl font-medium text-[15px] hover:bg-black/80 transition-colors"
            >
              Войти или зарегистрироваться
            </button>
          </div>
        ) : (
          <>
            {/* Tab Switcher */}
            <div className="px-4 mb-4">
              <div className="flex bg-[#F2F2F7] p-1 rounded-xl">
                <button 
                  onClick={() => setActiveTab('buying')}
                  className={`flex-1 py-2 text-[15px] font-medium rounded-lg transition-all ${
                    activeTab === 'buying' 
                      ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-black' 
                      : 'text-[#8E8E93]'
                  }`}
                >
                  Я покупаю
                </button>
                <button 
                  onClick={() => setActiveTab('selling')}
                  className={`flex-1 py-2 text-[15px] font-medium rounded-lg transition-all ${
                    activeTab === 'selling' 
                      ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-black' 
                      : 'text-[#8E8E93]'
                  }`}
                >
                  Я продаю
                </button>
              </div>
            </div>

            {/* Empty State / Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center animate-in fade-in duration-300">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                {activeTab === 'buying' ? (
                  <ShoppingBag className="w-10 h-10 text-gray-300" />
                ) : (
                  <Store className="w-10 h-10 text-gray-300" />
                )}
              </div>
              <h2 className="text-lg font-bold mb-2">
                {activeTab === 'buying' ? "У вас пока нет покупок" : "У вас пока нет продаж"}
              </h2>
              <p className="text-muted-foreground text-[15px]">
                {activeTab === 'buying' 
                  ? "Здесь будут переписки с продавцами интересующих вас авто."
                  : "Здесь будут сообщения от потенциальных покупателей."}
              </p>
            </div>
          </>
        )}
      </div>

      <BottomNavigation />
    </div>
  )
}
"use client"

import { useEffect, useState } from "react"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Bell, Settings, MessageSquare, Heart, Phone, UserCircle, Loader2 } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default function ProfilePage() {
  // Вытаскиваем user и logout из контекста
  const { openAuthModal, isAuthenticated, user, logout } = useAuth()

  const [profile, setProfile] = useState<{ full_name: string; city: string } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Как только юзер авторизовался, бежим в базу за его именем
  useEffect(() => {
    async function fetchProfile() {
      if (!user?.id) return
      setIsLoading(true)

      const { data, error } = await supabase
        .from('profiles')
        .select('full_name, city')
        .eq('id', user.id)
        .single()

      if (data) setProfile(data)
      setIsLoading(false)
    }

    if (isAuthenticated) {
      fetchProfile()
    }
  }, [user, isAuthenticated])

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto flex flex-col pb-20">
      {/* Header */}
      <header className="px-4 py-4 flex items-center justify-end gap-5">
        <Link href="/profile/push-messages">
          <button className="text-foreground">
            <Bell className="w-6 h-6" />
          </button>
        </Link>
        <Link href="/profile/settings">
          <button className="text-foreground">
            <Settings className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </Link>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center px-6 pt-10 pb-6 text-center">

        {isAuthenticated ? (
          <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Аватарка-заглушка */}
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 border-2 border-primary/20">
              <UserCircle className="w-16 h-16 text-primary" strokeWidth={1} />
            </div>

            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  {profile?.full_name || "Водитель"}
                </h2>
                <p className="text-[#808080] text-[15px] mb-8">
                  {profile?.city || "Город не указан"} • {user?.email}
                </p>
              </>
            )}
          </div>
        ) : (
          <>
            {/* Твоя крутая иллюстрация */}
            <div className="relative w-40 h-40 mb-8 mt-20 mx-auto">
              <div className="absolute top-4 left-6 w-14 h-14 bg-[#0099FF] rounded-full flex items-center justify-center shadow-sm">
                <MessageSquare className="w-7 h-7 text-white" fill="currentColor" />
              </div>
              <div className="absolute top-4 right-6 w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center shadow-sm">
                <Heart className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              <div className="absolute bottom-10 left-6 w-10 h-10 bg-[#B56EEA] rounded-full flex items-center justify-center shadow-sm">
                <Bell className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <div className="absolute bottom-2 right-4 w-20 h-20 bg-[#4AD32F] rounded-full flex items-center justify-center shadow-md border-4 border-white/60">
                <Phone className="w-10 h-10 text-white transform -rotate-12" fill="currentColor" />
              </div>
            </div>

            <p className="text-[#808080] text-[15px] mb-8 leading-snug max-w-[280px] mx-auto">
              Войдите или зарегистрируйтесь, чтобы пользоваться всеми функциями Форума Авто.
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
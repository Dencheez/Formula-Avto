"use client"

import { useAuth } from "@/lib/auth-context"
import { BottomNavigation } from "@/components/bottom-navigation"
import { MessageCircle, Settings } from "lucide-react"
import Link from "next/link"

export default function MessagesPage() {
  const { isAuthenticated, openAuthModal } = useAuth()

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

      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        {!isAuthenticated ? (
          <>
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
          </>
        ) : (
          <>
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-12 h-12 text-gray-300" />
            </div>
            <h2 className="text-lg font-bold mb-2">У вас пока нет сообщений</h2>
            <p className="text-muted-foreground text-[15px]">
              Здесь будут отображаться ваши переписки с другими пользователями.
            </p>
          </>
        )}
      </div>

      <BottomNavigation />
    </div>
  )
}
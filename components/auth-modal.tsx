"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { X, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"

export function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, login } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  // Состояния для полей
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [phone, setPhone] = useState("")

  if (!isAuthModalOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMsg("")

    try {
      if (isLogin) {
        // Вход
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
      } else {
        // Регистрация
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name || "Пользователь",
              city,
              phone,
            }
          }
        })
        if (error) throw error
      }

      login()
      closeAuthModal()
    } catch (error: any) {
      const msg = error.message || "";
      if (msg.includes("User already registered")) {
        setErrorMsg("Аккаунт с такой почтой уже зарегистрирован. Попробуйте войти");
      } else if (msg.includes("Invalid login credentials") || msg.includes("Invalid password") || msg.toLowerCase().includes("invalid")) {
        setErrorMsg("Неверный логин или пароль");
      } else if (msg.includes("Too many requests") || msg.includes("rate limit") || msg.includes("over the email rate limit")) {
        setErrorMsg("Слишком много попыток. Пожалуйста, подождите пару минут");
      } else {
        setErrorMsg("Произошла ошибка при авторизации. Попробуйте снова");
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Очистка ошибки при смене режима
  const toggleMode = () => {
    setIsLogin(!isLogin)
    setErrorMsg("")
    // Сброс дополнительных полей при переключении
    if (!isLogin) {
      setName("")
      setCity("")
      setPhone("")
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-end sm:items-center sm:justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200">
      {/* Overlay click to close */}
      <div className="absolute inset-0" onClick={closeAuthModal} />

      <div className="bg-[#FFFFFF] relative w-full sm:max-w-md rounded-t-[24px] sm:rounded-[24px] shadow-xl overflow-hidden animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300">

        {/* Handle for mobile */}
        <div className="flex w-full items-center justify-center pt-3 pb-1 sm:hidden">
          <div className="h-1.5 w-12 rounded-full bg-gray-300" />
        </div>

        <div className="flex items-center justify-between px-6 pt-2 pb-4 sm:pt-6 sm:pb-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">
            {isLogin ? "Вход" : "Регистрация"}
          </h2>
          <Button variant="ghost" size="icon" onClick={closeAuthModal} className="rounded-full text-gray-500 hover:text-gray-900">
            <X className="w-5 h-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto">
          {errorMsg && (
            <div className="flex items-start gap-2 p-3 bg-red-50 text-red-600 rounded-xl text-sm shrink-0">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>{errorMsg}</p>
            </div>
          )}

          {!isLogin && (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Город</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required={!isLogin}
                  className="w-full h-14 px-4 rounded-xl border border-gray-200 bg-transparent outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900"
                  placeholder="Ваш город"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Имя</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isLogin}
                  className="w-full h-14 px-4 rounded-xl border border-gray-200 bg-transparent outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900"
                  placeholder="Как к вам обращаться"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Номер телефона</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required={!isLogin}
                  className="w-full h-14 px-4 rounded-xl border border-gray-200 bg-transparent outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900"
                  placeholder="+7 (___) ___-__-__"
                  maxLength={12}
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Электронная почта</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-14 px-4 rounded-xl border border-gray-200 bg-transparent outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900"
              placeholder="Электронная почта"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-14 px-4 rounded-xl border border-gray-200 bg-transparent outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900"
              placeholder="Минимум 6 символов"
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full h-[56px] rounded-xl text-base font-bold mt-2">
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : (isLogin ? "Войти" : "Зарегистрироваться")}
          </Button>

          <div className="text-center mt-6">
            <button
              type="button"
              onClick={toggleMode}
              className="text-sm text-primary hover:underline font-medium"
            >
              {isLogin ? "Нет аккаунта? Зарегистрироваться" : "Уже есть аккаунт? Войти"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
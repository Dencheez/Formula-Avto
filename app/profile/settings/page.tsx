"use client"

import { useState } from "react"
import { 
  ChevronLeft, 
  ChevronRight, 
  Globe, 
  CircleDollarSign, 
  Bell, 
  ShieldCheck, 
  HelpCircle, 
  Info,
  User,
  Mail,
  Phone,
  Moon,
  Trash2,
  LogOut,
  MapPin,
  X,
  Check
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"

type EditorType = "text" | "list"

interface EditorConfig {
  id: string
  title: string
  type: EditorType
  options?: string[]
}

export default function SettingsPage() {
  const router = useRouter()
  const { logout, isAuthenticated } = useAuth()

  // Dynamic Profile State
  const [profile, setProfile] = useState({
    name: "Иван Иванов",
    email: "ivan@example.com",
    phone: "+7 999 123 45 67",
    city: "Москва"
  })

  // Dynamic Preferences State
  const [prefs, setPrefs] = useState({
    language: "Русский",
    currency: "₽ (RUB)",
    pushNotifications: true,
    emailNotifications: false,
    darkMode: false,
  })

  // Editor State
  const [activeEditor, setActiveEditor] = useState<EditorConfig | null>(null)
  const [tempValue, setTempValue] = useState("")

  const listOptions: Record<string, string[]> = {
    city: ["Москва", "Санкт-Петербург", "Краснодар", "Новосибирск", "Екатеринбург", "Казань", "Нижний Новгород"],
    language: ["Русский", "English", "Deutsch", "Français"],
    currency: ["₽ (RUB)", "$ (USD)", "€ (EUR)", "¥ (CNY)"]
  }

  const openEditor = (id: string, title: string, type: EditorType) => {
    setActiveEditor({ id, title, type, options: listOptions[id] })
    setTempValue(
      (profile[id as keyof typeof profile] || prefs[id as keyof typeof prefs] || "").toString()
    )
  }

  const saveChange = (value?: string) => {
    if (!activeEditor) return
    const finalValue = value !== undefined ? value : tempValue
    
    if (activeEditor.id in profile) {
      setProfile(prev => ({ ...prev, [activeEditor.id]: finalValue }))
    } else {
      setPrefs(prev => ({ ...prev, [activeEditor.id]: finalValue }))
    }
    setActiveEditor(null)
  }

  const handleToggle = (id: keyof typeof prefs) => {
    setPrefs(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] max-w-lg mx-auto flex flex-col relative">
      {/* Header */}
      <header className="bg-white px-4 py-4 flex items-center border-b border-gray-100 sticky top-0 z-20">
        <button 
          onClick={() => router.back()}
          className="p-2 active:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <h1 className="flex-1 text-center text-[18px] font-bold mr-10">Настройки</h1>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-10">
        
        {/* Profile Section */}
        <div className="mt-4">
          <h2 className="px-6 text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-2">Аккаунт</h2>
          <div className="bg-white border-y border-gray-100">
            {/* Name */}
            <div className="px-6 py-4 flex items-center border-b border-gray-50 bg-white">
              <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mr-4">
                <User className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[14px] text-gray-400">Имя</p>
                <p className="text-[16px] font-medium">{profile.name}</p>
              </div>
              <button 
                onClick={() => openEditor("name", "Изменить имя", "text")}
                className="text-[#00AAFF] text-[14px] font-bold px-4 py-1 active:bg-blue-50 rounded-lg"
              >
                Изм.
              </button>
            </div>
            {/* City - New Field */}
            <div className="px-6 py-4 flex items-center border-b border-gray-50 bg-white">
              <div className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mr-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[14px] text-gray-400">Город</p>
                <p className="text-[16px] font-medium">{profile.city}</p>
              </div>
              <button 
                onClick={() => openEditor("city", "Выбрать город", "list")}
                className="text-[#00AAFF] text-[14px] font-bold px-4 py-1 active:bg-blue-50 rounded-lg"
              >
                Изм.
              </button>
            </div>
            {/* Email */}
            <div className="px-6 py-4 flex items-center border-b border-gray-50 bg-white">
              <div className="w-10 h-10 bg-green-50 text-green-500 rounded-xl flex items-center justify-center mr-4">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[14px] text-gray-400">Email</p>
                <p className="text-[16px] font-medium">{profile.email}</p>
              </div>
              <button 
                onClick={() => openEditor("email", "Изменить Email", "text")}
                className="text-[#00AAFF] text-[14px] font-bold px-4 py-1 active:bg-blue-50 rounded-lg"
              >
                Изм.
              </button>
            </div>
            {/* Phone */}
            <div className="px-6 py-4 flex items-center bg-white">
              <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mr-4">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[14px] text-gray-400">Телефон</p>
                <p className="text-[16px] font-medium">{profile.phone}</p>
              </div>
              <button 
                onClick={() => openEditor("phone", "Изменить номер", "text")}
                className="text-[#00AAFF] text-[14px] font-bold px-4 py-1 active:bg-blue-50 rounded-lg"
              >
                Изм.
              </button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="mt-8">
          <h2 className="px-6 text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-2">Уведомления</h2>
          <div className="bg-white border-y border-gray-100">
            <div className="px-6 py-4 flex items-center border-b border-gray-50">
              <div className="w-10 h-10 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center mr-4">
                <Bell className="w-5 h-5" />
              </div>
              <span className="flex-1 text-[16px] font-medium">Push-уведомления</span>
              <button 
                onClick={() => handleToggle('pushNotifications')}
                className={`w-12 h-6 rounded-full relative ${prefs.pushNotifications ? 'bg-[#00AAFF]' : 'bg-gray-200'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full ${prefs.pushNotifications ? 'right-1' : 'left-1'}`} />
              </button>
            </div>
            <div className="px-6 py-4 flex items-center">
              <div className="w-10 h-10 bg-pink-50 text-pink-500 rounded-xl flex items-center justify-center mr-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="flex-1 text-[16px] font-medium">Email-рассылки</span>
              <button 
                onClick={() => handleToggle('emailNotifications')}
                className={`w-12 h-6 rounded-full relative ${prefs.emailNotifications ? 'bg-[#00AAFF]' : 'bg-gray-200'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full ${prefs.emailNotifications ? 'right-1' : 'left-1'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="mt-8">
          <h2 className="px-6 text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-2">Предпочтения</h2>
          <div className="bg-white border-y border-gray-100">
            <button 
              onClick={() => openEditor("language", "Выберите язык", "list")}
              className="w-full px-6 py-4 flex items-center border-b border-gray-50 active:bg-gray-50"
            >
              <div className="w-10 h-10 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center mr-4">
                <Globe className="w-5 h-5" />
              </div>
              <span className="flex-1 text-left text-[16px] font-medium">Язык</span>
              <span className="text-gray-500 font-bold mr-2">{prefs.language}</span>
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </button>
            <button 
              onClick={() => openEditor("currency", "Выберите валюту", "list")}
              className="w-full px-6 py-4 flex items-center border-b border-gray-50 active:bg-gray-50"
            >
              <div className="w-10 h-10 bg-green-50 text-green-500 rounded-xl flex items-center justify-center mr-4">
                <CircleDollarSign className="w-5 h-5" />
              </div>
              <span className="flex-1 text-left text-[16px] font-medium">Валюта</span>
              <span className="text-gray-500 font-bold mr-2">{prefs.currency}</span>
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </button>
            <div className="px-6 py-4 flex items-center">
              <div className="w-10 h-10 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center mr-4">
                <Moon className="w-5 h-5" />
              </div>
              <span className="flex-1 text-[16px] font-medium">Темная тема</span>
              <button 
                onClick={() => handleToggle('darkMode')}
                className={`w-12 h-6 rounded-full relative ${prefs.darkMode ? 'bg-[#00AAFF]' : 'bg-gray-200'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full ${prefs.darkMode ? 'right-1' : 'left-1'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Data & Security */}
        <div className="mt-8">
          <h2 className="px-6 text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-2">Данные</h2>
          <div className="bg-white border-y border-gray-100">
            <button className="w-full px-6 py-4 flex items-center border-b border-gray-50 active:bg-gray-50">
              <div className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mr-4">
                <Trash2 className="w-5 h-5" />
              </div>
              <span className="flex-1 text-left text-[16px] font-medium">Очистить кэш</span>
              <span className="text-gray-400">42 MB</span>
            </button>
          </div>
        </div>

        {/* Auth Actions (Mocked logout) */}
        {isAuthenticated && (
          <div className="mt-8">
            <div className="bg-white border-y border-gray-100">
              <button 
                onClick={() => { logout(); router.push('/profile'); }}
                className="w-full px-6 py-4 flex items-center active:bg-red-50 text-red-500"
              >
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4">
                  <LogOut className="w-5 h-5" />
                </div>
                <span className="flex-1 text-left text-[16px] font-bold">Выйти из аккаунта</span>
              </button>
            </div>
          </div>
        )}

        <div className="mt-10 mb-20 px-6 text-center">
          <p className="text-[13px] text-gray-400">
            Formula Avto © 2026. Версия 1.0.0
          </p>
        </div>
      </div>

      {/* Dynamic Editor Overlay (No Animations) */}
      {activeEditor && (
        <div className="fixed inset-0 z-50 bg-black/40 flex flex-col justify-end">
          {/* Backdrop Click */}
          <div className="flex-1" onClick={() => setActiveEditor(null)} />
          
          <div className="bg-white rounded-t-3xl max-w-lg mx-auto w-full pb-10 flex flex-col max-h-[80vh]">
            {/* Modal Header */}
            <div className="px-6 py-4 flex items-center border-b border-gray-100">
              <h3 className="flex-1 text-[18px] font-bold">{activeEditor.title}</h3>
              <button onClick={() => setActiveEditor(null)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto">
              {activeEditor.type === "text" ? (
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    autoFocus
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-[16px] focus:outline-none focus:border-[#00AAFF]"
                  />
                  <button 
                    onClick={() => saveChange()}
                    className="w-full bg-[#00AAFF] text-white py-4 rounded-xl font-bold text-[16px] active:scale-[0.98]"
                  >
                    Сохранить изменения
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {activeEditor.options?.map((option) => (
                    <button
                      key={option}
                      onClick={() => saveChange(option)}
                      className="w-full flex items-center px-4 py-4 rounded-xl hover:bg-gray-50 active:bg-blue-50"
                    >
                      <span className={`flex-1 text-left text-[16px] ${tempValue === option ? 'text-[#00AAFF] font-bold' : 'text-gray-800'}`}>
                        {option}
                      </span>
                      {tempValue === option && <Check className="w-5 h-5 text-[#00AAFF]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

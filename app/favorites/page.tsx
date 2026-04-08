"use client"

import { useState } from "react"
import { MoreVertical, ShoppingCart, User as UserIcon, Heart, Settings2, ArrowLeft, LayoutList } from "lucide-react"
import { BottomNavigation } from "@/components/bottom-navigation"
import { FooterLinks } from "@/components/footer-links"
import { Recommendation } from "@/components/Recommendation"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useFavorites } from "@/lib/favorites-context"
import { allVehicles } from "@/lib/data"
import { VehicleCard } from "@/components/vehicle-card"

type Tab = "listings" | "searches" | "comparison" | "profiles"

export default function FavoritesPage() {
  const [activeTab, setActiveTab] = useState<Tab>("listings")
  const { favorites } = useFavorites()
  
  const favoriteVehicles = allVehicles.filter(v => favorites.has(v.id))

  const tabs = [
    { id: "listings", label: "Объявления" },
    { id: "searches", label: "Поиски" },
    { id: "comparison", label: "Сравнение" },
    { id: "profiles", label: "Профили" },
  ] as const

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto flex flex-col pt-3 pb-20">
      {/* Header */}
      <header className="px-4 flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Избранное</h1>
        <div className="flex items-center gap-4">
          <button className="text-foreground">
            <MoreVertical className="w-6 h-6" />
          </button>
          <button className="text-foreground">
            <ShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="px-4 border-b border-border overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={cn(
                "pb-3 text-base font-medium transition-colors relative whitespace-nowrap",
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {activeTab === "listings" && <ListingsContent vehicles={favoriteVehicles} />}
        {activeTab === "searches" && <SearchesContent />}
        {activeTab === "comparison" && <ComparisonContent />}
        {activeTab === "profiles" && <ProfilesContent />}
      </div>

      <BottomNavigation />
    </div>
  )
}

function ListingsContent({ vehicles }: { vehicles: typeof allVehicles }) {
  if (vehicles.length === 0) {
    return (
      <div className="flex flex-col flex-1">
        <div className="px-4 py-3">
          <p className="text-[#888888] text-[15px] leading-snug max-w-[340px]">
            Войдите в профиль, чтобы посмотреть сохранённые объявления
          </p>
        </div>

        {/* Avito Banner Mock */}
        <div className="mx-4 my-2 relative overflow-hidden rounded-2xl bg-[#0F0F3D] text-white p-5 aspect-[2.4/1]">
          <div className="relative z-10 flex flex-col justify-center h-full max-w-[60%]">
            <div className="flex items-center gap-2 mb-2 font-bold text-lg">
              Форум Авто Бизнес 360
            </div>
            <div className="mt-1">
              <span className="inline-block border border-blue-500 rounded-full px-3 py-1 text-sm font-semibold mb-1">
                Профессиональное
              </span>
              <br />
              <span className="inline-block border border-blue-500 rounded-full px-3 py-1 text-sm font-semibold">
                оборудование
              </span>
            </div>
            <p className="text-xs mt-2 text-gray-300">По разумным ценам</p>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-red-500 rounded-l-full opacity-90 transform translate-x-8"></div>
          <div className="absolute right-0 top-[-20%] bottom-[-20%] w-[35%] bg-[#1A1A4F] rounded-l-full opacity-90 transform translate-x-12"></div>
        </div>

        <div className="mt-2">
          <Recommendation />
        </div>

        <FooterLinks />
      </div>
    )
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
      <FooterLinks />
    </div>
  )
}

function SearchesContent() {
  return (
    <div className="flex flex-col flex-1 items-center px-4 py-8 text-center pt-16">
      <h2 className="text-[#B3B3B3] text-xl font-medium mb-12">Нет сохранённых поисков</h2>

      {/* Phone UI Mockup */}
      <div className="w-64 aspect-[4/5] max-w-full rounded-t-3xl border border-gray-200 border-b-0 relative overflow-hidden bg-white shadow-sm flex flex-col">
        {/* Device elements */}
        <div className="h-6 w-full flex justify-center pt-2">
          <div className="w-2 h-2 rounded-full border border-gray-200"></div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-col pt-3 px-3">
          {/* Search input mock */}
          <div className="bg-white rounded p-3 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 text-gray-300" />
              <span className="text-sm">Chevrolet</span>
            </div>
            <div className="flex items-center gap-3 text-[#0099FF]">
              <Heart className="w-5 h-5 fill-current" />
              <Settings2 className="w-5 h-5 text-gray-300" />
            </div>
          </div>

          {/* Decorative arrow and text */}
          <div className="flex-1 relative mt-[10%]">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute top-0 right-14" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 35 C15 35 25 25 25 5" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div className="mt-10 px-2 text-left">
              <p className="text-sm text-gray-700 font-medium">Сохраните параметры<br />поиска и будьте в курсе<br />новых объявлений.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-auto pt-10">
        <FooterLinks />
      </div>
    </div>
  )
}

function ComparisonContent() {
  return (
    <div className="flex flex-col flex-1 items-center px-4 py-8 text-center pt-10">
      {/* Phone UI Mockup */}
      <div className="w-64 aspect-[1/1] max-w-full rounded-t-3xl border border-gray-200 border-b-0 relative overflow-hidden bg-white shadow-sm flex flex-col mb-6">
        {/* Device elements */}
        <div className="h-6 w-full flex justify-center pt-2">
          <div className="w-2 h-2 rounded-full border border-gray-200"></div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-col pt-3 px-3">
          {/* Topbar mock */}
          <div className="bg-white rounded-t p-3 flex items-center justify-between shadow-sm pb-8 relative">
            <ArrowLeft className="w-5 h-5 text-gray-300" />
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-5 h-5 text-gray-300 flex items-center justify-center">↑</div>
              <div className="bg-[#0099FF] text-white p-1 rounded">
                <LayoutList className="w-4 h-4" />
              </div>
              <Heart className="w-5 h-5 text-gray-300" />
            </div>

            {/* Mock card area */}
            <div className="absolute top-10 left-3 right-3 bottom-0 bg-gray-100 rounded-t border border-gray-100"></div>
          </div>
        </div>
        {/* Fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent" />
      </div>

      <h2 className="text-lg text-foreground mb-6 max-w-[280px]">
        Добавьте сюда интересные предложения, чтобы видеть их бок о бок.
      </h2>

      <button className="bg-[#0099FF] text-white py-3 px-6 rounded-lg font-medium">
        Начать поиск
      </button>

      <div className="w-full mt-auto pt-10">
        <FooterLinks />
      </div>
    </div>
  )
}

function ProfilesContent() {
  return (
    <div className="flex flex-col flex-1 items-center px-4 py-8 text-center pt-16">
      <h2 className="text-[#B3B3B3] text-xl font-medium mb-12 max-w-[320px]">
        Подписывайтесь на продавцов, чтобы не пропускать их объявления.
      </h2>

      {/* Phone UI Mockup */}
      <div className="w-64 aspect-[4/5] max-w-full rounded-t-3xl border border-gray-200 border-b-0 relative overflow-hidden bg-white shadow-sm flex flex-col mb-12">
        {/* Device elements */}
        <div className="h-6 w-full flex justify-center pt-2">
          <div className="w-2 h-2 rounded-full border border-gray-200"></div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-col pt-3 px-3">
          {/* Topbar mock */}
          <div className="bg-white rounded p-4 flex flex-col shadow-sm gap-4 h-full">
            <ArrowLeft className="w-5 h-5 text-gray-300 text-left" />

            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 bg-gray-200 rounded-full flex justify-center items-center font-bold text-gray-400 text-2xl">
                П
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col text-left">
                  <span className="font-bold">5</span>
                  <span className="text-[10px] text-gray-400">подписок</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold">12</span>
                  <span className="text-[10px] text-gray-400">подписчиков</span>
                </div>
              </div>
            </div>

            <button className="bg-[#0099FF] text-white py-1.5 rounded-lg text-sm font-medium w-full">
              Подписаться
            </button>

            <div className="text-left font-bold text-sm mt-1">Профиль продавца</div>

            <div className="flex gap-1 mt-1">
              {'⭐⭐⭐⭐⭐'.split('').map((s, i) => <span key={i} className="text-gray-200">{s}</span>)}
            </div>
          </div>
        </div>
        {/* Fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/90 via-white/50 to-transparent" />
      </div>

      <div className="w-full mt-auto">
        <FooterLinks />
      </div>
    </div>
  )
}
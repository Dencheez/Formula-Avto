"use client"

import { useState } from "react"
import { SearchHeader } from "@/components/search-header"
import { BottomNavigation } from "@/components/bottom-navigation"
import { CategoryGrid } from "@/components/category-grid"
import { CarSearchForm } from "@/components/car-search-form"
import { ServicesGrid } from "@/components/services-grid"
import { JournalSection } from "@/components/journal-section"
import { VehicleList } from "@/components/vehicle-list"
import { FilterModal } from "@/components/filter-modal"
import { SaveSearchModal } from "@/components/save-search-modal"
import { PromoBanner } from "@/components/promo-banner"
import { SubcategoryChips } from "@/components/subcategory-chips"
import { VinCheckSection } from "@/components/vin-check-section"
import { DiscountCars } from "@/components/discount-cars"
import { QuickActions } from "@/components/quick-actions"

type View = "home" | "listings" | "recommendations"

export default function Home() {
  const [activeTab, setActiveTab] = useState("search")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSaveSearchOpen, setIsSaveSearchOpen] = useState(false)
  const [currentView, setCurrentView] = useState<View>("home")

  const handleCategorySelect = (categoryId: string) => {
    console.log("[v0] Category selected:", categoryId)
    setCurrentView("listings")
  }

  const handleBack = () => {
    if (currentView !== "home") {
      setCurrentView("home")
    }
  }

  const renderHomeView = () => (
    <>
      <CategoryGrid onCategorySelect={handleCategorySelect} />
      <CarSearchForm />
      <div className="h-4" />
      <DiscountCars />
      <PromoBanner />
      <div className="h-4" />
      <SubcategoryChips title="Коммерческий транспорт" />
      <VinCheckSection />
      <div className="h-4" />
      <JournalSection />
      <ServicesGrid />
    </>
  )

  const renderListingsView = () => (
    <>
      <VehicleList title="Объявления" />
      <div className="px-4 py-4">
        <button 
          onClick={() => setIsSaveSearchOpen(true)}
          className="w-full py-3 text-center text-primary font-medium"
        >
          Сохранить поиск
        </button>
      </div>
    </>
  )

  const renderRecommendationsView = () => (
    <>
      <h2 className="text-xl font-bold px-4 py-4">Рекомендации</h2>
      <VehicleList />
      <QuickActions />
    </>
  )

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      <SearchHeader 
        onBack={handleBack}
        onFilter={() => setIsFilterOpen(true)} 
      />
      
      <main className="pb-20">
        {currentView === "home" && renderHomeView()}
        {currentView === "listings" && renderListingsView()}
        {currentView === "recommendations" && renderRecommendationsView()}
      </main>

      <BottomNavigation 
        activeTab={activeTab} 
        onTabChange={(tab) => {
          setActiveTab(tab)
          if (tab === "search") {
            setCurrentView("home")
          }
        }} 
      />

      <FilterModal 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
      />

      <SaveSearchModal 
        isOpen={isSaveSearchOpen} 
        onClose={() => setIsSaveSearchOpen(false)} 
      />
    </div>
  )
}

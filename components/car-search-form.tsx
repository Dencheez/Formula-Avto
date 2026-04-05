"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const carBrands = [
  {
    name: "Audi",
    models: ["A3", "A4", "A5", "A6", "A7", "A8", "Q3", "Q5", "Q7", "Q8", "e-tron"],
  },
  {
    name: "BMW",
    models: ["1 серия", "3 серия", "5 серия", "7 серия", "X1", "X3", "X5", "X6", "X7"],
  },
  {
    name: "Changan",
    models: ["CS35 Plus", "CS55 Plus", "CS75 Plus", "UNI-K", "UNI-T", "UNI-V"],
  },
  {
    name: "Chery",
    models: ["Tiggo 4", "Tiggo 7 Pro", "Tiggo 8 Pro", "Arrizo 8"],
  },
  {
    name: "Exeed",
    models: ["TXL", "VX", "LX", "RX"],
  },
  {
    name: "Geely",
    models: ["Atlas Pro", "Coolray", "Monjaro", "Emgrand", "Tugella"],
  },
  {
    name: "Haval",
    models: ["Jolion", "F7", "F7x", "H9", "Dargo"],
  },
  {
    name: "Honda",
    models: ["Accord", "Civic", "CR-V", "HR-V", "Pilot"],
  },
  {
    name: "Hyundai",
    models: ["Solaris", "Creta", "Tucson", "Santa Fe", "Sonata", "Elantra"],
  },
  {
    name: "Kia",
    models: ["Rio", "Ceed", "Cerato", "K5", "Sportage", "Sorento", "Seltos"],
  },
  {
    name: "Lada",
    models: ["Vesta", "Granta", "Niva Travel", "Niva Legend", "Largus"],
  },
  {
    name: "Mazda",
    models: ["3", "6", "CX-5", "CX-9", "CX-30"],
  },
  {
    name: "Mercedes-Benz",
    models: ["A-Класс", "C-Класс", "E-Класс", "S-Класс", "GLA", "GLC", "GLE", "GLS"],
  },
  {
    name: "Mitsubishi",
    models: ["Lancer", "Outlander", "Pajero", "ASX", "Eclipse Cross"],
  },
  {
    name: "Nissan",
    models: ["Almera", "Qashqai", "X-Trail", "Murano", "Pathfinder", "Terrano"],
  },
  {
    name: "Omoda",
    models: ["C5", "S5"],
  },
  {
    name: "Renault",
    models: ["Logan", "Sandero", "Duster", "Kaptur", "Arkana"],
  },
  {
    name: "Skoda",
    models: ["Rapid", "Octavia", "Superb", "Kodiaq", "Karoq"],
  },
  {
    name: "Toyota",
    models: ["Camry", "Corolla", "RAV4", "Land Cruiser", "Prado", "Fortuner"],
  },
  {
    name: "Volkswagen",
    models: ["Polo", "Golf", "Tiguan", "Touareg", "Passat", "Taos"],
  },
]

const priceRanges = [
  "до 300 000 ₽",
  "до 500 000 ₽",
  "до 800 000 ₽",
  "до 1 000 000 ₽",
  "до 1 500 000 ₽",
  "до 2 000 000 ₽",
  "до 3 000 000 ₽",
  "до 5 000 000 ₽",
  "Любая",
]

const years = Array.from({ length: 30 }, (_, i) => 2025 - i)

type ModalType = "brand" | "price" | "year" | null

export function CarSearchForm() {
  const [activeModal, setActiveModal] = useState<ModalType>(null)
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [selectedModel, setSelectedModel] = useState<string | null>(null)
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null)
  const [selectedYearFrom, setSelectedYearFrom] = useState<number | null>(null)
  const [selectedYearTo, setSelectedYearTo] = useState<number | null>(null)
  const [brandSearch, setBrandSearch] = useState("")
  const [yearStep, setYearStep] = useState<"from" | "to">("from")
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [activeModal])

  const filteredBrands = carBrands.filter((b) =>
    b.name.toLowerCase().includes(brandSearch.toLowerCase())
  )

  const selectedBrandData = carBrands.find((b) => b.name === selectedBrand)

  const closeModal = () => {
    setActiveModal(null)
    setBrandSearch("")
    setYearStep("from")
  }

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand)
    setSelectedModel(null)
  }

  const handleModelSelect = (model: string) => {
    setSelectedModel(model)
    closeModal()
  }

  const handlePriceSelect = (price: string) => {
    setSelectedPrice(price === "Любая" ? null : price)
    closeModal()
  }

  const handleYearSelect = (year: number) => {
    if (yearStep === "from") {
      setSelectedYearFrom(year)
      setYearStep("to")
    } else {
      setSelectedYearTo(year)
      closeModal()
    }
  }

  const getCount = () => {
    let base = 898632
    if (selectedBrand) base = Math.floor(base / 12)
    if (selectedModel) base = Math.floor(base / 8)
    if (selectedPrice) base = Math.floor(base / 3)
    if (selectedYearFrom || selectedYearTo) base = Math.floor(base / 4)
    return new Intl.NumberFormat("ru-RU").format(base)
  }

  const brandModelLabel = () => {
    if (selectedBrand && selectedModel) return `${selectedBrand} ${selectedModel}`
    if (selectedBrand) return selectedBrand
    return null
  }

  const yearLabel = () => {
    if (selectedYearFrom && selectedYearTo) return `${selectedYearFrom}–${selectedYearTo}`
    if (selectedYearFrom) return `от ${selectedYearFrom}`
    if (selectedYearTo) return `до ${selectedYearTo}`
    return null
  }

  return (
    <>
      <div className="mx-4 p-4 bg-secondary/30 rounded-2xl">
        <h3 className="text-lg font-semibold mb-4">Найти автомобиль</h3>

        <div className="space-y-3">
          {/* Brand & Model */}
          <button
            onClick={() => setActiveModal("brand")}
            className="w-full flex items-center justify-between p-3 bg-background rounded-xl border border-border"
          >
            <span className={brandModelLabel() ? "text-foreground font-medium" : "text-muted-foreground"}>
              {brandModelLabel() || "Марка и модель"}
            </span>
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </button>

          {/* Price & Year */}
          <div className="flex gap-3">
            <button
              onClick={() => setActiveModal("price")}
              className="flex-1 flex items-center justify-between p-3 bg-background rounded-xl border border-border"
            >
              <span className={selectedPrice ? "text-foreground font-medium text-sm" : "text-muted-foreground"}>
                {selectedPrice || "Цена"}
              </span>
              <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            </button>

            <button
              onClick={() => setActiveModal("year")}
              className="flex-1 flex items-center justify-between p-3 bg-background rounded-xl border border-border"
            >
              <span className={yearLabel() ? "text-foreground font-medium text-sm" : "text-muted-foreground"}>
                {yearLabel() || "Год"}
              </span>
              <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            </button>
          </div>

          <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-xl py-6">
            Показать {getCount()} объявлений
          </Button>
        </div>
      </div>

      {/* Full-screen Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col">
          {/* Modal Header */}
          <div className="flex items-center gap-3 p-4 border-b border-border">
            <button onClick={closeModal} className="p-1">
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-lg font-semibold flex-1">
              {activeModal === "brand" && (selectedBrand && !selectedModel ? `Модель — ${selectedBrand}` : "Марка автомобиля")}
              {activeModal === "price" && "Цена"}
              {activeModal === "year" && (yearStep === "from" ? "Год от" : "Год до")}
            </h2>
            {(selectedBrand || selectedPrice || selectedYearFrom || selectedYearTo) && (
              <button
                onClick={() => {
                  if (activeModal === "brand") {
                    setSelectedBrand(null)
                    setSelectedModel(null)
                  }
                  if (activeModal === "price") setSelectedPrice(null)
                  if (activeModal === "year") {
                    setSelectedYearFrom(null)
                    setSelectedYearTo(null)
                    setYearStep("from")
                  }
                  closeModal()
                }}
                className="text-sm text-blue-500"
              >
                Сбросить
              </button>
            )}
          </div>

          {/* Brand/Model Modal Content */}
          {activeModal === "brand" && !selectedBrand && (
            <div className="flex-1 overflow-y-auto" ref={modalRef}>
              {/* Search input */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-xl">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Поиск марки"
                    value={brandSearch}
                    onChange={(e) => setBrandSearch(e.target.value)}
                    className="bg-transparent outline-none text-sm flex-1"
                    autoFocus
                  />
                </div>
              </div>
              {/* Brand list */}
              <div>
                {filteredBrands.map((brand) => (
                  <button
                    key={brand.name}
                    onClick={() => handleBrandSelect(brand.name)}
                    className="w-full text-left px-4 py-3.5 border-b border-border hover:bg-secondary/50 transition-colors flex items-center justify-between"
                  >
                    <span className="text-base">{brand.name}</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground -rotate-90" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Model selection */}
          {activeModal === "brand" && selectedBrand && !selectedModel && selectedBrandData && (
            <div className="flex-1 overflow-y-auto" ref={modalRef}>
              <button
                onClick={() => {
                  setSelectedBrand(null)
                  setBrandSearch("")
                }}
                className="w-full text-left px-4 py-3.5 border-b border-border text-blue-500 text-sm"
              >
                ← Назад к маркам
              </button>
              <button
                onClick={() => {
                  setSelectedModel(null)
                  closeModal()
                }}
                className="w-full text-left px-4 py-3.5 border-b border-border hover:bg-secondary/50 transition-colors font-medium"
              >
                Все модели {selectedBrand}
              </button>
              {selectedBrandData.models.map((model) => (
                <button
                  key={model}
                  onClick={() => handleModelSelect(model)}
                  className="w-full text-left px-4 py-3.5 border-b border-border hover:bg-secondary/50 transition-colors"
                >
                  <span className="text-base">{model}</span>
                </button>
              ))}
            </div>
          )}

          {/* Price Modal Content */}
          {activeModal === "price" && (
            <div className="flex-1 overflow-y-auto" ref={modalRef}>
              {priceRanges.map((price) => (
                <button
                  key={price}
                  onClick={() => handlePriceSelect(price)}
                  className={`w-full text-left px-4 py-3.5 border-b border-border hover:bg-secondary/50 transition-colors ${
                    selectedPrice === price ? "bg-secondary font-medium" : ""
                  }`}
                >
                  <span className="text-base">{price}</span>
                </button>
              ))}
            </div>
          )}

          {/* Year Modal Content */}
          {activeModal === "year" && (
            <div className="flex-1 overflow-y-auto" ref={modalRef}>
              {/* Year step indicator */}
              <div className="px-4 py-3 border-b border-border bg-secondary/30">
                <div className="flex gap-2">
                  <div
                    className={`flex-1 text-center py-2 rounded-lg text-sm font-medium ${
                      yearStep === "from" ? "bg-foreground text-background" : "bg-secondary"
                    }`}
                  >
                    от {selectedYearFrom || "..."}
                  </div>
                  <div
                    className={`flex-1 text-center py-2 rounded-lg text-sm font-medium ${
                      yearStep === "to" ? "bg-foreground text-background" : "bg-secondary"
                    }`}
                  >
                    до {selectedYearTo || "..."}
                  </div>
                </div>
              </div>
              {years.map((year) => {
                const isDisabled =
                  yearStep === "to" && selectedYearFrom !== null && year < selectedYearFrom
                return (
                  <button
                    key={year}
                    onClick={() => !isDisabled && handleYearSelect(year)}
                    disabled={isDisabled}
                    className={`w-full text-left px-4 py-3.5 border-b border-border transition-colors ${
                      isDisabled
                        ? "text-muted-foreground/40 cursor-not-allowed"
                        : "hover:bg-secondary/50"
                    } ${
                      (yearStep === "from" && selectedYearFrom === year) ||
                      (yearStep === "to" && selectedYearTo === year)
                        ? "bg-secondary font-medium"
                        : ""
                    }`}
                  >
                    <span className="text-base">{year}</span>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      )}
    </>
  )
}

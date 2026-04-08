"use client"

import { 
  Drawer, 
  DrawerContent, 
  DrawerDescription, 
  DrawerHeader,
  DrawerOverlay, 
  DrawerPortal, 
  DrawerTitle 
} from "@/components/ui/drawer"
import { Phone, MessageSquare, X, ShieldCheck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useContact } from "@/lib/contact-context"
import { useAuth } from "@/lib/auth-context"

export function ContactModal() {
  const { isOpen, closeContact, selectedCar } = useContact()
  const { isAuthenticated, openAuthModal } = useAuth()

  if (!selectedCar) return null

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price)
  }

  const handleCall = () => {
    // В реальном приложении здесь можно логировать событие
    window.location.href = `tel:+79991234567`
  }

  const handleMessage = () => {
    if (!isAuthenticated) {
      closeContact()
      openAuthModal()
      return
    }
    // В реальном приложении здесь переход в чат
    window.location.href = `https://wa.me/79991234567`
  }

  return (
    <Drawer open={isOpen} onOpenChange={(open: boolean) => !open && closeContact()}>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className="outline-none">
          <div className="flex-1 bg-white p-4 pb-8">
            <DrawerHeader className="px-0 pt-0 flex items-center justify-between mb-2">
              <DrawerTitle className="text-xl font-bold">Связаться</DrawerTitle>
              <button 
                onClick={closeContact}
                className="p-2 rounded-full bg-gray-100 text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </DrawerHeader>

            {/* Car Summary */}
            <div className="flex gap-4 mb-8 bg-gray-50 p-3 rounded-2xl">
              <div className="h-20 w-24 rounded-xl overflow-hidden bg-gray-200 shrink-0">
                {selectedCar.images && selectedCar.images.length > 0 ? (
                  <img 
                    src={selectedCar.images[0]} 
                    alt={selectedCar.title} 
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-gray-400 text-xs text-center p-1">
                    Фото
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-lg line-clamp-1">{selectedCar.title}</h3>
                <p className="text-primary font-bold text-xl">{formatPrice(selectedCar.price)} ₽</p>
                <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                  <MapPin className="h-3 w-3" />
                  <span className="line-clamp-1">{selectedCar.location}</span>
                </div>
              </div>
            </div>

            {/* Seller Info (Mock) */}
            <div className="mb-8 px-2">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  М
                </div>
                <div>
                  <div className="font-bold text-gray-900">Максим Авто</div>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <ShieldCheck className="h-4 w-4" />
                    <span>На Форум Авто с 2019 года</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid gap-3">
              <Button 
                onClick={handleCall}
                className="h-14 rounded-2xl bg-green-500 hover:bg-green-600 text-white text-lg font-bold flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Позвонить
              </Button>
              <Button 
                onClick={handleMessage}
                variant="outline"
                className="h-14 rounded-2xl border-2 border-primary/20 hover:bg-primary/5 text-primary text-lg font-bold flex items-center justify-center gap-2"
              >
                <MessageSquare className="h-5 w-5" />
                Написать
              </Button>
            </div>

            <DrawerDescription className="text-center text-xs text-gray-400 mt-6 px-4">
              При звонке или сообщении скажите, что нашли объявление на Форум Авто. Никогда не переводите предоплату.
            </DrawerDescription>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  )
}

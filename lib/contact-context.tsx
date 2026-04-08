"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import type { Vehicle } from "./types"

interface ContactContextType {
  isOpen: boolean
  selectedCar: Vehicle | null
  openContact: (car: Vehicle) => void
  closeContact: () => void
}

const ContactContext = createContext<ContactContextType | undefined>(undefined)

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCar, setSelectedCar] = useState<Vehicle | null>(null)

  const openContact = (car: Vehicle) => {
    setSelectedCar(car)
    setIsOpen(true)
  }

  const closeContact = () => {
    setIsOpen(false)
    // We don't clear selectedCar immediately to avoid layout shifts during closing animation
  }

  return (
    <ContactContext.Provider
      value={{
        isOpen,
        selectedCar,
        openContact,
        closeContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export function useContact() {
  const context = useContext(ContactContext)
  if (context === undefined) {
    throw new Error("useContact must be used within a ContactProvider")
  }
  return context
}

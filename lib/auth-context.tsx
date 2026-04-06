"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

interface AuthContextType {
  isAuthenticated: boolean
  isAuthModalOpen: boolean
  login: () => void
  logout: () => void
  openAuthModal: () => void
  closeAuthModal: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const login = () => setIsAuthenticated(true)
  const logout = () => setIsAuthenticated(false)
  const openAuthModal = () => setIsAuthModalOpen(true)
  const closeAuthModal = () => setIsAuthModalOpen(false)

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isAuthModalOpen,
        login,
        logout,
        openAuthModal,
        closeAuthModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

// Authentication hook
"use client"

import { useEffect, useState } from "react"
import type { User, AuthState } from "@/lib/types"
import { getStoredUser, saveAuthState, logoutUser } from "@/lib/auth"

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    loading: true,
    error: null,
  })

  useEffect(() => {
    // Check if user is logged in on mount
    const user = getStoredUser()
    if (user) {
      setAuthState({
        user,
        isAuthenticated: true,
        loading: false,
        error: null,
      })
    } else {
      setAuthState({
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      })
    }
  }, [])

  const login = (user: User, token: string) => {
    saveAuthState(user, token)
    setAuthState({
      user,
      isAuthenticated: true,
      loading: false,
      error: null,
    })
  }

  const logout = async () => {
    setAuthState((prev) => ({ ...prev, loading: true }))
    await logoutUser()
    setAuthState({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,
    })
  }

  return {
    ...authState,
    login,
    logout,
  }
}

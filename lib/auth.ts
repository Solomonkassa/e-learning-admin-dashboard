// Authentication mock functions
import type { User, LoginCredentials } from "./types"
import { mockUser } from "./mock-data"

export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export const validatePassword = (password: string): boolean => {
  return password.length >= 8
}

export async function loginUser(
  credentials: LoginCredentials,
): Promise<{ user: User; token: string } | { error: string }> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Mock authentication - only specific credentials work
  if (credentials.email === "admin@eduhub.com" && credentials.password === "password123") {
    return {
      user: mockUser,
      token: "mock-jwt-token-" + Date.now(),
    }
  }

  return {
    error: "Invalid email or password",
  }
}

export async function logoutUser(): Promise<void> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300))
  // Clear session
  if (typeof window !== "undefined") {
    localStorage.removeItem("authToken")
    localStorage.removeItem("user")
  }
}

export function getStoredUser(): User | null {
  if (typeof window === "undefined") return null
  const user = localStorage.getItem("user")
  return user ? JSON.parse(user) : null
}

export function saveAuthState(user: User, token: string): void {
  if (typeof window === "undefined") return
  localStorage.setItem("user", JSON.stringify(user))
  localStorage.setItem("authToken", token)
}

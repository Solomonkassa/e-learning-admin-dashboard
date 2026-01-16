// Instructors management hook
"use client"

import { useState, useCallback, useEffect } from "react"
import type { Instructor } from "@/lib/types"
import { getInstructors, saveInstructors } from "@/lib/storage"

export function useInstructors() {
  const [instructors, setInstructors] = useState<Instructor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadInstructors = async () => {
      try {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 500))
        const data = getInstructors()
        setInstructors(data)
        setError(null)
      } catch (err) {
        setError("Failed to load instructors")
      } finally {
        setLoading(false)
      }
    }

    loadInstructors()
  }, [])

  const approveInstructor = useCallback(
    (id: string) => {
      const updated = instructors.map((inst) => (inst.id === id ? { ...inst, status: "Approved" as const } : inst))
      setInstructors(updated)
      saveInstructors(updated)
    },
    [instructors],
  )

  const rejectInstructor = useCallback(
    (id: string) => {
      const updated = instructors.map((inst) => (inst.id === id ? { ...inst, status: "Rejected" as const } : inst))
      setInstructors(updated)
      saveInstructors(updated)
    },
    [instructors],
  )

  const updateInstructor = useCallback(
    (id: string, updates: Partial<Instructor>) => {
      const updated = instructors.map((inst) => (inst.id === id ? { ...inst, ...updates } : inst))
      setInstructors(updated)
      saveInstructors(updated)
    },
    [instructors],
  )

  return {
    instructors,
    loading,
    error,
    approveInstructor,
    rejectInstructor,
    updateInstructor,
  }
}

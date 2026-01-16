// Students management hook
"use client"

import { useState, useCallback, useEffect } from "react"
import type { Student } from "@/lib/types"
import { getStudents, saveStudents } from "@/lib/storage"

export function useStudents() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadStudents = async () => {
      try {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 500))
        const data = getStudents()
        setStudents(data)
        setError(null)
      } catch (err) {
        setError("Failed to load students")
      } finally {
        setLoading(false)
      }
    }

    loadStudents()
  }, [])

  const updateStudent = useCallback(
    (id: string, updates: Partial<Student>) => {
      const updated = students.map((student) => (student.id === id ? { ...student, ...updates } : student))
      setStudents(updated)
      saveStudents(updated)
    },
    [students],
  )

  const suspendStudent = useCallback(
    (id: string) => {
      updateStudent(id, { status: "Suspended" })
    },
    [updateStudent],
  )

  const bulkUpdateStatus = useCallback(
    (ids: string[], status: "Active" | "Suspended" | "Inactive") => {
      const updated = students.map((student) => (ids.includes(student.id) ? { ...student, status } : student))
      setStudents(updated)
      saveStudents(updated)
    },
    [students],
  )

  return {
    students,
    loading,
    error,
    updateStudent,
    suspendStudent,
    bulkUpdateStatus,
  }
}

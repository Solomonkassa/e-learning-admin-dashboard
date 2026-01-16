// Courses management hook
"use client"

import { useState, useCallback, useEffect } from "react"
import type { Course } from "@/lib/types"
import { getCourses, saveCourses } from "@/lib/storage"

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true)
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500))
        const data = getCourses()
        setCourses(data)
        setError(null)
      } catch (err) {
        setError("Failed to load courses")
      } finally {
        setLoading(false)
      }
    }

    loadCourses()
  }, [])

  const addCourse = useCallback(
    (course: Omit<Course, "id" | "createdAt" | "updatedAt">) => {
      const newCourse: Course = {
        ...course,
        id: `course-${Date.now()}`,
        createdAt: new Date().toISOString().split("T")[0],
        updatedAt: new Date().toISOString().split("T")[0],
      }
      const updated = [...courses, newCourse]
      setCourses(updated)
      saveCourses(updated)
      return newCourse
    },
    [courses],
  )

  const updateCourse = useCallback(
    (id: string, updates: Partial<Course>) => {
      const updated = courses.map((course) =>
        course.id === id ? { ...course, ...updates, updatedAt: new Date().toISOString().split("T")[0] } : course,
      )
      setCourses(updated)
      saveCourses(updated)
    },
    [courses],
  )

  const deleteCourse = useCallback(
    (id: string) => {
      const updated = courses.filter((course) => course.id !== id)
      setCourses(updated)
      saveCourses(updated)
    },
    [courses],
  )

  return {
    courses,
    loading,
    error,
    addCourse,
    updateCourse,
    deleteCourse,
  }
}

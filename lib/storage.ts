// Client-side storage management for mock data
import type { Course, Student, Instructor } from "./types"
import { mockCourses, mockStudents, mockInstructors } from "./mock-data"

const STORAGE_KEYS = {
  COURSES: "eduhub_courses",
  STUDENTS: "eduhub_students",
  INSTRUCTORS: "eduhub_instructors",
}

// Initialize storage from mock data
export function initializeStorage() {
  if (typeof window === "undefined") return

  if (!localStorage.getItem(STORAGE_KEYS.COURSES)) {
    localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(mockCourses))
  }
  if (!localStorage.getItem(STORAGE_KEYS.STUDENTS)) {
    localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(mockStudents))
  }
  if (!localStorage.getItem(STORAGE_KEYS.INSTRUCTORS)) {
    localStorage.setItem(STORAGE_KEYS.INSTRUCTORS, JSON.stringify(mockInstructors))
  }
}

export function getCourses(): Course[] {
  if (typeof window === "undefined") return mockCourses
  const stored = localStorage.getItem(STORAGE_KEYS.COURSES)
  return stored ? JSON.parse(stored) : mockCourses
}

export function saveCourses(courses: Course[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses))
}

export function getStudents(): Student[] {
  if (typeof window === "undefined") return mockStudents
  const stored = localStorage.getItem(STORAGE_KEYS.STUDENTS)
  return stored ? JSON.parse(stored) : mockStudents
}

export function saveStudents(students: Student[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(students))
}

export function getInstructors(): Instructor[] {
  if (typeof window === "undefined") return mockInstructors
  const stored = localStorage.getItem(STORAGE_KEYS.INSTRUCTORS)
  return stored ? JSON.parse(stored) : mockInstructors
}

export function saveInstructors(instructors: Instructor[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEYS.INSTRUCTORS, JSON.stringify(instructors))
}

// Types for the entire application
export type UserRole = "admin" | "instructor" | "student"

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  avatar?: string
  department?: string
  joinDate: string
}

export interface Course {
  id: string
  title: string
  description: string
  category: "Web Development" | "Data Science" | "Business" | "Design" | "Mobile"
  instructor: string
  instructorId: string
  status: "Draft" | "Published" | "Archived"
  enrollments: number
  rating: number
  thumbnail?: string
  createdAt: string
  updatedAt: string
  price: number
  lessonCount: number
}

export interface Student {
  id: string
  name: string
  email: string
  avatar: string
  enrolledCourses: number
  completionRate: number
  status: "Active" | "Suspended" | "Inactive"
  joinDate: string
  totalHours: number
  averageRating: number
  lastActive: string
}

export interface Instructor {
  id: string
  name: string
  email: string
  avatar: string
  assignedCourses: number
  totalStudents: number
  revenue: number
  rating: number
  status: "Pending" | "Approved" | "Rejected"
  joinDate: string
  bio?: string
}

export interface Lesson {
  id: string
  courseId: string
  title: string
  module: number
  order: number
  duration: number
  type: "video" | "quiz" | "assignment" | "reading"
  status: "Draft" | "Published"
}

export interface Transaction {
  id: string
  studentId: string
  courseId: string
  amount: number
  date: string
  status: "Completed" | "Pending" | "Failed"
  paymentMethod: string
}

export interface AnalyticsData {
  date: string
  students: number
  revenue: number
  completions: number
}

export interface LoginCredentials {
  email: string
  password: string
  rememberMe?: boolean
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

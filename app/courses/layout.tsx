import type React from "react"
import { AdminLayout } from "@/components/layout/admin-layout"

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminLayout>{children}</AdminLayout>
}

import type React from "react"
import { AdminLayout } from "@/components/layout/admin-layout"

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminLayout>{children}</AdminLayout>
}

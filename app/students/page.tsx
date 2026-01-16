"use client"
import { AdminLayout } from "@/components/layout/admin-layout"
import { PageHeader } from "@/components/common/page-header"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { StudentTable } from "@/components/students/student-table"
import { StudentDrawer } from "@/components/students/student-drawer"
import { useState } from "react"
import { motion } from "framer-motion"

export default function StudentsPage() {
  const [selectedStudent, setSelectedStudent] = useState<(typeof studentData)[0] | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <AdminLayout>
      <div className="p-8 space-y-8">
        <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Students" }]} />

        <PageHeader title="Student Management" description="Monitor and manage all student accounts and progress" />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <StudentTable
            onSelectStudent={(student) => {
              setSelectedStudent(student)
              setDrawerOpen(true)
            }}
          />
        </motion.div>

        <StudentDrawer student={selectedStudent} open={drawerOpen} onOpenChange={setDrawerOpen} />
      </div>
    </AdminLayout>
  )
}

// Mock data export for use in StudentTable
export const studentData = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    coursesEnrolled: 5,
    progress: 72,
    status: "Active",
    joinDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    coursesEnrolled: 3,
    progress: 45,
    status: "Active",
    joinDate: "2024-02-20",
  },
  {
    id: 3,
    name: "Mike Davis",
    email: "mike@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    coursesEnrolled: 2,
    progress: 15,
    status: "Suspended",
    joinDate: "2024-01-10",
  },
  {
    id: 4,
    name: "Emily Wilson",
    email: "emily@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    coursesEnrolled: 7,
    progress: 89,
    status: "Active",
    joinDate: "2023-12-01",
  },
  {
    id: 5,
    name: "David Brown",
    email: "david@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    coursesEnrolled: 4,
    progress: 58,
    status: "Active",
    joinDate: "2024-01-25",
  },
]

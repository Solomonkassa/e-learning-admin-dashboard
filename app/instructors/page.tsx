"use client"
import { AdminLayout } from "@/components/layout/admin-layout"
import { PageHeader } from "@/components/common/page-header"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { InstructorTable } from "@/components/instructors/instructor-table"
import { motion } from "framer-motion"

export default function InstructorsPage() {
  return (
    <AdminLayout>
      <div className="p-8 space-y-8">
        <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Instructors" }]} />

        <PageHeader
          title="Instructor Management"
          description="Manage instructors, review applications, and monitor performance metrics"
          action={{
            label: "+ Approve Instructors",
            onClick: () => {
              // Handle action
            },
          }}
        />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <InstructorTable />
        </motion.div>
      </div>
    </AdminLayout>
  )
}

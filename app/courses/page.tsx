"use client"

import { useState } from "react"
import { PageHeader } from "@/components/common/page-header"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { CourseTable } from "@/components/courses/course-table"
import { CourseModal } from "@/components/courses/course-modal"
import { motion } from "framer-motion"

export default function CoursesPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="p-8 space-y-8">
      <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Courses" }]} />

      <PageHeader
        title="Course Management"
        description="Manage all courses, instructors, and course content"
        action={{
          label: "+ Add New Course",
          onClick: () => setModalOpen(true),
        }}
      />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <CourseTable />
      </motion.div>

      <CourseModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  )
}

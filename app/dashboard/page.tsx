"use client"

import { PageHeader } from "@/components/common/page-header"
import { StatsCard } from "@/components/common/stats-card"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, DollarSign, TrendingUp } from "lucide-react"
import { StudentGrowthChart } from "@/components/dashboard/student-growth-chart"
import { CourseEnrollmentsChart } from "@/components/dashboard/course-enrollments-chart"
import { CourseCategoriesChart } from "@/components/dashboard/course-categories-chart"
import { RecentActivityTable } from "@/components/dashboard/recent-activity-table"
import { motion } from "framer-motion"

export default function DashboardPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="p-8 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Dashboard" }]} />

      {/* Header */}
      <PageHeader title="Dashboard" description="Welcome back! Here's your platform overview." />

      {/* KPI Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <motion.div variants={itemVariants}>
          <StatsCard
            title="Total Students"
            value="12,543"
            change={12}
            icon={<Users className="w-6 h-6" />}
            trend="up"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatsCard title="Active Courses" value="48" change={8} icon={<BookOpen className="w-6 h-6" />} trend="up" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatsCard
            title="Monthly Revenue"
            value="$45,231"
            change={15}
            icon={<DollarSign className="w-6 h-6" />}
            trend="up"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatsCard
            title="Completion Rate"
            value="87%"
            change={3}
            icon={<TrendingUp className="w-6 h-6" />}
            trend="up"
          />
        </motion.div>
      </motion.div>

      {/* Charts Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <StudentGrowthChart />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CourseCategoriesChart />
        </motion.div>
      </motion.div>

      {/* Additional Charts and Table */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <CourseEnrollmentsChart />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Avg Course Rating</span>
                  <span className="text-sm font-semibold">4.8/5.0</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-success" style={{ width: "96%" }}></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Instructor Approval</span>
                  <span className="text-sm font-semibold">23 Pending</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-warning" style={{ width: "60%" }}></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Server Uptime</span>
                  <span className="text-sm font-semibold">99.98%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-success" style={{ width: "99.98%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div variants={itemVariants}>
        <RecentActivityTable />
      </motion.div>
    </div>
  )
}

"use client"
import { AdminLayout } from "@/components/layout/admin-layout"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, BarChart3, Users, DollarSign } from "lucide-react"
import { motion } from "framer-motion"

const reports = [
  {
    id: 1,
    title: "Monthly Revenue Report",
    description: "Summary of platform revenue for the current month",
    icon: DollarSign,
    date: "Generated Jan 15, 2024",
    status: "Ready",
  },
  {
    id: 2,
    title: "Student Engagement Report",
    description: "Detailed analysis of student activity and engagement metrics",
    icon: Users,
    date: "Generated Jan 14, 2024",
    status: "Ready",
  },
  {
    id: 3,
    title: "Course Performance Analytics",
    description: "Performance metrics for all active courses",
    icon: BarChart3,
    date: "Generating...",
    status: "Processing",
  },
  {
    id: 4,
    title: "Compliance Report",
    description: "Annual compliance and audit report",
    icon: FileText,
    date: "Generated Jan 1, 2024",
    status: "Ready",
  },
]

export default function ReportsPage() {
  return (
    <AdminLayout>
      <div className="p-8 space-y-8">
        <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Reports" }]} />

        <div>
          <h1 className="text-3xl font-bold">Reports</h1>
          <p className="text-muted-foreground mt-2">Access and download platform reports</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reports.map((report) => {
            const Icon = report.icon

            return (
              <motion.div key={report.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="rounded-2xl h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-base">{report.title}</CardTitle>
                          <CardDescription className="text-xs mt-1">{report.date}</CardDescription>
                        </div>
                      </div>
                      <Badge className={report.status === "Ready" ? "badge-success" : "badge-warning"}>
                        {report.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                    <Button className="w-full rounded-lg bg-primary hover:bg-primary/90 flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download Report
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </AdminLayout>
  )
}

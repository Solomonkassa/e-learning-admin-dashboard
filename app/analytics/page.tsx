"use client"
import { AdminLayout } from "@/components/layout/admin-layout"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Calendar } from "lucide-react"
import { RevenueChart } from "@/components/analytics/revenue-chart"
import { CompletionRateChart } from "@/components/analytics/completion-rate-chart"
import { DropoffAnalysisChart } from "@/components/analytics/dropoff-analysis-chart"
import { motion } from "framer-motion"

export default function AnalyticsPage() {
  return (
    <AdminLayout>
      <div className="p-8 space-y-8">
        <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Analytics" }]} />

        {/* Header with filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Analytics & Reports</h1>
            <p className="text-muted-foreground mt-2">Track platform metrics and performance data</p>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <Select defaultValue="month">
                <SelectTrigger className="w-48 rounded-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Last 7 Days</SelectItem>
                  <SelectItem value="month">Last 30 Days</SelectItem>
                  <SelectItem value="quarter">Last 90 Days</SelectItem>
                  <SelectItem value="year">Last Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" className="rounded-lg bg-transparent" size="icon">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Charts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <RevenueChart />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <CompletionRateChart />
          </motion.div>
        </motion.div>

        {/* Dropoff Analysis */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <DropoffAnalysisChart />
        </motion.div>

        {/* Export Section */}
        <Card className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Export Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-lg bg-primary hover:bg-primary/90">Export as CSV</Button>
              <Button variant="outline" className="rounded-lg bg-transparent">
                Export as PDF
              </Button>
              <Button variant="outline" className="rounded-lg bg-transparent">
                Schedule Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}

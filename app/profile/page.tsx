"use client"
import { AdminLayout } from "@/components/layout/admin-layout"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Mail, Calendar, Shield } from "lucide-react"
import { motion } from "framer-motion"

const activityLog = [
  { action: "Login", device: "Chrome on Windows", time: "2 hours ago" },
  { action: "Course Published", detail: "React Advanced Patterns", time: "1 day ago" },
  { action: "Password Changed", device: "Safari on Mac", time: "5 days ago" },
  { action: "Bulk Import", detail: "100 students imported", time: "1 week ago" },
]

export default function ProfilePage() {
  return (
    <AdminLayout>
      <div className="p-8 space-y-8">
        <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Profile" }]} />

        <div>
          <h1 className="text-3xl font-bold">Admin Profile</h1>
          <p className="text-muted-foreground mt-2">Manage your account and activity</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="space-y-6 max-w-2xl"
        >
          {/* Profile Overview */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Your admin account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button className="rounded-lg bg-primary hover:bg-primary/90">Change Avatar</Button>
                    <p className="text-xs text-muted-foreground mt-2">Max 2MB, PNG, JPG or GIF</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input defaultValue="Admin" className="rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input defaultValue="User" className="rounded-lg" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input defaultValue="admin@eduhub.com" className="rounded-lg" />
                </div>

                <div className="flex gap-3">
                  <Button className="rounded-lg bg-primary hover:bg-primary/90">Save Changes</Button>
                  <Button variant="outline" className="rounded-lg bg-transparent">
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Account Details */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Account Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg border border-border">
                  <Mail className="w-5 h-5 text-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-xs text-muted-foreground">admin@eduhub.com</p>
                  </div>
                  <Badge className="badge-success">Verified</Badge>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg border border-border">
                  <Shield className="w-5 h-5 text-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Role</p>
                    <p className="text-xs text-muted-foreground">Platform Administrator</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg border border-border">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Member Since</p>
                    <p className="text-xs text-muted-foreground">January 1, 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Activity Log */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Activity Log</CardTitle>
                <CardDescription>Recent account activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b border-border">
                        <TableHead>Action</TableHead>
                        <TableHead>Details</TableHead>
                        <TableHead className="text-right">Time</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {activityLog.map((log, i) => (
                        <TableRow key={i} className="border-b border-border">
                          <TableCell className="font-medium text-sm">{log.action}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{log.detail || log.device}</TableCell>
                          <TableCell className="text-right text-sm text-muted-foreground">{log.time}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </AdminLayout>
  )
}

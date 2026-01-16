"use client"
import { AdminLayout } from "@/components/layout/admin-layout"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sun, Moon, Bell, Lock, Users } from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function SettingsPage() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark")
      setIsDark(false)
    } else {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <AdminLayout>
      <div className="p-8 space-y-8">
        <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Settings" }]} />

        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-2">Configure your platform preferences and system settings</p>
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6 max-w-2xl">
          {/* Theme */}
          <motion.div variants={itemVariants}>
            <Card className="rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  <div>
                    <CardTitle className="text-lg">Theme</CardTitle>
                    <CardDescription>Choose your preferred color scheme</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border">
                  <span className="font-medium">{isDark ? "Dark Mode" : "Light Mode"}</span>
                  <Switch checked={isDark} onCheckedChange={toggleTheme} />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Notifications */}
          <motion.div variants={itemVariants}>
            <Card className="rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5" />
                  <div>
                    <CardTitle className="text-lg">Notifications</CardTitle>
                    <CardDescription>Manage notification preferences</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border">
                  <span className="font-medium text-sm">Email Notifications</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border">
                  <span className="font-medium text-sm">Course Updates</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border">
                  <span className="font-medium text-sm">Student Enrollments</span>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Security */}
          <motion.div variants={itemVariants}>
            <Card className="rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5" />
                  <div>
                    <CardTitle className="text-lg">Security</CardTitle>
                    <CardDescription>Manage security settings and access</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password" className="font-medium">
                    Change Password
                  </Label>
                  <Input id="password" type="password" placeholder="••••••••" className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm" className="font-medium">
                    Confirm Password
                  </Label>
                  <Input id="confirm" type="password" placeholder="••••••••" className="rounded-lg" />
                </div>
                <Button className="w-full rounded-lg bg-primary hover:bg-primary/90">Update Password</Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Platform Settings */}
          <motion.div variants={itemVariants}>
            <Card className="rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  <div>
                    <CardTitle className="text-lg">Platform Settings</CardTitle>
                    <CardDescription>Configure system-wide preferences</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="role" className="font-medium">
                    Default User Role
                  </Label>
                  <Select defaultValue="student">
                    <SelectTrigger id="role" className="rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="instructor">Instructor</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border">
                  <span className="font-medium text-sm">Allow Public Signups</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border">
                  <span className="font-medium text-sm">Require Email Verification</span>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Save Changes */}
          <div className="flex gap-3">
            <Button className="rounded-lg bg-primary hover:bg-primary/90">Save Changes</Button>
            <Button variant="outline" className="rounded-lg bg-transparent">
              Cancel
            </Button>
          </div>
        </motion.div>
      </div>
    </AdminLayout>
  )
}

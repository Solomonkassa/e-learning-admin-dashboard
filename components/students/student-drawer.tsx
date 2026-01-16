"use client"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { studentData } from "@/app/students/page"
import { Mail, Calendar, BookOpen } from "lucide-react"

interface StudentDrawerProps {
  student: (typeof studentData)[0] | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function StudentDrawer({ student, open, onOpenChange }: StudentDrawerProps) {
  if (!student) return null

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="rounded-2xl">
        <SheetHeader className="text-left">
          <SheetTitle>Student Profile</SheetTitle>
          <SheetDescription>View and manage student details</SheetDescription>
        </SheetHeader>

        <div className="space-y-6 mt-6">
          {/* Avatar & Basic Info */}
          <div className="flex flex-col items-center gap-4 pb-6 border-b border-border">
            <Avatar className="h-20 w-20">
              <AvatarImage src={student.avatar || "/placeholder.svg"} />
              <AvatarFallback>{student.name.split(" ")[0][0]}</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h3 className="text-lg font-semibold">{student.name}</h3>
              <Badge className={student.status === "Active" ? "badge-success mt-2" : "badge-destructive mt-2"}>
                {student.status}
              </Badge>
            </div>
          </div>

          {/* Contact Information */}
          <Card className="rounded-xl">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">{student.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Joined {student.joinDate}</p>
              </div>
            </CardContent>
          </Card>

          {/* Learning Progress */}
          <Card className="rounded-xl">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Learning Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Overall Progress</span>
                  <span className="text-sm font-semibold">{student.progress}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-chart-1" style={{ width: `${student.progress}%` }}></div>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{student.coursesEnrolled} courses enrolled</span>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="space-y-2 pt-4">
            <Button className="w-full rounded-lg bg-primary hover:bg-primary/90">Send Message</Button>
            <Button variant="outline" className="w-full rounded-lg bg-transparent">
              View Grades
            </Button>
            <Button variant="outline" className="w-full rounded-lg text-destructive bg-transparent">
              Suspend Account
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    student: "John Smith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    action: "Enrolled in React Basics",
    type: "enrollment",
    time: "2 hours ago",
  },
  {
    id: 2,
    student: "Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    action: "Completed Node.js Course",
    type: "completion",
    time: "4 hours ago",
  },
  {
    id: 3,
    student: "Mike Davis",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    action: "Submitted assignment",
    type: "submission",
    time: "1 day ago",
  },
  {
    id: 4,
    student: "Emily Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    action: "Account suspended",
    type: "warning",
    time: "2 days ago",
  },
  {
    id: 5,
    student: "David Brown",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    action: "Payment received",
    type: "payment",
    time: "3 days ago",
  },
]

const typeColors = {
  enrollment: "badge-info",
  completion: "badge-success",
  submission: "badge-info",
  warning: "badge-warning",
  payment: "badge-success",
}

export function RecentActivityTable() {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest events from your platform</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border">
                <TableHead>Student</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activities.map((activity) => (
                <TableRow key={activity.id} className="border-b border-border hover:bg-secondary/30">
                  <TableCell className="py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{activity.student.split(" ")[0][0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-sm">{activity.student}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{activity.action}</TableCell>
                  <TableCell>
                    <Badge className={typeColors[activity.type as keyof typeof typeColors]}>{activity.type}</Badge>
                  </TableCell>
                  <TableCell className="text-right text-sm text-muted-foreground">{activity.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

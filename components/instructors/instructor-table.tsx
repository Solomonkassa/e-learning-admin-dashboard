"use client"
import { useState } from "react"
import { Search, Filter, MoreVertical, CheckCircle, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const instructorData = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "sarah.chen@edu.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarahchen",
    status: "Approved",
    coursesCount: 5,
    revenue: "$8,340",
    rating: 4.9,
  },
  {
    id: 2,
    name: "James Wilson",
    email: "james@edu.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jameswilson",
    status: "Pending",
    coursesCount: 0,
    revenue: "$0",
    rating: 0,
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.d@edu.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emilydavis",
    status: "Approved",
    coursesCount: 8,
    revenue: "$12,450",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "mbrown@edu.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michaelbrown",
    status: "Approved",
    coursesCount: 3,
    revenue: "$5,620",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Lisa Anderson",
    email: "lisa.a@edu.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisaanderson",
    status: "Pending",
    coursesCount: 0,
    revenue: "$0",
    rating: 0,
  },
]

export function InstructorTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<string | null>(null)

  const filtered = instructorData.filter((instructor) => {
    const matchesSearch =
      instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      instructor.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = !filterStatus || instructor.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle>All Instructors</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{filtered.length} instructors found</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-lg"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-lg bg-transparent">
                  <Filter className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setFilterStatus(null)}>All Status</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("Approved")}>Approved</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("Pending")}>Pending</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border">
                <TableHead>Instructor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Courses</TableHead>
                <TableHead className="text-right">Revenue</TableHead>
                <TableHead className="text-right">Rating</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((instructor) => (
                <TableRow key={instructor.id} className="border-b border-border hover:bg-secondary/30">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={instructor.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{instructor.name.split(" ")[0][0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{instructor.name}</p>
                        <p className="text-xs text-muted-foreground">{instructor.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={instructor.status === "Approved" ? "badge-success" : "badge-warning"}>
                      {instructor.status === "Approved" ? (
                        <>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {instructor.status}
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3 mr-1" />
                          {instructor.status}
                        </>
                      )}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-sm font-medium">{instructor.coursesCount}</TableCell>
                  <TableCell className="text-right text-sm font-medium">{instructor.revenue}</TableCell>
                  <TableCell className="text-right text-sm font-medium">
                    {instructor.rating > 0 ? `${instructor.rating}/5.0` : "-"}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-lg">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {instructor.status === "Pending" && (
                          <DropdownMenuItem className="cursor-pointer text-success">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Approve
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="cursor-pointer">View Profile</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">View Courses</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">View Earnings</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-destructive">Deactivate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

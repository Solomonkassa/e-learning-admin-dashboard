"use client"
import { useState } from "react"
import { MoreVertical, Search, Filter, Edit2, Trash2, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

const courseData = [
  {
    id: 1,
    title: "React Advanced Patterns",
    instructor: "Sarah Chen",
    category: "Programming",
    status: "Published",
    enrollments: 2145,
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    instructor: "James Wilson",
    category: "Design",
    status: "Published",
    enrollments: 1823,
  },
  {
    id: 3,
    title: "Business Strategy 2024",
    instructor: "Michael Brown",
    category: "Business",
    status: "Draft",
    enrollments: 0,
  },
  {
    id: 4,
    title: "Python for Data Science",
    instructor: "Emily Davis",
    category: "Programming",
    status: "Published",
    enrollments: 3201,
  },
  {
    id: 5,
    title: "Digital Marketing Mastery",
    instructor: "Lisa Anderson",
    category: "Marketing",
    status: "Published",
    enrollments: 1456,
  },
  {
    id: 6,
    title: "Spanish Conversational",
    instructor: "Carlos Rodriguez",
    category: "Languages",
    status: "Published",
    enrollments: 890,
  },
]

export function CourseTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState<string | null>(null)

  const filtered = courseData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = !filterCategory || course.category === filterCategory
    return matchesSearch && matchesFilter
  })

  const categories = Array.from(new Set(courseData.map((c) => c.category)))

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle>All Courses</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{filtered.length} courses found</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
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
                <DropdownMenuItem onClick={() => setFilterCategory(null)}>All Categories</DropdownMenuItem>
                {categories.map((cat) => (
                  <DropdownMenuItem key={cat} onClick={() => setFilterCategory(cat)}>
                    {cat}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border">
                <TableHead>Title</TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Enrollments</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((course) => (
                <TableRow key={course.id} className="border-b border-border hover:bg-secondary/30">
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell className="text-sm">{course.instructor}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="rounded-full">
                      {course.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={course.status === "Published" ? "badge-success" : "badge-warning"}>
                      {course.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-sm font-medium">{course.enrollments}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-lg">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="cursor-pointer">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <Edit2 className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </CardContent>
    </Card>
  )
}

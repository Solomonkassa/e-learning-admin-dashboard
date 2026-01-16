"use client"
import { AdminLayout } from "@/components/layout/admin-layout"
import { PageHeader } from "@/components/common/page-header"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, FileText, Layers, GripVertical, MoreVertical } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

const courseContent = [
  {
    id: 1,
    title: "React Fundamentals",
    modules: [
      {
        id: 1,
        title: "Getting Started with React",
        lessons: [
          { id: 1, title: "Introduction to React", duration: "12:45", status: "Published" },
          { id: 2, title: "JSX Basics", duration: "18:30", status: "Published" },
          { id: 3, title: "Components Overview", duration: "15:20", status: "Draft" },
        ],
      },
      {
        id: 2,
        title: "Hooks Deep Dive",
        lessons: [
          { id: 4, title: "useState Hook", duration: "20:15", status: "Published" },
          { id: 5, title: "useEffect Hook", duration: "22:40", status: "Published" },
        ],
      },
    ],
  },
]

export default function ContentPage() {
  const [expandedModule, setExpandedModule] = useState<number | null>(1)

  return (
    <AdminLayout>
      <div className="p-8 space-y-8">
        <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Content" }]} />

        <PageHeader
          title="Content & Lessons Management"
          description="Organize and manage course hierarchy and lesson content"
        />

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Course Content Hierarchy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {courseContent.map((course) => (
              <motion.div key={course.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Layers className="w-5 h-5 text-primary" />
                    {course.title}
                  </h3>

                  <div className="mt-4 space-y-3 ml-4">
                    {course.modules.map((module) => (
                      <motion.div key={module.id}>
                        <button
                          onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                          className="w-full flex items-center gap-2 p-3 rounded-lg hover:bg-secondary/50 transition-colors text-left"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              expandedModule === module.id ? "rotate-180" : ""
                            }`}
                          />
                          <FileText className="w-4 h-4 text-chart-2" />
                          <span className="font-medium text-sm">{module.title}</span>
                          <Badge variant="secondary" className="ml-auto rounded-full text-xs">
                            {module.lessons.length} lessons
                          </Badge>
                        </button>

                        {expandedModule === module.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="ml-6 mt-2 space-y-2 pl-4 border-l border-border"
                          >
                            {module.lessons.map((lesson) => (
                              <div
                                key={lesson.id}
                                className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/30 transition-colors"
                              >
                                <div className="flex items-center gap-3 flex-1">
                                  <GripVertical className="w-4 h-4 text-muted-foreground" />
                                  <div className="flex-1">
                                    <p className="text-sm font-medium">{lesson.title}</p>
                                    <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge className={lesson.status === "Published" ? "badge-success" : "badge-warning"}>
                                    {lesson.status}
                                  </Badge>
                                  <Button variant="ghost" size="icon" className="rounded-lg">
                                    <MoreVertical className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}

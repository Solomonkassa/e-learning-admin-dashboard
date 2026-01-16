"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const data = [
  { name: "React", enrollments: 1200 },
  { name: "Node.js", enrollments: 900 },
  { name: "Python", enrollments: 1100 },
  { name: "TypeScript", enrollments: 800 },
  { name: "Next.js", enrollments: 950 },
  { name: "SQL", enrollments: 750 },
]

export function CourseEnrollmentsChart() {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Top Courses by Enrollments</CardTitle>
        <CardDescription>Current semester enrollment numbers</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="name" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="enrollments" fill="var(--color-chart-2)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

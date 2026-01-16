"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const data = [
  { month: "Jan", students: 2400, enrollments: 1200 },
  { month: "Feb", students: 3200, enrollments: 1800 },
  { month: "Mar", students: 4100, enrollments: 2400 },
  { month: "Apr", students: 5200, enrollments: 3200 },
  { month: "May", students: 6800, enrollments: 4100 },
  { month: "Jun", students: 8400, enrollments: 5200 },
  { month: "Jul", students: 10100, enrollments: 6800 },
  { month: "Aug", students: 12543, enrollments: 8200 },
]

export function StudentGrowthChart() {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Student Growth & Enrollments</CardTitle>
        <CardDescription>Monthly growth over the past 8 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="students"
              stroke="var(--color-chart-1)"
              strokeWidth={2}
              dot={{ fill: "var(--color-chart-1)", r: 4 }}
              name="Total Students"
            />
            <Line
              type="monotone"
              dataKey="enrollments"
              stroke="var(--color-chart-2)"
              strokeWidth={2}
              dot={{ fill: "var(--color-chart-2)", r: 4 }}
              name="New Enrollments"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const data = [
  { stage: "Enrolled", students: 1000 },
  { stage: "Started", students: 890 },
  { stage: "Mid-way", students: 720 },
  { stage: "Near End", students: 610 },
  { stage: "Completed", students: 520 },
]

export function DropoffAnalysisChart() {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Student Dropoff Analysis</CardTitle>
        <CardDescription>Number of students at each course stage</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="stage" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="students" fill="var(--color-chart-2)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

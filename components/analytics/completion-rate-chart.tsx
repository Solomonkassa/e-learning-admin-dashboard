"use client"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const data = [
  { month: "Jan", completion: 75 },
  { month: "Feb", completion: 78 },
  { month: "Mar", completion: 82 },
  { month: "Apr", completion: 85 },
  { month: "May", completion: 87 },
  { month: "Jun", completion: 88 },
]

export function CompletionRateChart() {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Course Completion Rate</CardTitle>
        <CardDescription>Monthly completion percentage</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" domain={[0, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
              }}
            />
            <Area
              type="monotone"
              dataKey="completion"
              stroke="var(--color-chart-3)"
              fill="var(--color-chart-3)"
              fillOpacity={0.2}
              name="Completion Rate %"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

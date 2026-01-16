"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    subscribers: 2100,
    features: ["3 courses", "Community support", "Basic certificates"],
    color: "bg-slate-100 dark:bg-slate-900",
  },
  {
    name: "Pro",
    price: "$9.99",
    subscribers: 1245,
    features: ["Unlimited courses", "Priority support", "Advanced certificates", "Offline access"],
    color: "bg-primary/10",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    subscribers: 76,
    features: ["Everything in Pro", "Team management", "Custom branding", "Dedicated support"],
    color: "bg-accent/10",
  },
]

export function SubscriptionPlans() {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Subscription Plans</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-6 rounded-xl border border-border ${plan.color} ${plan.featured ? "ring-2 ring-primary" : ""}`}
            >
              {plan.featured && <Badge className="mb-4 badge-info">Most Popular</Badge>}
              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold">{plan.price}</p>
                <p className="text-sm text-muted-foreground">{plan.subscribers} subscribers</p>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-success flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? "default" : "outline"}
                className={`w-full rounded-lg ${plan.featured ? "bg-primary hover:bg-primary/90" : ""}`}
              >
                Manage Plan
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

"use client"
import { Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"

const transactions = [
  {
    id: "TXN001",
    user: "John Smith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    amount: "$99.99",
    method: "Credit Card",
    status: "Completed",
    date: "2024-01-15",
  },
  {
    id: "TXN002",
    user: "Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    amount: "$199.99",
    method: "PayPal",
    status: "Completed",
    date: "2024-01-14",
  },
  {
    id: "TXN003",
    user: "Mike Davis",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    amount: "$9.99",
    method: "Stripe",
    status: "Pending",
    date: "2024-01-14",
  },
  {
    id: "TXN004",
    user: "Emily Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    amount: "$149.99",
    method: "Credit Card",
    status: "Failed",
    date: "2024-01-13",
  },
  {
    id: "TXN005",
    user: "David Brown",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    amount: "$89.99",
    method: "PayPal",
    status: "Completed",
    date: "2024-01-13",
  },
]

export function TransactionsTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filtered = transactions.filter(
    (txn) =>
      txn.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.user.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "badge-success"
      case "Pending":
        return "badge-warning"
      case "Failed":
        return "badge-destructive"
      default:
        return "badge-info"
    }
  }

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{filtered.length} transactions</p>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-lg"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border">
                <TableHead>Transaction ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((txn) => (
                <TableRow key={txn.id} className="border-b border-border hover:bg-secondary/30">
                  <TableCell className="font-mono text-sm">{txn.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={txn.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{txn.user.split(" ")[0][0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{txn.user}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold">{txn.amount}</TableCell>
                  <TableCell className="text-sm">{txn.method}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(txn.status)}>{txn.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right text-sm text-muted-foreground">{txn.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

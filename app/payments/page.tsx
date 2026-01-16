"use client"
import { AdminLayout } from "@/components/layout/admin-layout"
import { PageHeader } from "@/components/common/page-header"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { StatsCard } from "@/components/common/stats-card"
import { DollarSign, TrendingUp, Users, CreditCard } from "lucide-react"
import { TransactionsTable } from "@/components/payments/transactions-table"
import { SubscriptionPlans } from "@/components/payments/subscription-plans"
import { motion } from "framer-motion"

export default function PaymentsPage() {
  return (
    <AdminLayout>
      <div className="p-8 space-y-8">
        <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Payments" }]} />

        <PageHeader
          title="Payments & Subscriptions"
          description="Monitor revenue, transactions, and subscription metrics"
        />

        {/* Revenue Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <StatsCard
              title="Total Revenue"
              value="$245,380"
              change={18}
              icon={<DollarSign className="w-6 h-6" />}
              trend="up"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <StatsCard
              title="Monthly Revenue"
              value="$45,231"
              change={12}
              icon={<TrendingUp className="w-6 h-6" />}
              trend="up"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <StatsCard
              title="Active Subscriptions"
              value="3,421"
              change={8}
              icon={<Users className="w-6 h-6" />}
              trend="up"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <StatsCard
              title="Failed Transactions"
              value="12"
              change={-5}
              icon={<CreditCard className="w-6 h-6" />}
              trend="down"
            />
          </motion.div>
        </motion.div>

        {/* Subscription Plans */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <SubscriptionPlans />
        </motion.div>

        {/* Transactions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <TransactionsTable />
        </motion.div>
      </div>
    </AdminLayout>
  )
}

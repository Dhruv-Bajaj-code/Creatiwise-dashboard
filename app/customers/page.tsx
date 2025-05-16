import { Suspense } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { DataTable } from "@/components/data-table"
import { columns } from "@/components/columns"
import { TableSkeleton } from "@/components/table-skeleton"

export default function CustomersPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Customers" text="Manage your customer relationships and data." />
      <Suspense fallback={<TableSkeleton />}>
        <DataTable columns={columns} />
      </Suspense>
    </DashboardShell>
  )
}

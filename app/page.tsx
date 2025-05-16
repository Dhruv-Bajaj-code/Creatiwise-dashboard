import { Suspense } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { DataTable } from "@/components/data-table"
import { columns } from "@/components/columns"
import { TableSkeleton } from "@/components/table-skeleton"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Manage your business data and analytics." />
      <Suspense fallback={<TableSkeleton />}>
        <DataTable columns={columns} />
      </Suspense>
    </DashboardShell>
  )
}

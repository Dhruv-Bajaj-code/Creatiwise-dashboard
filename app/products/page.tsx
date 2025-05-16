import { Suspense } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { DataTable } from "@/components/data-table"
import { productColumns } from "@/components/product-columns"
import { TableSkeleton } from "@/components/table-skeleton"

export default function ProductsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Products" text="Manage your product inventory and details." />
      <Suspense fallback={<TableSkeleton />}>
        <DataTable columns={productColumns} />
      </Suspense>
    </DashboardShell>
  )
}

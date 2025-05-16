import { TableSkeleton } from "@/components/table-skeleton"
import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"

export default function Loading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Loading..." text="Please wait while we fetch your data." />
      <TableSkeleton />
    </DashboardShell>
  )
}

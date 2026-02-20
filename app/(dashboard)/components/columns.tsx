import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { DashboardTableRow } from "./DashboardTable"

export const columns: ColumnDef<DashboardTableRow>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Header",
    header: "Header",
  },
  {
    accessorKey: "SectionType",
    header: "Section Type",
    cell: ({ row }) => (
      <Badge variant="outline">{row.getValue("SectionType")}</Badge>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant="outline"
          className={`${
            status === "Done"
              ? " bg-green-500/20 text-green-600 border border-green-500/40 backdrop-blur-sm"
              : status === "In Progress"
              ? "bg-yellow-500/20 text-yellow-600 border border-yellow-500/40 backdrop-blur-sm"
              : "bg-red-500/20 text-red-600 border border-red-500/40 backdrop-blur-sm"
          }
              `
          }
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "Target",
    header: "Target",
  },
  {
    accessorKey: "Limit",
    header: "Limit",
  },
  {
    accessorKey: "Reviewer",
    header: "Reviewer",
  },
]
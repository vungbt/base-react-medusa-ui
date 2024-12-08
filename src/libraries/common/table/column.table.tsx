import { clx } from "@medusajs/ui"
import { TableColumn } from "./table"

type ColumnTableProps<T> = {
  row: T
  render: TableColumn<T>["render"]
  index: number
  rowIndex: number
  totalColumns?: number
  align?: "center" | "start" | "end"
}
export function ColumnTable<T>({
  row,
  render,
  rowIndex,
  index,
  totalColumns = 0,
  align = "start",
}: ColumnTableProps<T>) {
  const renderCell = () => {
    if (typeof render === "string") {
      return <>{row[render] as string}</>
    }
    return render(row, rowIndex)
  }

  return (
    <td
      className={clx("py-2 text-left", {
        "pr-3": index !== totalColumns - 1,
        "pr-6": index === totalColumns - 1,
        "text-center": align === "center",
        "text-start": align === "start",
        "text-end": align === "end",
      })}
    >
      {renderCell()}
    </td>
  )
}

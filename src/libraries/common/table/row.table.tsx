import clsx from "clsx"
import find from "lodash/find"
import isObject from "lodash/isObject"
import { useMemo } from "react"
import { ColumnTable } from "./column.table"
import { TableColumn } from "./table"
import { Checkbox, RadioGroup } from "@medusajs/ui"

export type RowSelection<T> = {
  type: "checkbox" | "radio"
  selectedRows?: T[] | Extract<keyof T, string>
  selectedRowKey?: string
  onSelect?: (record: T, selectedRows?: T[] | Extract<keyof T, string>) => void
  onSelectAll?: (selectedRows?: T[] | Extract<keyof T, string>) => void
}

export type RowTableProps<T> = {
  row: T
  columns: TableColumn<T>[]
  index: number
  className?: string
  rowSelection?: RowSelection<T>
}

type RowSelectionRender = {
  id?: string
  type: "checkbox" | "radio"
  checked?: boolean
  indeterminate?: boolean
  isHeader?: boolean
  onClick: () => void
}

export default function RowTable<T>(props: RowTableProps<T>) {
  const { row, columns, index, className, rowSelection } = props

  const onHandleClickRowSelection = () => {
    if (!rowSelection) return
    const { onSelect, selectedRows } = rowSelection
    onSelect && onSelect(row, selectedRows)
  }

  const isSelected = useMemo(
    () => getSelected(row, rowSelection),
    [row, rowSelection]
  )
  const isEven = useMemo(() => index % 2, [index])
  return (
    <tr
      className={clsx(
        className,
        "h-12 hover:bg-ui-bg-base-hover transition-all ease-linear",
        {
          "!bg-tertiary": isSelected,
          "bg-ui-bg-subtle": isEven,
          "": !isEven,
        }
      )}
    >
      {rowSelection && (
        <RowSelection
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          id={(row as any)[rowSelection?.selectedRowKey ?? "id"]}
          checked={isSelected}
          type={rowSelection.type}
          onClick={onHandleClickRowSelection}
        />
      )}
      {columns.map((column, columnIndex) => (
        <ColumnTable<T>
          totalColumns={columns.length}
          rowIndex={index}
          index={columnIndex}
          render={column.render}
          key={columnIndex}
          row={row}
          align={column.align}
        />
      ))}
    </tr>
  )
}

export function RowSelection(props: RowSelectionRender) {
  const { type, id, onClick, indeterminate, checked, isHeader } = props

  switch (type) {
    case "checkbox":
      return (
        <td
          className={clsx("pl-6 tracking-wider break-words", {
            "bg-ui-bg-base-hover border-ui-border-base border-b-[2px] border-solid py-[14px]":
              isHeader,
            "pt-5 pb-14px flex": !isHeader,
          })}
        >
          <Checkbox
            id={id}
            name={id}
            onClick={onClick}
            checked={indeterminate ? "indeterminate" : checked}
          />
        </td>
      )
    case "radio":
      return (
        <td
          className={clsx("pl-6 tracking-wider break-words", {
            "bg-ui-bg-base-hover border-ui-border-base border-b-[2px] border-solid py-[14px]":
              isHeader,
            "pt-5 pb-14px flex": !isHeader,
          })}
        >
          {!isHeader ? (
            <RadioGroup>
              <RadioGroup.Item
                checked={checked}
                onClick={onClick}
                value="value"
                id={id}
              />
            </RadioGroup>
          ) : null}
        </td>
      )
  }
}

export function getSelected<T>(row: T, rowSelection?: RowSelection<T>) {
  if (!rowSelection) return false
  const { selectedRows, selectedRowKey } = rowSelection
  let itemSelected = null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const key = (row as any)[selectedRowKey ?? "id"]
  if (!isObject(selectedRows)) {
    itemSelected = find(
      selectedRows,
      (selectedRow) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (selectedRow as any)[key] === key
    )
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    itemSelected = (selectedRows as any)[key]
  }
  if (!itemSelected) return false
  return true
}

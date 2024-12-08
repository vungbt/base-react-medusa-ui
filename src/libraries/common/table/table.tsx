// import Loading from '@/libraries/icons/loading';
import { clx } from "@medusajs/ui"
import clsx from "clsx"
import isObject from "lodash/isObject"
import { useMemo } from "react"
import { Pagination } from "../pagination"
import RowTable, { RowSelection } from "./row.table"
// import { Pagination } from '../pagination';

type ArrayElement<ArrType> = ArrType extends readonly (infer ElementType)[]
  ? ElementType
  : never

export type TableColumn<T> = {
  title: string | JSX.Element
  className?: string
  render: ((row: T, index: number) => JSX.Element) | Extract<keyof T, string>
  width?: string | number
  minWidth?: string | number
  tableId?: string
  align?: "center" | "start" | "end"
}

type TableScrollType = {
  y?: number
  x?: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TableProps<T = any> = {
  rows: T[]
  columns: TableColumn<ArrayElement<TableProps<T>["rows"]>>[]
  className?: string

  total?: number
  limit?: number
  page?: number
  loading?: boolean
  rowSelection?: RowSelection<T>
  scroll?: TableScrollType
  tableId?: string
  customStyles?: {
    wrapTable?: string
  }
  onChangePage?: (page: number) => void
}

export function Table<T>(props: TableProps<T>) {
  const {
    columns,
    rows,
    loading,
    scroll,
    tableId,

    // pagination
    page,
    limit,
    total = 0,
    className,
    customStyles,
    onChangePage,

    rowSelection,
  } = props

  const isSelected = useMemo(
    () => getSelectedAll(rowSelection, total),
    [rowSelection, total]
  )

  return (
    <div className={className}>
      <div
        className={clx(
          "overflow-auto border-b border-solid border-ui-border-base",
          customStyles?.wrapTable
        )}
      >
        <table
          id={tableId}
          style={{
            width: scroll?.x,
          }}
          className={clsx(
            "table-auto border-collapse min-w-full w-full text-sm"
          )}
        >
          {/* table header */}
          <thead>
            <tr className="h-12 font-medium text-text-secondary">
              {/* row selection */}
              {rowSelection && (
                <RowSelection
                  id="all"
                  checked={
                    isSelected.indeterminate ? undefined : isSelected.isSelected
                  }
                  indeterminate={isSelected.indeterminate}
                  isHeader
                  type={rowSelection.type}
                  onClick={() =>
                    rowSelection.onSelectAll &&
                    rowSelection.onSelectAll(rowSelection.selectedRows)
                  }
                />
              )}
              {/* columns */}
              {columns.map((column, index) => (
                <td
                  key={index}
                  className={clsx(
                    "py-[14px] text-left border-b-[2px] border-solid border-ui-border-base tracking-wider break-words relative bg-ui-bg-base-hover font-bold",
                    {
                      "pr-3": index !== columns.length - 1,
                      "pr-6": index === columns.length - 1,
                      "text-center": column.align === "center",
                      "text-start": column.align === "start",
                      "text-end": column.align === "end",
                    }
                  )}
                >
                  {
                    <span className="text-[13px] leading-5 block">
                      {column.title}
                    </span>
                  }

                  {/* border */}
                  <div
                    style={{ transform: "translate(0, -50%)" }}
                    className={clsx(
                      "absolute right-0 top-1/2 w-[1px] h-4 bg-text-secondary",
                      {
                        hidden: index === columns.length - 1,
                      }
                    )}
                  ></div>
                </td>
              ))}
            </tr>
          </thead>

          <tbody className="relative">
            {rows.map((record, recordIndex) => (
              <RowTable
                key={recordIndex}
                rowSelection={rowSelection}
                columns={columns}
                row={record}
                index={recordIndex}
              />
            ))}
            {/* loading */}
            {loading && (
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center w-full h-auto">
                Loading...
              </div>
            )}
          </tbody>
        </table>
      </div>
      {onChangePage && (
        <Pagination
          // className="mt-3 float-right"
          total={total}
          limit={limit}
          currentPage={page}
          onChangePage={(page) => onChangePage(page)}
        />
      )}
    </div>
  )
}

export function getSelectedAll<T>(
  rowSelection?: RowSelection<T>,
  totalData?: number
) {
  if (!rowSelection)
    return {
      isSelected: false,
      indeterminate: false,
    }
  const { selectedRows } = rowSelection
  const currentSelected =
    (isObject(selectedRows)
      ? Object.keys(selectedRows).length
      : selectedRows?.length) ?? 0
  if (currentSelected === 0)
    return {
      isSelected: false,
    }
  if (totalData && currentSelected < totalData)
    return {
      indeterminate: true,
    }
  return {
    isSelected: true,
  }
}

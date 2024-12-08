import { clx } from "@medusajs/ui"
import { PAGINATION } from "constant/common"
import { useMemo } from "react"

type PaginationProps = {
  onChangePage: (page: number) => void
  className?: string
  total: number
  currentPage?: number
  limit?: number
}

export const Pagination = ({
  onChangePage,
  className,
  total,
  currentPage = PAGINATION.page,
  limit = PAGINATION.limit,
}: PaginationProps) => {
  const recordFrom = useMemo(
    () => (currentPage === 1 ? 1 : Number(currentPage) * limit),
    [currentPage]
  )
  const recordTo = useMemo(() => {
    const countTo =
      currentPage === 1
        ? Number(currentPage) * limit
        : Number(currentPage) * limit + limit
    if (countTo > total) return total
    return countTo
  }, [currentPage])
  const totalPage = useMemo(() => Math.ceil(total / limit), [total, limit])

  const onHandleChange = (isNext: boolean) => {
    if (isNext && currentPage === totalPage) return
    if (!isNext && currentPage === 1) return
    onChangePage(isNext ? currentPage + 1 : currentPage - 1)
  }

  const renderItemPageFL = (isNext: boolean = true) => {
    return (
      <div
        onClick={() => onHandleChange(isNext)}
        className={clx(
          "flex leading-5 font-medium text-[13px] py-1 px-2 items-center cursor-pointer",
          {
            "text-[#A1A1AA]":
              (currentPage === 1 && !isNext) ||
              (currentPage === totalPage && isNext),
          }
        )}
      >
        {isNext ? "Next" : "Prev"}
      </div>
    )
  }

  return (
    <div
      className={clx(
        "flex items-center justify-between leading-5 font-medium text-[13px] py-2 px-4 text-ui-fg-subtle",
        className
      )}
    >
      <div className="block py-1 px-2">
        {recordFrom} - {recordTo} of {total}
      </div>
      <div className="flex items-center gap-2">
        <span className="block py-1 px-2">
          {currentPage} of {totalPage} pages
        </span>
        {renderItemPageFL(false)}
        {renderItemPageFL()}
      </div>
    </div>
  )
}

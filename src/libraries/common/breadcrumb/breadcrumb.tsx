import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { clsx } from "utils/common"

export type BreadcrumbItem = { title: ReactNode; to?: string }
type BreadcrumbProps = {
  items: BreadcrumbItem[]
  className?: string
}
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <ul className="flex items-center gap-1">
      {items.map((item, index) => {
        const Wrap = item.to && item.to.length > 0 ? Link : "span"
        const lastIndexItem = items.length - 1
        const isLastItem = lastIndexItem === index
        return (
          <li key={index} className="flex items-center text-xsmall font-medium">
            <Wrap
              to={item.to ?? ""}
              className={clsx("flex items-center gap-1", {
                "text-ui-fg-subtle": isLastItem,
                "text-ui-fg-disabled": !isLastItem,
              })}
            >
              <span
                className={clsx({
                  hidden: index === 0,
                })}
              >
                /
              </span>
              {item.title}
            </Wrap>
          </li>
        )
      })}
    </ul>
  )
}

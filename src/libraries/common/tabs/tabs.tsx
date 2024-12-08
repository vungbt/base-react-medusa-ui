import clsx from "clsx"
import { ReactNode } from "react"

export type TabItem = { label: string | ReactNode; value: string }
export type TypeProps = {
  options: TabItem[]
  active?: TabItem
  type?: "line" | "card" | "card-brand"
  onChange?: (item: TabItem) => void
}

export function Tabs({ options, active, type = "line", onChange }: TypeProps) {
  return (
    <ul className="flex items-center gap-2 text-sm" data-testid="tabs">
      {options.map((item) => (
        <li
          onClick={() => onChange && onChange(item)}
          key={item.value}
          className={clsx(
            `tab relative cursor-pointer transition-all ease-linear py-3 px-6 font-medium text-large leading-[20px] text-ui-fg-muted
            before:content-[''] before:absolute before:w-0 before:transition-all before:ease-linear before:h-[2px] before:bottom-0 before:right-0 before:left-0 before:mx-auto`,
            {
              "before:bg-ui-fg-interactive hover:before:w-full":
                type === "line",
              // card type
              "before:hidden bg-neutral bg-opacity-50 rounded hover:bg-brand-100 hover:bg-opacity-50":
                type === "card",
              // card-brand type
              "before:hidden rounded hover:bg-brand-50 text-grey-950":
                type === "card-brand",

              "!text-ui-fg-interactive before:w-full":
                active && item.value === active.value,
              // "!bg-opacity-100":
              //   active && item.value === active.value && type === "card",
              // "!bg-brand-700 !text-neutral":
              //   active && item.value === active.value && type === "card-brand",
            }
          )}
        >
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  )
}

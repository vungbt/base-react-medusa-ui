import { clx, DropdownMenu } from "@medusajs/ui"
import { useCallback } from "react"
import { EStatus } from "types/common"

type ButtonStatusProps = {
  status: EStatus
  options: { label: string; value: EStatus }[]
  onChange: (status: EStatus) => void
}

export function ButtonStatus({ status, options, onChange }: ButtonStatusProps) {
  const text = useCallback(
    (active: EStatus) => {
      switch (active) {
        case EStatus.Active:
          return "active"
        case EStatus.Inactive:
          return "inactive"
        case EStatus.Disable:
          return "disable"
      }
    },
    [status]
  )
  const newOptions = options.filter((item) => item.value !== status)
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <div
          className={clx(
            "flex items-center font-medium cursor-pointer gap-[3px] border border-solid rounded-full w-fit px-[6px] capitalize",
            {
              "bg-ui-tag-green-bg border-ui-tag-green-border":
                status === EStatus.Active,
              "bg-ui-tag-neutral-bg border-ui-tag-neutral-border":
                status !== EStatus.Active,
            }
          )}
        >
          <span
            className={clx("text-[12px] leading-5", {
              "text-ui-tag-green-text": status === EStatus.Active,
              "text-ui-tag-neutral-text": status !== EStatus.Active,
            })}
          >
            {text(status)}
          </span>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={clx({
              "text-ui-tag-green-icon": status === EStatus.Active,
              "text-ui-tag-neutral-icon": status !== EStatus.Active,
            })}
          >
            <path
              d="M6.96291 2.81494L3.99995 5.7779L1.03699 2.81494"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-fit min-w-fit">
        {newOptions.map((item, index) => {
          return (
            <DropdownMenu.Item className="w-fit" key={index}>
              <button
                onClick={() => onChange(item.value)}
                className={clx({
                  "text-ui-tag-green-text": status !== EStatus.Active,
                  "text-ui-tag-neutral-text": status === EStatus.Active,
                })}
              >
                {item.label}
              </button>
            </DropdownMenu.Item>
          )
        })}
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

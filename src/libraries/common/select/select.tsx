import { MedusaSelect } from "libraries/medusa"
import { ReactNode } from "react"
import { OptionsItem } from "types/common"
import { clsx } from "utils/common"

type SelectProps = {
  placeholder?: string
  options: OptionsItem[]
  onBlur?: any
  value?: any
  disabled?: boolean
  label?: ReactNode
  name?: string
  id?: string
  size?: "small" | "base" | "large"
  error?: string
  isShowError?: boolean
  className?: string
  onChange: (...event: any) => void
}
export function Select({
  placeholder,
  options = [],
  label,
  error,
  isShowError,
  className,
  size = "large",
  onChange,
  ...reset
}: SelectProps) {
  const isError = (error && error?.length > 0) || isShowError || false
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={reset.id ?? reset.name}
          className={clsx(
            "text-ui-fg-base text-small leading-5 mb-1 block w-fit"
          )}
        >
          {label}
        </label>
      )}
      <MedusaSelect
        {...reset}
        name={reset.name}
        size={size !== "large" ? size : undefined}
        onValueChange={(val: string) => {
          onChange?.(val) // Trigger onChange if provided
        }}
      >
        <MedusaSelect.Trigger
          className={clsx(
            "custom-select shadow-none border border-solid border-ui-border-base bg-ui-fg-on-color w-full",
            {
              "text-small h-10 py-[10px]": size === "large",
            },
            className
          )}
        >
          <MedusaSelect.Value
            aria-invalid={isError}
            placeholder={placeholder}
          />
        </MedusaSelect.Trigger>
        <MedusaSelect.Content>
          {options.map((item) => (
            <MedusaSelect.Item key={item.value} value={item.value}>
              {item.label}
            </MedusaSelect.Item>
          ))}
        </MedusaSelect.Content>
      </MedusaSelect>
      {error && <p className="mt-1 text-ui-tag-red-text text-small">{error}</p>}
    </div>
  )
}

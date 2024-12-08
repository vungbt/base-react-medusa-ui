import { clsx } from "utils/common"
import { Input, InputProps } from "./input"

type InputRangeProps = {
  label?: string
  error?: string
  className?: string
  fieldTo: InputProps
  fieldForm: InputProps
}
export function InputRange({
  error,
  label,
  fieldForm,
  className,
  fieldTo,
}: InputRangeProps) {
  return (
    <div className={clsx("w-full", className)}>
      {label && (
        <label
          htmlFor={fieldForm.id ?? fieldForm.name ?? fieldTo.id ?? fieldTo.name}
          className={clsx(
            "text-ui-fg-base text-small leading-5 mb-1 block w-fit"
          )}
        >
          {label}
        </label>
      )}

      <div className="flex items-center gap-2">
        <Input {...fieldTo} />
        <span>-</span>
        <Input {...fieldForm} />
      </div>

      {error && <p className="mt-1 text-ui-tag-red-text text-small">{error}</p>}
    </div>
  )
}

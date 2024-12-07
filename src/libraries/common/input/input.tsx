"use client"
import { IconName } from "libraries/icons"
import { MedusaInput } from "libraries/medusa"
import { ReactNode, Ref, forwardRef } from "react"
import { clsx } from "utils/common"

type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size"
> & {
  label?: ReactNode
  icon?: IconName
  rightIcon?: IconName
  loading?: boolean
  error?: string
  size?: "small" | "base" | "large"
  customClass?: {
    root?: string
    field?: string
    icon?: string
  }
}

export const Input = forwardRef(function Input(
  props: InputProps,
  ref: Ref<HTMLInputElement>
) {
  const {
    icon,
    rightIcon,
    loading,
    disabled,
    label,
    size = "large",
    customClass,
    error,
    className,
    ...reset
  } = props
  const isError = (error && error?.length > 0) || false

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
      <MedusaInput
        ref={ref}
        size={size !== "large" ? size : undefined}
        id={reset.id ?? reset.name}
        aria-invalid={isError}
        className={clsx(
          "custom-input shadow-none border border-solid border-ui-border-base bg-ui-fg-on-color w-full",
          {
            "text-small h-10 py-[10px]": size === "large",
          },
          className
        )}
        {...reset}
      />
      {error && <p className="mt-1 text-ui-tag-red-text text-small">{error}</p>}
    </div>
  )
})

"use client"
import { IconName } from "libraries/icons"
import { MedusaTextarea } from "libraries/medusa"
import { ReactNode, Ref, forwardRef } from "react"
import { clsx } from "utils/common"

export type TextareaProps = Omit<
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "size"
> & {
  label?: ReactNode
  icon?: IconName
  rightIcon?: IconName
  loading?: boolean
  error?: string
  isShowError?: boolean
  size?: "small" | "base" | "large"
  customClass?: {
    root?: string
    field?: string
    icon?: string
  }
}

export const Textarea = forwardRef(function Textarea(
  props: TextareaProps,
  ref: Ref<HTMLTextAreaElement>
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
    isShowError,
    className,
    ...reset
  } = props
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
      <MedusaTextarea
        ref={ref}
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

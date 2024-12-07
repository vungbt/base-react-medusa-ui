"use client"
import { MedusaIconButton } from "libraries/medusa"
import React, { Ref, forwardRef } from "react"
import { clsx } from "utils/common"

export type IconButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  isLoading?: boolean
  size?: "small" | "base" | "large" | "xlarge"
  variant?: "primary" | "transparent"
  customClass?: {
    icon?: string
  }
}

export const IconButton = forwardRef(function IconButtonBase(
  props: IconButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  const {
    className,
    variant = "primary",
    isLoading,
    size = "small",
    disabled,
    customClass,
    children,
    ...reset
  } = props

  return (
    <MedusaIconButton
      variant={variant}
      ref={ref}
      size={size}
      disabled={isLoading}
      className={clsx(
        {
          "shadow-non": variant === "primary",
          "bg-transparent": variant === "transparent",
          "rounded-lg text-medium font-medium text-contrast-fg-primary-88":
            size === "large",
        },
        className
      )}
      {...reset}
    >
      {children}
    </MedusaIconButton>
  )
})

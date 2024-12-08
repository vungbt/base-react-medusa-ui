"use client"
import { IconName, RenderIcon } from "libraries/icons"
import { MedusaButton } from "libraries/medusa"
import React, { ReactNode, Ref, forwardRef } from "react"
import { clsx } from "utils/common"

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "children"
> & {
  icon?: IconName
  leftIcon?: IconName
  isLoading?: boolean
  text: ReactNode
  size?: "small" | "base" | "large" | "xlarge"
  variant?: "primary" | "transparent" | "secondary" | "danger"
  styles?: "default" | "outline"
  customClass?: {
    icon?: string
  }
}

export const Button = forwardRef(function ButtonBase(
  props: ButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  const {
    className,
    text,
    icon,
    variant = "primary",
    leftIcon,
    isLoading,
    size = "large",
    styles,
    disabled,
    ...reset
  } = props

  return (
    <MedusaButton
      variant={variant}
      ref={ref}
      size={size}
      disabled={isLoading}
      className={clsx(
        {
          "shadow-non": variant === "primary",
          "rounded-lg text-medium font-medium": size === "large",
          "text-contrast-fg-primary-88": variant === "primary",
          "text-ui-button-inverted-secondary": variant === "secondary",
          "border border-solid border-ui-fg-interactive bg-white text-ui-fg-interactive hover:text-white box-border":
            styles === "outline",
        },
        className
      )}
      {...reset}
    >
      {leftIcon && (
        <RenderIcon name={leftIcon} className="inline-block !w-4 !h-4" />
      )}
      {text}
      {(icon || isLoading) && (
        <RenderIcon
          name={isLoading ? "loading" : icon}
          className="inline-block !w-4 !h-4"
        />
      )}
    </MedusaButton>
  )
})

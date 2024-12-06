import React, { forwardRef } from "react"

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        // className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2`}
      >
        {children}
      </button>
    )
  }
)

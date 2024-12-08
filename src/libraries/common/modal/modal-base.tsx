import Dialog from "rc-dialog"
import { ReactNode } from "react"
import { clsx } from "utils/common"
import { IconButton } from "../button"
import { RenderIcon } from "libraries/icons"
import "rc-dialog/assets/index.css" // Default styles

export type ModalBaseProps = {
  isOpen?: boolean
  className?: string
  title?: string
  children?: ReactNode
  customStyles?: {
    header?: string
    body?: string
  }
  onClose?: () => void
}
export function ModalBase({
  onClose,
  className,
  title,
  children,
  isOpen,
  customStyles,
}: ModalBaseProps) {
  return (
    <Dialog
      onClose={onClose}
      visible={isOpen}
      maskAnimation="fade"
      animation="zoom"
      className={clsx("custom-dialog", className)}
    >
      {/* header */}
      <div
        className={clsx(
          "py-4 px-6 border-b-[2px] border-solid border-ui-border-base flex items-center justify-between gap-2 max-h-[60px]",
          customStyles?.header
        )}
      >
        <p className="text-ui-fg-base text-lg font-medium leading-7">{title}</p>
        <div className="flex items-center gap-2 ">
          <span className="event-none text-ui-fg-subtle text-xs font-medium border border-solid border-ui-border-base block w-fit px-1 rounded h-4 leading-3 bg-ui-bg-field pb-1">
            esc
          </span>
          <IconButton
            onClick={onClose}
            variant="transparent"
            className="text-ui-fg-subtle p-[6.5px] w-fit h-fit"
          >
            <RenderIcon name="x-mark" className="!w-[15px] !h-[15px]" />
          </IconButton>
        </div>
      </div>

      {/* content */}
      {children}
    </Dialog>
  )
}

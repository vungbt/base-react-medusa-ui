import { clsx } from "utils/common"
import { IconProps } from "."

export default function ChevronLeft({
  className,
  transform,
  ...reset
}: Readonly<IconProps>) {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("h-6 w-6", className)}
      transform={transform}
      {...reset}
    >
      <g clipPath="url(#chevron_left_icon)">
        <g clipPath="url(#chevron_left_icon_1)">
          <path
            d="M9.7223 13.5554L4.16675 7.99989L9.7223 2.44434"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="chevron_left_icon">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
        <clipPath id="chevron_left_icon_1">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(-0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

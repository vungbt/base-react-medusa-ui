import { clsx } from "utils/common"
import { IconProps } from "."

export default function ChevronLeft1({
  className,
  transform,
  ...reset
}: Readonly<IconProps>) {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("h-6 w-6", className)}
      transform={transform}
      {...reset}
    >
      <g clipPath="url(#chevron-left-1)">
        <path
          d="M9.80543 13.0554L4.24988 7.49989L9.80543 1.94434"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="chevron-left-1">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(-0.416748 -0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

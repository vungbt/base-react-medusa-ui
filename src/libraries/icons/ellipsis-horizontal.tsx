import { clsx } from "utils/common"
import { IconProps } from "."

export default function EllipsisHorizontal({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.30566 8.00011C6.30566 7.34044 6.84044 6.80566 7.50011 6.80566C8.15978 6.80566 8.69455 7.34044 8.69455 8.00011C8.69455 8.65978 8.15978 9.19455 7.50011 9.19455C6.84044 9.19455 6.30566 8.65978 6.30566 8.00011Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.19434 8.00011C1.19434 7.34044 1.72911 6.80566 2.38878 6.80566C3.04845 6.80566 3.58322 7.34044 3.58322 8.00011C3.58322 8.65978 3.04845 9.19455 2.38878 9.19455C1.72911 9.19455 1.19434 8.65978 1.19434 8.00011Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4167 8.00011C11.4167 7.34044 11.9515 6.80566 12.6112 6.80566C13.2709 6.80566 13.8056 7.34044 13.8056 8.00011C13.8056 8.65978 13.2709 9.19455 12.6112 9.19455C11.9515 9.19455 11.4167 8.65978 11.4167 8.00011Z"
        fill="currentColor"
      />
    </svg>
  )
}

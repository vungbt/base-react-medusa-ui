import { clsx } from "utils/common"
import { IconProps } from "."

export default function Trash({
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
      <path
        d="M2.02771 3.27783H13.1388"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.58325 3.27776V1.94443C5.58325 1.45376 5.98147 1.05554 6.47214 1.05554H8.69436C9.18503 1.05554 9.58325 1.45376 9.58325 1.94443V3.27776"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8055 5.5V12.1667C11.8055 13.1489 11.01 13.9444 10.0278 13.9444H5.13886C4.15664 13.9444 3.36108 13.1489 3.36108 12.1667V5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.02771 7.27783V11.2778"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.13879 7.27783V11.2778"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

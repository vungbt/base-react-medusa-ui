import { clsx } from "utils/common"
import { IconProps } from "."

export default function Spinner({
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
      className={clsx("h-6 w-6 animate-spin", className)}
      transform={transform}
      {...reset}
    >
      <g clipPath="url(#spinner_icon)">
        <path
          d="M7.74988 1.05554V3.27776"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.88"
          d="M12.3072 2.94269L10.7356 4.51424"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.75"
          d="M14.1944 7.5H11.9722"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.63"
          d="M12.3072 12.0573L10.7356 10.4858"
          stroke="#18181B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.5"
          d="M7.74988 13.9445V11.7222"
          stroke="#18181B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.38"
          d="M3.19263 12.0573L4.76418 10.4858"
          stroke="#18181B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.25"
          d="M1.30542 7.5H3.52764"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.13"
          d="M3.19263 2.94269L4.76418 4.51424"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="spinner_icon">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(0.083252)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

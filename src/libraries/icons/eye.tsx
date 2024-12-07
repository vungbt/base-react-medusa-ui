import { clsx } from "utils/common"
import { IconProps } from "."

export default function Eye({
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
      <g clipPath="url(#eye_icon)">
        <path
          d="M1.43928 8.50618C1.03928 7.89906 1.03928 7.09995 1.43928 6.49284C2.34417 5.12129 4.33884 2.8324 7.58328 2.8324C10.8277 2.8324 12.8233 5.1204 13.7273 6.49284C14.1273 7.09995 14.1273 7.89906 13.7273 8.50618C12.8224 9.87773 10.8277 12.1666 7.58328 12.1666C4.33884 12.1666 2.34328 9.87862 1.43928 8.50618Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.58324 9.94443C8.93327 9.94443 10.0277 8.85002 10.0277 7.49999C10.0277 6.14996 8.93327 5.05554 7.58324 5.05554C6.23321 5.05554 5.13879 6.14996 5.13879 7.49999C5.13879 8.85002 6.23321 9.94443 7.58324 9.94443Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="eye_ico      n">
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

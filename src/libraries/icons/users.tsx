import { clsx } from "utils/common"
import { IconProps } from "."

export default function Users({
  className,
  transform,
  ...reset
}: Readonly<IconProps>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("h-6 w-6", className)}
      transform={transform}
      {...reset}
    >
      <g clipPath="url(#users_icon)">
        <path
          d="M5.20147 7.35411C6.15263 7.35411 6.92369 6.58305 6.92369 5.63189C6.92369 4.68073 6.15263 3.90967 5.20147 3.90967C4.25031 3.90967 3.47925 4.68073 3.47925 5.63189C3.47925 6.58305 4.25031 7.35411 5.20147 7.35411Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.52445 13.2717C8.97481 13.121 9.23917 12.6311 9.07211 12.1876C8.48225 10.6221 6.97445 9.50781 5.20228 9.50781C3.43011 9.50781 1.92231 10.6221 1.33245 12.1876C1.16539 12.6319 1.42975 13.1219 1.88011 13.2717C2.7085 13.5481 3.84431 13.8125 5.20314 13.8125C6.56197 13.8125 7.69692 13.5481 8.52445 13.2717Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5833 5.20128C11.5345 5.20128 12.3055 4.43022 12.3055 3.47906C12.3055 2.5279 11.5345 1.75684 10.5833 1.75684C9.63215 1.75684 8.86108 2.5279 8.86108 3.47906C8.86108 4.43022 9.63215 5.20128 10.5833 5.20128Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.2283 11.6399C12.3029 11.5736 13.2123 11.3505 13.9055 11.1189C14.3558 10.9682 14.6202 10.4782 14.4531 10.0348C13.8633 8.46926 12.3555 7.35498 10.5833 7.35498C9.74198 7.35498 8.9601 7.60642 8.30737 8.03784"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="users_icon">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

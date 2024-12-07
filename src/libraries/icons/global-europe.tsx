import { clsx } from "utils/common"
import { IconProps } from "."

export default function GlobalEurope({
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
      <g clipPath="url(#global_europe_icon)">
        <path
          d="M5.12971 8.78822C5.0906 8.73044 4.36971 7.61222 4.91638 6.49933C4.97593 6.37755 5.3466 5.65578 6.11104 5.44333C7.2426 5.12955 8.06926 6.26022 8.60438 5.91889C9.2026 5.53755 8.36438 4.00244 9.05504 3.13755C9.58126 2.47889 10.7404 2.52778 11.6177 2.66555"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.12988 8.78835C6.54233 8.39812 7.45077 8.58923 8.0561 8.9439C8.89077 9.43279 8.95033 10.1155 9.66677 10.2497C10.7005 10.4435 11.3059 9.15901 12.2223 9.33323C12.6481 9.41412 13.1663 9.81501 13.6161 11.1617"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.64538 14.4266C7.77694 13.9119 7.85338 13.2328 7.50049 12.7039C7.12449 12.1395 6.59294 12.2444 6.23649 11.6532C5.86494 11.0364 6.24894 10.5999 5.97249 9.83369C5.71294 9.11458 5.11827 8.79014 4.67205 8.46391C3.92894 7.9208 3.00627 6.94302 2.28271 5.03369"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.00011 14.4446C11.5593 14.4446 14.4446 11.5593 14.4446 8.00011C14.4446 4.44094 11.5593 1.55566 8.00011 1.55566C4.44094 1.55566 1.55566 4.44094 1.55566 8.00011C1.55566 11.5593 4.44094 14.4446 8.00011 14.4446Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="global_europe_icon">
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

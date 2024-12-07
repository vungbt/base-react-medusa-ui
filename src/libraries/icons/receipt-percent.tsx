import { clsx } from "utils/common"
import { IconProps } from "."

export default function ReceiptPercent({
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
      <g clipPath="url(#receipt_percent_icon)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.33344 2.09277C1.86795 2.09277 0.805664 3.3814 0.805664 4.80759V6.2812C0.805664 6.69541 1.14145 7.0312 1.55566 7.0312C1.93156 7.0312 2.36122 7.39257 2.36122 8.00041C2.36122 8.60824 1.93156 8.96962 1.55566 8.96962C1.14145 8.96962 0.805664 9.3054 0.805664 9.71962V11.1932C0.805664 12.6194 1.86795 13.908 3.33344 13.908H12.6668C14.1323 13.908 15.1946 12.6194 15.1946 11.1932V9.71962C15.1946 9.3054 14.8588 8.96962 14.4446 8.96962C14.0687 8.96962 13.639 8.60824 13.639 8.00041C13.639 7.39257 14.0687 7.0312 14.4446 7.0312C14.8588 7.0312 15.1946 6.69541 15.1946 6.2812V4.80759C15.1946 3.3814 14.1323 2.09277 12.6668 2.09277H3.33344ZM2.30566 4.80759C2.30566 4.06462 2.83449 3.59277 3.33344 3.59277H12.6668C13.1657 3.59277 13.6946 4.06462 13.6946 4.80759V5.66216C12.7582 6.00328 12.139 6.96489 12.139 8.00041C12.139 9.03592 12.7582 9.99754 13.6946 10.3387V11.1932C13.6946 11.9362 13.1657 12.408 12.6668 12.408H3.33344C2.83449 12.408 2.30566 11.9362 2.30566 11.1932V10.3387C3.24203 9.99754 3.86122 9.03592 3.86122 8.00041C3.86122 6.96489 3.24203 6.00328 2.30566 5.66216V4.80759ZM10.5305 5.46991C10.8233 5.76281 10.8233 6.23768 10.5305 6.53057L6.53045 10.5306C6.23756 10.8235 5.76269 10.8235 5.46979 10.5306C5.1769 10.2377 5.1769 9.76281 5.46979 9.46991L9.46979 5.46991C9.76268 5.17702 10.2376 5.17702 10.5305 5.46991ZM7.11127 6.22238C7.11127 6.7133 6.7133 7.11127 6.22238 7.11127C5.73147 7.11127 5.3335 6.7133 5.3335 6.22238C5.3335 5.73147 5.73147 5.3335 6.22238 5.3335C6.7133 5.3335 7.11127 5.73147 7.11127 6.22238ZM10.6668 9.77805C10.6668 10.269 10.2688 10.6669 9.77793 10.6669C9.28701 10.6669 8.88904 10.269 8.88904 9.77805C8.88904 9.28713 9.28701 8.88916 9.77793 8.88916C10.2688 8.88916 10.6668 9.28713 10.6668 9.77805Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="receipt_percent_icon">
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

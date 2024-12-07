import { clsx } from "utils/common"
import { IconProps } from "."

export default function Calendar({
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
      <g clipPath="url(#calendar_id  )">
        <path
          d="M7.11108 9.11106C7.11108 8.62128 7.5102 8.22217 7.99997 8.22217C8.48975 8.22217 8.88886 8.62128 8.88886 9.11106C8.88886 9.60083 8.48975 9.99995 7.99997 9.99995C7.5102 9.99995 7.11108 9.60083 7.11108 9.11106Z"
          fill="currentColor"
        />
        <path
          d="M11.1111 9.99995C11.6009 9.99995 12 9.60083 12 9.11106C12 8.62128 11.6009 8.22217 11.1111 8.22217C10.6213 8.22217 10.2222 8.62128 10.2222 9.11106C10.2222 9.60083 10.6213 9.99995 11.1111 9.99995Z"
          fill="currentColor"
        />
        <path
          d="M7.11108 11.7778C7.11108 11.288 7.5102 10.8889 7.99997 10.8889C8.48975 10.8889 8.88886 11.288 8.88886 11.7778C8.88886 12.2676 8.48975 12.6667 7.99997 12.6667C7.5102 12.6667 7.11108 12.2676 7.11108 11.7778Z"
          fill="currentColor"
        />
        <path
          d="M4.88889 10.8889C4.39911 10.8889 4 11.288 4 11.7778C4 12.2676 4.39911 12.6667 4.88889 12.6667C5.37867 12.6667 5.77778 12.2676 5.77778 11.7778C5.77778 11.288 5.37867 10.8889 4.88889 10.8889Z"
          fill="currentColor"
        />
        <path
          d="M10.2222 11.7778C10.2222 11.288 10.6213 10.8889 11.1111 10.8889C11.6009 10.8889 12 11.288 12 11.7778C12 12.2676 11.6009 12.6667 11.1111 12.6667C10.6213 12.6667 10.2222 12.2676 10.2222 11.7778Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.11108 0.805664C5.5253 0.805664 5.86108 1.14145 5.86108 1.55566V2.58325H10.1389V1.55566C10.1389 1.14145 10.4747 0.805664 10.8889 0.805664C11.3031 0.805664 11.6389 1.14145 11.6389 1.55566V2.58325H12.2222C13.6183 2.58325 14.75 3.71498 14.75 5.11103V12.6666C14.75 14.0626 13.6183 15.1944 12.2222 15.1944H3.77778C2.38172 15.1944 1.25 14.0626 1.25 12.6666V5.11103C1.25 3.71498 2.38172 2.58325 3.77778 2.58325H4.36108V1.55566C4.36108 1.14145 4.69687 0.805664 5.11108 0.805664ZM13.25 5.11103V5.69458H2.75V5.11103C2.75 4.5434 3.21015 4.08325 3.77778 4.08325H5.09404L5.11108 4.08344L5.12812 4.08325H10.8719L10.8889 4.08344L10.906 4.08325H12.2222C12.7898 4.08325 13.25 4.5434 13.25 5.11103ZM13.25 7.19458H2.75V12.6666C2.75 13.2342 3.21015 13.6944 3.77778 13.6944H12.2222C12.7898 13.6944 13.25 13.2342 13.25 12.6666V7.19458Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="calendar_id  ">
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

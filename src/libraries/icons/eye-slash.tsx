import { clsx } from "utils/common"
import { IconProps } from "."

export default function EyeSlash({
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
      <g clipPath="url(#eye_slash_icon)">
        <path
          d="M13.0281 5.36401C13.3846 5.76401 13.6726 6.15601 13.8939 6.4929C14.2939 7.10001 14.2939 7.89912 13.8939 8.50624C12.989 9.87779 10.9944 12.1667 7.74992 12.1667C7.26192 12.1667 6.80236 12.1151 6.37036 12.0227"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.15524 11.0946C2.94991 10.316 2.10902 9.26973 1.60591 8.50618C1.20591 7.89906 1.20591 7.09995 1.60591 6.49284C2.5108 5.12129 4.50546 2.8324 7.74991 2.8324C9.18991 2.8324 10.3837 3.28306 11.3446 3.9044"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.0423 8.34973C9.79517 9.0164 9.26628 9.54529 8.59961 9.7924"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.02098 9.22888C5.57831 8.78621 5.30542 8.17554 5.30542 7.49999C5.30542 6.14976 6.39964 5.05554 7.74986 5.05554C8.42453 5.05554 9.03609 5.32932 9.47875 5.7711"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.52771 13.7223L13.9722 1.27783"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="eye_slash_icon">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(0.249878)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

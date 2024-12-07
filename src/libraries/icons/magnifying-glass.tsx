import { clsx } from "utils/common"
import { IconProps } from "."

export default function MagnifyingGlass({
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
      <path
        d="M13.5555 13.5557L10.031 10.0312"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.88878 11.3332C9.34338 11.3332 11.3332 9.34338 11.3332 6.88878C11.3332 4.43418 9.34338 2.44434 6.88878 2.44434C4.43418 2.44434 2.44434 4.43418 2.44434 6.88878C2.44434 9.34338 4.43418 11.3332 6.88878 11.3332Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

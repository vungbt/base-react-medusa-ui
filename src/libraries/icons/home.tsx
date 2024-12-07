import { clsx } from "utils/common"
import { IconProps } from "."

export default function Home({
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
        d="M13.2043 5.5112L8.53767 1.96454C8.21945 1.72276 7.77945 1.72276 7.46211 1.96454L2.79545 5.5112C2.57411 5.6792 2.44434 5.94143 2.44434 6.21965V12.6676C2.44434 13.6499 3.23989 14.4454 4.22211 14.4454H6.44434V10.8899C6.44434 10.3992 6.84256 10.001 7.33322 10.001H8.66656C9.15722 10.001 9.55545 10.3992 9.55545 10.8899V14.4454H11.7777C12.7599 14.4454 13.5554 13.6499 13.5554 12.6676V6.21876C13.5554 5.94054 13.4257 5.68009 13.2043 5.5112Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

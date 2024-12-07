import { clsx } from "utils/common"

type LogoProps = {
  className?: string
}
export function Logo({ className }: LogoProps) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, "text-primary")}
    >
      <path
        d="M9.54541 16.8181L16.8181 9.54541H24.0909V16.8181H16.8181V24.0909H9.54541V16.8181Z"
        fill="currentColor"
      />
      <path
        d="M15.4546 8.18186L8.18186 15.4546L0.909136 15.4546L0.909135 8.18186L8.18186 8.18186L8.18186 0.909136L15.4546 0.909136L15.4546 8.18186Z"
        fill="currentColor"
      />
      <circle cx="20.909" cy="4.09091" r="4.09091" fill="currentColor" />
      <circle cx="4.09091" cy="20.909" r="4.09091" fill="currentColor" />
    </svg>
  )
}

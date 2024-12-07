import { clsx } from "utils/common"
import { IconProps } from "."

export default function MoneyBag({
  className,
  transform,
  ...reset
}: Readonly<IconProps>) {
  return (
    <svg
      width="28"
      height="32"
      viewBox="0 0 28 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("h-6 w-6", className)}
      transform={transform}
      {...reset}
    >
      <g filter="url(#filter0_d_293_56258)">
        <path
          d="M17.0077 2.56245C15.6857 2.19687 14.3499 2 12.9999 2C11.65 2 10.3141 2.19687 8.99214 2.56245C8.5563 2.68906 8.35923 3.19527 8.58428 3.58906L10.8342 7.42808C10.9891 7.6812 11.2843 7.82188 11.5655 7.76558C12.0437 7.6812 12.5216 7.625 12.9999 7.625C13.4782 7.625 13.9561 7.6812 14.4343 7.76558C14.7296 7.82188 15.0249 7.6812 15.1656 7.42808L17.4155 3.58906C17.6406 3.19527 17.4435 2.68906 17.0077 2.56245Z"
          fill="url(#paint0_linear_293_56258)"
        />
        <path
          d="M17.0077 2.56245C15.6857 2.19687 14.3499 2 12.9999 2C11.65 2 10.3141 2.19687 8.99214 2.56245C8.5563 2.68906 8.35923 3.19527 8.58428 3.58906L10.8342 7.42808C10.9891 7.6812 11.2843 7.82188 11.5655 7.76558C12.0437 7.6812 12.5216 7.625 12.9999 7.625C13.4782 7.625 13.9561 7.6812 14.4343 7.76558C14.7296 7.82188 15.0249 7.6812 15.1656 7.42808L17.4155 3.58906C17.6406 3.19527 17.4435 2.68906 17.0077 2.56245Z"
          fill="url(#paint1_linear_293_56258)"
        />
        <path
          d="M15.7139 6.65469C14.8 6.35933 13.8999 6.21875 12.9999 6.21875C12.0719 6.21875 11.1718 6.37344 10.2719 6.65469C9.17498 7.02031 8.57024 8.21563 8.92181 9.3125C9.28743 10.4375 10.4827 10.9719 11.1718 10.7327C11.7624 10.5359 12.3813 10.4375 12.9999 10.4375C13.6186 10.4375 14.2374 10.5359 14.814 10.7328C14.9124 10.775 15.0389 10.7891 15.1656 10.7891C15.8547 10.7891 16.7686 10.2547 17.0781 9.3125C17.4297 8.21558 16.8249 7.02031 15.7139 6.65469Z"
          fill="url(#paint2_linear_293_56258)"
        />
        <path
          d="M15.2079 9.38281C14.5048 9.1437 13.7594 9.03125 13 9.03125C12.2406 9.03125 11.4952 9.1437 10.778 9.38281C7.95142 9.9875 3.85938 14.4828 3.85938 19.6719C3.85938 25.339 9.07652 26 13 26C16.9235 26 22.1406 25.339 22.1406 19.6719C22.1406 14.3703 17.9782 9.95933 15.2079 9.38281Z"
          fill="url(#paint3_linear_293_56258)"
        />
        <path
          d="M15.2079 9.38281C14.5048 9.1437 13.7594 9.03125 13 9.03125C12.2406 9.03125 11.4952 9.1437 10.778 9.38281C7.95142 9.9875 3.85938 14.4828 3.85938 19.6719C3.85938 25.339 9.07652 26 13 26C16.9235 26 22.1406 25.339 22.1406 19.6719C22.1406 14.3703 17.9782 9.95933 15.2079 9.38281Z"
          fill="url(#paint4_linear_293_56258)"
        />
        <path
          d="M15.1093 18.9688C15.1093 19.8547 14.5467 20.6422 13.7171 20.9515H13.703V21.7812C13.703 22.175 13.3937 22.4844 12.9999 22.4844C12.6061 22.4844 12.2968 22.175 12.2968 21.7812V20.9515C11.8326 20.7968 11.3826 20.5015 11.0031 20.0515C10.7638 19.7422 10.792 19.3062 11.1014 19.0531C11.3967 18.8 11.8326 18.8421 12.0858 19.1375C12.3671 19.4891 12.7046 19.6719 12.9999 19.6719C13.0844 19.6719 13.1546 19.6578 13.2389 19.6296C13.9701 19.3625 13.7875 18.1719 12.9999 18.1719C11.8326 18.1719 10.8905 17.2296 10.8905 16.0625C10.8905 15.2187 11.3688 14.4171 12.2968 14.0937V13.25C12.2968 12.8562 12.6061 12.5469 12.9999 12.5469C13.3937 12.5469 13.703 12.8562 13.703 13.25V14.0937C14.0686 14.2203 14.4202 14.4031 14.7436 14.7125C15.0107 14.9796 15.0248 15.4296 14.7577 15.7109C14.4906 15.9922 14.0405 15.9922 13.7593 15.725C13.5202 15.4859 13.2529 15.3594 12.9999 15.3594C12.9014 15.3594 12.8171 15.3734 12.7328 15.4156C12.0297 15.7109 12.2405 16.7656 12.9999 16.7656C14.1672 16.7656 15.1093 17.8015 15.1093 18.9688Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_293_56258"
          x="-2"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.00153834 0 0 0 0 0.578312 0 0 0 0 0.0938221 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_293_56258"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_293_56258"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_293_56258"
          x1="13.489"
          y1="2"
          x2="13.489"
          y2="7.7779"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2CB461" />
          <stop offset="1" stop-color="#0D6E31" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_293_56258"
          x1="8.49048"
          y1="0.327245"
          x2="11.4305"
          y2="9.40692"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0524126" stop-color="#B7FFC5" />
          <stop offset="0.22" stop-color="#BDFCC2" />
          <stop offset="0.602975" stop-color="#5CC062" />
          <stop offset="0.772117" stop-color="#52B555" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_293_56258"
          x1="12.9999"
          y1="6.21875"
          x2="12.9999"
          y2="10.7891"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#08AC0E" />
          <stop offset="1" stop-color="#006504" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_293_56258"
          x1="13.9914"
          y1="9.03126"
          x2="13.9914"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2CB461" />
          <stop offset="1" stop-color="#0D6E31" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_293_56258"
          x1="3.85938"
          y1="4.11865"
          x2="15.1875"
          y2="28.2655"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0524126" stop-color="#B7FFC5" />
          <stop offset="0.22" stop-color="#BDFCC2" />
          <stop offset="0.602975" stop-color="#5CC062" />
          <stop offset="0.772117" stop-color="#52B555" />
        </linearGradient>
      </defs>
    </svg>
  )
}

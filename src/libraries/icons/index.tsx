import { CSSProperties, FC } from "react"
import XMark from "./x-mark"
import Calendar from "./calendar"
import ChevronUpMini from "./plus-mini"
import PlusMini from "./plus-mini"
import ChevronLeft1 from "./chevron-left-1"
import GlobalEurope from "./global-europe"
import Buildings from "./buildings"
import CogSixTooth from "./cog-six-tooth"
import EllipsisHorizontal from "./ellipsis-horizontal"
import Minus from "./minus"
import Trash from "./trash"
import EyeSlash from "./eye-slash"
import Eye from "./eye"
import WaterBill from "./water-bill"
import MoneyBag from "./money-bag"
import Home from "./home"
import MagnifyingGlass from "./magnifying-glass"
import ReceiptPercent from "./receipt-percent"
import ShoppingCart from "./shopping-cart"
import TagIcon from "./tag"
import Users from "./users"
import Spinner from "./spinner"
import Loading from "./loading"

export type IconProps = {
  className?: string
  style?: CSSProperties
  transform?: string
  id?: string
}

export type Icon = FC<IconProps>

const IconsDefine = {
  "x-mark": "x-mark",
  calendar: "calendar",
  "chevron-up-mini": "chevron-up-mini",
  "plus-mini": "plus-mini",
  "chevron-left-1": "chevron-left-1",
  "global-europe": "global-europe",
  buildings: "buildings",
  "cog-six-tooth": "cog-six-tooth",
  "ellipsis-horizontal": "ellipsis-horizontal",
  minus: "minus",
  trash: "trash",
  "eye-slash": "eye-slash",
  eye: "eye",
  "water-bill": "water-bill",
  "money-bag": "money-bag",
  home: "home",
  "magnifying-glass": "magnifying-glass",
  "receipt-percent": "receipt-percent",
  "shopping-cart": "shopping-cart",
  tag: "tag",
  users: "users",
  spinner: "spinner",
  loading: "loading",
} as const

export type IconName = keyof typeof IconsDefine

export type IconsType = Record<IconName, Icon>

export const Icons: IconsType = {
  "x-mark": (props: IconProps) => {
    return <XMark {...props} />
  },
  calendar: (props: IconProps) => {
    return <Calendar {...props} />
  },
  "chevron-up-mini": (props: IconProps) => {
    return <ChevronUpMini {...props} />
  },
  "plus-mini": (props: IconProps) => {
    return <PlusMini {...props} />
  },
  "chevron-left-1": (props: IconProps) => {
    return <ChevronLeft1 {...props} />
  },
  "global-europe": (props: IconProps) => {
    return <GlobalEurope {...props} />
  },
  buildings: (props: IconProps) => {
    return <Buildings {...props} />
  },
  "cog-six-tooth": (props: IconProps) => {
    return <CogSixTooth {...props} />
  },
  "ellipsis-horizontal": (props: IconProps) => {
    return <EllipsisHorizontal {...props} />
  },
  minus: (props: IconProps) => {
    return <Minus {...props} />
  },
  trash: (props: IconProps) => {
    return <Trash {...props} />
  },
  "eye-slash": (props: IconProps) => {
    return <EyeSlash {...props} />
  },
  eye: (props: IconProps) => {
    return <Eye {...props} />
  },
  "water-bill": (props: IconProps) => {
    return <WaterBill {...props} />
  },
  "money-bag": (props: IconProps) => {
    return <MoneyBag {...props} />
  },
  home: (props: IconProps) => {
    return <Home {...props} />
  },
  "magnifying-glass": (props: IconProps) => {
    return <MagnifyingGlass {...props} />
  },
  "receipt-percent": (props: IconProps) => {
    return <ReceiptPercent {...props} />
  },
  "shopping-cart": (props: IconProps) => {
    return <ShoppingCart {...props} />
  },
  tag: (props: IconProps) => {
    return <TagIcon {...props} />
  },
  users: (props: IconProps) => {
    return <Users {...props} />
  },
  spinner: (props: IconProps) => {
    return <Spinner {...props} />
  },
  loading: (props: IconProps) => {
    return <Loading {...props} />
  },
}

export const RenderIcon = ({
  name,
  id,
  ...reset
}: IconProps & { name?: IconName }) => {
  if (!name) {
    return null
  }
  const Icon = Icons[name]
  return <Icon {...reset} id={id || name} data-testid={`${name}-icon`} />
}

export const IconsList = Object.keys(IconsDefine) as IconName[]

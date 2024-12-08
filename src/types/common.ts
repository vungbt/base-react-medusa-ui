import { ReactNode } from "react"

export type OptionsItem = {
  value: string
  label: ReactNode
}

export enum ESortOrder {
  Desc = "desc",
  Asc = "asc",
}
export enum EStatus {
  Active = "active",
  Inactive = "inactive",
  Disable = "disable",
}

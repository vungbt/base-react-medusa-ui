import { format } from "date-fns/format"

export enum EDateFormat {
  dd_MMMM_yyyy = "dd MMMM yyyy",
  dd_MMM_yyyy_hh_MM_a = "dd MMM yyyy hh:MM a",
  dd_MMM_yyyy_hh_MM = "dd MMM yyyy hh:MM",
}

export function formatDateTime(date: string | Date | number, fm?: EDateFormat) {
  const value = new Date(date)
  value.setMinutes(value.getMinutes() - value.getTimezoneOffset())

  const hour12 = Intl.DateTimeFormat().resolvedOptions().hour12
  const timestampFormat = hour12
    ? EDateFormat.dd_MMM_yyyy_hh_MM_a
    : EDateFormat.dd_MMM_yyyy_hh_MM

  return format(value, fm ?? timestampFormat)
}

export const formatDate = (date?: Date | string | number, fm?: EDateFormat) => {
  const dateNeedFormat = date ? new Date(date) : new Date()
  return format(dateNeedFormat, fm ?? EDateFormat.dd_MMMM_yyyy)
}

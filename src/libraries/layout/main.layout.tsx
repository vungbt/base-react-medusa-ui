import { Fragment } from "react"
import { Outlet } from "react-router-dom"

type MainLayoutProps = {}
export default function MainLayout({}: MainLayoutProps) {
  return (
    <Fragment>
      Header
      <Outlet />
      Footer
    </Fragment>
  )
}

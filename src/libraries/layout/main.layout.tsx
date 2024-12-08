import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"
import TopBar from "./top-bar"
import { TopBarProvider } from "hooks/top-bar"

type MainLayoutProps = {}
export default function MainLayout({}: MainLayoutProps) {
  return (
    <TopBarProvider>
      <div className="main-background h-screen">
        <div className="flex items-start">
          <Sidebar />
          <div className="px-4 pt-6 pb-2 flex-1">
            <TopBar />
            <div className="mt-4 bg-ui-bg-base rounded-lg">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </TopBarProvider>
  )
}

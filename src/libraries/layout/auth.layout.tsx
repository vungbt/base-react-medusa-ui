import { RenderIcon } from "libraries/icons"
import { Navigate, Outlet } from "react-router-dom"
import { RoutePath } from "routers/config"
import { useMe } from "utils/api/user"

export default function AuthLayout() {
  const { user, isLoading } = useMe()

  if (isLoading) {
    return (
      <>
        <RenderIcon name="spinner" />
      </>
    )
  }
  if (user) {
    return <Navigate to={RoutePath.HomePage} replace />
  }

  return (
    <div className="auth-background h-screen">
      <Outlet />
    </div>
  )
}

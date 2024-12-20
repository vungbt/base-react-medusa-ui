import { RenderIcon } from "libraries/icons"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { RoutePath } from "routers/config"
import { useMe } from "utils/api/user"

export default function ProtectedLayout() {
  const { user, isLoading } = useMe()
  const location = useLocation()
  if (isLoading) {
    return (
      <>
        <RenderIcon name="spinner" />
      </>
    )
  }
  if (!user) {
    return <Navigate to={RoutePath.Login} state={{ from: location }} replace />
  }
  return <Outlet />
}

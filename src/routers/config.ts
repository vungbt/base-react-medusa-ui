import { IconName } from "libraries/icons"
import { lazy, LazyExoticComponent } from "react"
import { RouteObject } from "react-router-dom"

// common
const ErrorPage = lazy(() => import("modules/error"))
const NotFoundPage = lazy(() => import("modules/404"))

// layout
const ProtectedLayout = lazy(() => import("libraries/layout/protected.layout"))
const PublicLayout = lazy(() => import("libraries/layout/public.layout"))
const MainLayout = lazy(() => import("libraries/layout/main.layout"))

export interface IRoute
  extends Omit<RouteObject, "element" | "children" | "path" | "errorElement"> {
  path?: string
  element: LazyExoticComponent<any>
  children?: IRoute[]
  icon?: IconName
  errorElement?: LazyExoticComponent<any>
}

export const routePath = {
  HomePage: "/",
  Login: "/login",
  Products: "/products",
  ProductsAction: "/products/:slug ",
  HashTag: "#",
}

const configRoutes: IRoute[] = [
  // protected
  {
    element: ProtectedLayout,
    children: [
      {
        element: MainLayout,
        children: [
          {
            path: routePath.HomePage,
            errorElement: ErrorPage,
            element: lazy(() => import("modules/home")),
          },
          {
            path: routePath.Products,
            element: lazy(() => import("modules/products/list")),
          },
        ],
      },
    ],
  },

  // public
  {
    element: PublicLayout,
    children: [
      {
        element: PublicLayout,
        errorElement: ErrorPage,
        children: [
          {
            path: routePath.Login,
            element: lazy(() => import("modules/login")),
          },
        ],
      },
      {
        path: "*",
        element: NotFoundPage,
      },
    ],
  },
]

export default configRoutes

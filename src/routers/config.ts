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
const AuthLayout = lazy(() => import("libraries/layout/auth.layout"))

export interface IRoute
  extends Omit<RouteObject, "element" | "children" | "path" | "errorElement"> {
  path?: string
  element?: LazyExoticComponent<any>
  children?: IRoute[]
  errorElement?: LazyExoticComponent<any>

  // support to show in sidebar
  isProtected?: boolean
  inSidebar?: boolean
  icon?: IconName
  label?: string
}

export interface IMenuItem {
  icon?: IconName
  label?: string
  path?: string
  inSidebar?: boolean
  children: IMenuItem[]
}

export const RoutePath = {
  HomePage: "/",
  Login: "/login",
  ForgotPassword: "/forgot-password",
  Products: "/products",
  Categories: "/categories",
  Customers: "/customers",
  ProductsAction: "/products/:slug ",
  HashTag: "#",
}

const configRoutes: IRoute[] = [
  // protected
  {
    element: ProtectedLayout,
    isProtected: true,
    children: [
      {
        element: MainLayout,
        children: [
          {
            path: RoutePath.HomePage,
            errorElement: ErrorPage,
            element: lazy(() => import("modules/home")),
            inSidebar: true,
            icon: "home",
            label: "Home",
          },
          {
            inSidebar: true,
            icon: "tag",
            label: "Products",
            children: [
              {
                path: RoutePath.Categories,
                errorElement: ErrorPage,
                element: lazy(() => import("modules/categories/list")),
                inSidebar: true,
                label: "Categories",
              },
              {
                path: RoutePath.Products,
                errorElement: ErrorPage,
                element: lazy(() => import("modules/products/list")),
                inSidebar: true,
                label: "Products",
              },
            ],
          },
          {
            path: RoutePath.Customers,
            errorElement: ErrorPage,
            element: lazy(() => import("modules/customers/list")),
            inSidebar: true,
            icon: "users",
            label: "Customers",
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
        element: AuthLayout,
        errorElement: ErrorPage,
        children: [
          {
            path: RoutePath.Login,
            element: lazy(() => import("modules/login")),
          },
          {
            path: RoutePath.ForgotPassword,
            element: lazy(() => import("modules/forgot-password")),
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

const getMenuList = (): IMenuItem[] => {
  const protectedRoutes = configRoutes.filter((item) => item.isProtected)
  const mainMenus = (protectedRoutes[0].children ?? [])[0].children
  if (!mainMenus) return []

  const getItems = (items: IRoute[]) => {
    const result: IMenuItem[] = []
    for (const item of items) {
      if (item.inSidebar) {
        result.push({
          icon: item.icon,
          label: item.label,
          path: item.path,
          children: getItems(item.children ?? []),
        })
      }
    }
    return result
  }

  return getItems(mainMenus)
}

export const sidebarMenus = getMenuList()

export default configRoutes

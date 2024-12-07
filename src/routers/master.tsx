import { BrowserRouter, Routes, Route } from "react-router-dom"
import configRoutes, { IRoute } from "./config"
import { Suspense } from "react"
import ErrorPage from "modules/error"
import { RenderIcon } from "libraries/icons"

export default function MasterRouter() {
  return (
    <BrowserRouter>
      <Routes>{renderRoutes(configRoutes)}</Routes>
    </BrowserRouter>
  )
}

const renderRoutes = (routes: IRoute[]) => {
  if (!routes || routes.length <= 0) return null

  return (
    <>
      {routes.map((item, index) => {
        const Element = item.element
        const ErrorElement = item.errorElement
        const childRoutes = item.children || []

        return (
          <Route
            key={index}
            path={item.path}
            element={
              <Suspense fallback={<RenderIcon name="spinner" />}>
                {Element && <Element />}
              </Suspense>
            }
            errorElement={ErrorElement ? <ErrorElement /> : <ErrorPage />}
          >
            {childRoutes.length > 0 && renderRoutes(childRoutes)}
          </Route>
        )
      })}
    </>
  )
}

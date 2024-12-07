import { IconButton } from "libraries/common/button"
import { RenderIcon } from "libraries/icons"
import { LogoText } from "libraries/logo/logo-text"
import { Fragment, ReactNode, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { IMenuItem, RoutePath, sidebarMenus } from "routers/config"
import { clsx } from "utils/common"

type SidebarProps = {
  className?: string
}

export default function Sidebar({ className }: SidebarProps) {
  const [showMenu, setShowMenu] = useState<number | undefined>()
  const [active, setActive] = useState<string>(RoutePath.HomePage)
  const location = useLocation()

  useEffect(() => {
    const pathname = location.pathname
    setActive(pathname)
  }, [location])

  const onToggleMenu = (item: IMenuItem, index: number) => {
    const child = item.children ?? []
    if (!child || child.length <= 0) return
    setShowMenu(index === showMenu ? undefined : index)
  }

  const onToggleActive = (item: IMenuItem) => {
    if (item.path) {
      setActive(item.path)
    }
  }

  return (
    <div
      className={clsx(
        className,
        "h-screen overflow-auto min-w-[220px] bg-ui-bg-subtle border-r border-solid border-ui-border-base"
      )}
    >
      {/* logo */}
      <div className="flex p-3 items-center justify-between gap-3 border-b border-dashed border-ui-border-strong">
        <Link to={RoutePath.HomePage} className="my-[2px] mr-[2px]">
          <LogoText className="!w-[71px] !h-[25px]" />
        </Link>
        <IconButton className="bg-transparent">
          <RenderIcon
            name="ellipsis-horizontal"
            className="!w-[15px] !h-[15px] text-ui-fg-muted"
          />
        </IconButton>
      </div>

      {/* menus */}
      <nav className="sidebar">
        <Menus
          menus={sidebarMenus}
          className="menus"
          showMenu={showMenu}
          active={active}
          onShowMenu={onToggleMenu}
          onActive={onToggleActive}
          setShowMenu={setShowMenu}
        />
      </nav>
    </div>
  )
}

const Menus = ({
  menus,
  className,
  isSubmenu = false,
  showMenu,
  active,
  parent,
  parentIndex,
  onActive,
  onShowMenu,
  setShowMenu,
}: {
  isSubmenu?: boolean
  menus: IMenuItem[]
  parent?: IMenuItem
  parentIndex?: number
  className?: string
  showMenu?: number
  onShowMenu?: (item: IMenuItem, index: number) => void
  onActive?: (item: IMenuItem, index: number) => void
  setShowMenu?: (index: number) => void
  active?: string
}) => {
  const Wrap = isSubmenu ? "div" : Fragment
  const [showMenuSub, setShowMenuSub] = useState<number | undefined>()

  const onToggleMenu = (item: IMenuItem, index: number) => {
    const child = item.children ?? []
    if (!child || child.length <= 0) return
    setShowMenuSub(index === showMenuSub ? undefined : index)
  }

  useEffect(() => {
    if (active && parent && parentIndex) {
      const valid = menus.some((item) => item.path === active)
      if (valid) {
        setShowMenu && setShowMenu(parentIndex)
      }
    }
  }, [active, parent])

  return (
    <ul className={clsx(className)}>
      <Wrap>
        {menus.map((item, index) => {
          const icon = item?.icon
          const label = item?.label
          const children = item?.children ?? []
          const haveChild = children && children.length > 0
          const path = item?.path
          const WrapLink = (haveChild ? "button" : Link) as any

          return (
            <li
              key={index}
              className={clsx({
                "item-show": showMenu === index,
                "item-active": active === item.path && item.path,
              })}
            >
              {/* icon */}
              <WrapLink
                to={path ?? ""}
                className={clsx("menu-item", {
                  submenu: isSubmenu,
                  active: active === item.path && item.path,
                })}
                onClick={() => {
                  onShowMenu && onShowMenu(item, index)
                  onActive && onActive(item, index)
                }}
              >
                {icon ? (
                  <IconView>
                    <RenderIcon
                      name={icon}
                      className="menu-icon !w-[15px] !h-[15px] aspect-square"
                    />
                  </IconView>
                ) : (
                  <ShadowIcon />
                )}
                <span className="flex-1 line-clamp-1 text-start">{label}</span>
                {haveChild ? (
                  <IconView>
                    <RenderIcon
                      name="chevron-left-1"
                      className={clsx(
                        "!w-[15px] !h-[15px] -rotate-90 transition-all ease-in-out",
                        {
                          "-rotate-[270deg]": showMenu === index,
                        }
                      )}
                    />
                  </IconView>
                ) : (
                  <ShadowIcon />
                )}
              </WrapLink>

              {/* render child */}
              {children && children.length > 0 ? (
                <Menus
                  menus={children}
                  isSubmenu={haveChild}
                  className={clsx("submenus p-0", {
                    show: showMenu === index,
                  })}
                  showMenu={showMenu}
                  active={active}
                  parent={haveChild ? item : undefined}
                  parentIndex={index}
                  onShowMenu={onToggleMenu}
                  onActive={(item, index) => onActive && onActive(item, index)}
                  setShowMenu={setShowMenu}
                />
              ) : null}
            </li>
          )
        })}
      </Wrap>
    </ul>
  )
}

const ShadowIcon = ({ className }: { className?: string }) => {
  return <span className={clsx(className, "block w-6 h-6")} />
}

const IconView = ({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) => {
  return (
    <span
      className={clsx("w-6 h-6 flex items-center justify-center", className)}
    >
      {children}
    </span>
  )
}

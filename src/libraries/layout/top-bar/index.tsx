import { useTopBar } from "hooks/top-bar"
import { Breadcrumb } from "libraries/common/breadcrumb"
import { IconButton } from "libraries/common/button"
import { RenderIcon } from "libraries/icons"
import { isArray } from "lodash"
import { useNavigate } from "react-router-dom"
import { clsx } from "utils/common"

type TopBarProps = {
  className?: string
}

export default function TopBar({ className }: TopBarProps) {
  const { state } = useTopBar()
  const { actions, breadcrumb = [], label } = state
  const navigate = useNavigate()
  const onBack = () => {
    navigate(-1)
  }
  return (
    <div
      className={clsx(
        "py-3 px-4 rounded-lg bg-white bg-opacity-[56%] flex items-center justify-between gap-3 w-full min-h-24",
        className
      )}
    >
      {/* right content */}
      <div className="flex flex-col gap-3">
        {breadcrumb && breadcrumb.length > 0 && (
          <Breadcrumb items={breadcrumb} />
        )}
        {/* back */}
        <div className="flex items-center gap-2">
          <IconButton onClick={onBack} className="rounded-full mt-1">
            <RenderIcon
              name="chevron-left"
              className="!w-[15px] !h-[15px] text-ui-fg-base"
            />
          </IconButton>
          <h2 className="text-text text-[32px] leading-10">{label}</h2>
        </div>
      </div>

      {/* left content */}
      <div className="flex items-center gap-2">
        {isArray(actions)
          ? actions.map((item, index) => <div key={index}>{item}</div>)
          : actions}
      </div>
    </div>
  )
}

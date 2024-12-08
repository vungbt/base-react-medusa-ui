import { EllipsisHorizontal, Eye, Trash } from "@medusajs/icons"
import { DropdownMenu, IconButton } from "@medusajs/ui"
import { EStatus } from "types/common"

type ActionsTableProps = {
  onDelete?: () => void
  onGoToDetail?: () => void
  onChangeStatus?: () => void
  status?: EStatus
}

export function ActionsTable({
  onDelete,
  onGoToDetail,
  onChangeStatus,
}: ActionsTableProps) {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <IconButton variant="transparent">
          <EllipsisHorizontal />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-fit min-w-fit">
        {onGoToDetail && (
          <DropdownMenu.Item className="w-fit">
            <button onClick={onGoToDetail} className="text-ui-fg-interactive">
              {/* <RenderIcon name="eye" className="!w-5 !h-5 text-info" /> */}
              <Eye />
            </button>
          </DropdownMenu.Item>
        )}

        {onDelete && (
          <DropdownMenu.Item className="w-fit">
            <button onClick={onDelete} className="text-ui-fg-error">
              <Trash />
            </button>
          </DropdownMenu.Item>
        )}

        {onChangeStatus && (
          <DropdownMenu.Item className="w-fit">
            <button onClick={onChangeStatus} className="text-ui-fg-error">
              <Trash />
            </button>
          </DropdownMenu.Item>
        )}
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

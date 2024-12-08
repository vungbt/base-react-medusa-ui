import { clx } from "@medusajs/ui"
import { ButtonStatus } from "libraries/common/button"
import { ActionsTable, TableColumn } from "libraries/common/table"
import { Link, useNavigate } from "react-router-dom"
import { RoutePath } from "routers/config"
import { EStatus } from "types/common"

export const TableListColumns = ({
  onDelete,
  onChangeStatus,
}: {
  onDelete: (item: any) => void
  onChangeStatus: (status: EStatus) => void
}): TableColumn<any>[] => {
  const navigate = useNavigate()

  const onGoToDetail = (_: any) => {
    navigate(`${RoutePath.Products}/123`)
  }

  return [
    {
      title: "Product Name/Code",
      render: (row: any) => (
        <div className="flex items-start gap-3">
          <img
            src="/dump/medicine.webp"
            alt="medicine"
            className="border-[0.5px] border-solid border-[#8080808C] bg-ui-bg-base w-10 h-10 aspect-square rounded-[4px]"
          />
          <div className="text-sm leading-5 text-ui-fg-base">
            <Link
              to={`${RoutePath.Products}/123`}
              className={clx(
                "font-medium cursor-pointer text-[13px] leading-5",
                {
                  "text-ui-fg-interactive": row.status === EStatus.Active,
                  "text-[#71717A]": row.status !== EStatus.Active,
                }
              )}
            >
              (3M) Particulate Respirator N95 Mask (8210) 20's
            </Link>
            <p
              className={clx("text-[13px] leading-5", {
                "text-[#A1A1AA]": row.status !== EStatus.Active,
              })}
            >
              3M01Z
            </p>
            <p
              className={clx("text-[13px] leading-5", {
                "text-[#A1A1AA]": row.status !== EStatus.Active,
              })}
            >
              Pan-Malayan Pharmaceuticals
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Price (S$)",
      align: "end",
      render: (_: any) => (
        <div className="flex items-center gap-2 justify-end text-[13px] leading-5">
          40.000
        </div>
      ),
    },
    {
      title: "Price (S$)",
      align: "end",
      render: (_: any) => (
        <div className="flex items-center gap-2 justify-end text-[13px] leading-5">
          40.000
        </div>
      ),
    },
    {
      title: "Quantity",
      align: "end",
      render: (_: any) => (
        <div className="flex items-center gap-2 justify-end text-[13px] leading-5">
          10
        </div>
      ),
    },
    {
      title: "Status",
      align: "start",
      render: (item: any) => (
        <ButtonStatus
          options={[
            {
              label: "Active",
              value: EStatus.Active,
            },
            {
              label: "Disable",
              value: EStatus.Disable,
            },
          ]}
          status={item.status}
          onChange={onChangeStatus}
        />
      ),
    },
    {
      title: "Action",
      align: "end",
      render: (row) => (
        <ActionsTable
          onDelete={() => onDelete(row)}
          onGoToDetail={() => onGoToDetail(row)}
        />
      ),
    },
  ]
}

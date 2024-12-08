import { fakeFetching } from "@mock"
import { MockProductData } from "@mock/product"
import { PAGINATION } from "constant/common"
import { useTopBar } from "hooks/top-bar"
import { Button } from "libraries/common/button"
import { Table } from "libraries/common/table/table"
import { TabItem, Tabs } from "libraries/common/tabs"
import keyBy from "lodash/keyBy"
import { useEffect, useState } from "react"
import { RoutePath } from "routers/config"
import { EStatus } from "types/common"
import SearchBar from "./components/search-bar"
import { TableListColumns } from "./components/table-column"
import AdvanceSearchModal from "./components/advance-search-modal"

export default function ProductListPage() {
  const { actions } = useTopBar()
  useEffect(() => {
    renderTopBar()
  }, [])

  const renderTopBar = () => {
    actions.setTopBar({
      label: "Products",
      breadcrumb: [
        {
          to: RoutePath.HomePage,
          title: "Products",
        },
        {
          title: "All Products",
        },
      ],
      actions: [
        <Button text="Save" variant="secondary" />,
        <Button leftIcon="plus-mini" text="Add product" />,
      ],
    })
  }

  const tabOptions = [
    { label: "All product", value: "1" },
    { label: "Products on moderation", value: "2" },
    { label: "Disapproved products", value: "3" },
  ]
  const [activeTab, setActiveTab] = useState<TabItem | undefined>(tabOptions[0])
  const handleTabChange = (item: TabItem) => {
    setActiveTab(item)
  }

  const [selectedRows, setSelectedRows] = useState<any>({})
  const [data, setData] = useState<any[]>([])
  const [metadata, setMetadata] = useState({
    currentPage: 1,
    total: 0,
    limit: PAGINATION.limit,
    page: PAGINATION.page,
  })
  const [pagination, setPagination] = useState({
    page: PAGINATION.page,
    limit: PAGINATION.limit,
  })

  useEffect(() => {
    fetching(pagination)
  }, [pagination])

  const fetching = (params?: { page?: number; limit?: number }) => {
    const res = fakeFetching(MockProductData, params)
    setData(res.data)
    setMetadata(res.metadata as any)
  }

  const onChangeStatus = (status: EStatus) =>
    console.log("Change status===>", status)

  const onDelete = (item: any) => {
    console.log("item====>", item)
  }

  const [showAdvanceSearch, setShowAdvanceSearch] = useState(false)

  return (
    <div className="rounded-lg">
      {/* tabs */}
      <div className="bg-ui-bg-subtle-hover  border-b border-solid border-ui-border-base rounded-t-lg">
        <Tabs
          active={activeTab}
          onChange={handleTabChange}
          options={tabOptions}
        />
      </div>

      {/* search */}
      <SearchBar
        onSearch={(values) => console.log("Search===>", values)}
        onAdvance={() => setShowAdvanceSearch(true)}
      />

      {/* main content */}
      <Table
        tableId="GeneralSetting"
        columns={TableListColumns({ onDelete, onChangeStatus })}
        rows={data}
        loading={false}
        page={metadata.currentPage}
        total={metadata.total}
        limit={metadata.limit}
        onChangePage={(page) => setPagination({ ...pagination, page })}
        className="h-[calc(100vh-320px)] overflow-auto px-4"
        rowSelection={{
          type: "checkbox",
          selectedRows,
          onSelectAll: () => {
            const newData = { ...selectedRows }
            if (Object.keys(newData).length >= 10) {
              setSelectedRows({})
            } else {
              setSelectedRows(keyBy(data, "id"))
            }
          },
          onSelect: (row) => {
            const newData = { ...selectedRows }
            const item = newData[row?.id]
            if (!item || Object.keys(item).length <= 0) {
              newData[row?.id] = { ...row }
            } else {
              delete newData[item.id]
            }
            setSelectedRows(newData)
          },
        }}
      />

      <AdvanceSearchModal
        onSubmit={(values) => console.log("Submit search===>", values)}
        className="max-h-[640px] mt-[7%]"
        title="Advance search"
        isOpen={showAdvanceSearch}
        onClose={() => setShowAdvanceSearch(!showAdvanceSearch)}
      />
    </div>
  )
}

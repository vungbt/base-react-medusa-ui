import { useTopBar } from "hooks/top-bar"
import { Button } from "libraries/common/button"
import { TabItem, Tabs } from "libraries/common/tabs"
import { useEffect, useState } from "react"
import { RoutePath } from "routers/config"
import SearchBar from "./components/search-bar"

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
      <SearchBar />
    </div>
  )
}

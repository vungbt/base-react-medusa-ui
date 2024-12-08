import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronDownMini } from "@medusajs/icons"
import { Checkbox, clx, DatePicker, RadioGroup } from "@medusajs/ui"
import { Button } from "libraries/common/button"
import { Input, InputRange, Textarea } from "libraries/common/input"
import { ModalBase, ModalBaseProps } from "libraries/common/modal"
import { Select } from "libraries/common/select"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

type AdvanceSearchModal = Omit<ModalBaseProps, "children"> & {
  onSubmit: (values: any) => void
}
export default function AdvanceSearchModal({
  onSubmit,
  onClose,
  ...reset
}: AdvanceSearchModal) {
  const validationSchema = z.object({
    keyword: z.string(),
    priceMax: z.string().optional(),
    priceMin: z.string().optional(),
    category: z.string(),
    vendors: z.string().optional(),
    code: z.string().optional(),
    searchIns: z.array(z.string()),
    principal: z.string().optional(),
    categories: z.string().optional(),
    promotion: z.string().optional(),
    units: z.string().optional(),
    genericName: z.string().optional(),
    expiryDate: z.string().optional(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    manufacturer: z.string().optional(),
    brand: z.string().optional(),
    countryOfOrigin: z.string().optional(),
    freightFrom: z.string().optional(),
    freightTo: z.string().optional(),
    weightFrom: z.string().optional(),
    weightTo: z.string().optional(),
    quantityFrom: z.string().optional(),
    quantityTo: z.string().optional(),
    forensicGroup: z.string().optional(),
    freeShipping: z.string().optional(),
    status: z.string().optional(),
    itemStatus: z.string().optional(),
    featuredListing: z.string().optional(),
    tag: z.string().optional(),
    amountFrom: z.string().optional(),
    amountTo: z.string().optional(),
    sortBy: z.string().optional(),
    sortStatus: z.string().optional(),
    period: z.string().optional(),
    dateEnd: z.date().optional(),
    dateStart: z.date().optional(),
    updatedLastHour: z.string().optional(),
    productType: z.date().optional(),
  })

  const { register, control, watch, handleSubmit, setValue } = useForm<any>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      keyword: "",
      category: "",
      vendors: "",
      code: "",
      searchIns: [],
      principal: "",
      categories: "",
      promotion: "",
      units: "",
      genericName: "",
      expiryDate: "",
      sortBy: "",
    },
  })

  const searchIns = {
    one: [
      { label: "Product name", value: "product_name" },
      { label: "Keywords", value: "keywords" },
    ],
    two: [
      { label: "Short description", value: "short_description" },
      { label: "Full description", value: "full_description" },
    ],
  }
  const searchInValues = watch("searchIns")
  const [showMoreFilter, setShowMoreFilter] = useState<string[]>([])
  const selectedRadio = watch("expiryDate")
  const productTypeSelected = watch("productType")
  const startDate = watch("startDate")

  return (
    <ModalBase onClose={onClose} {...reset} className="min-w-[900px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="overflow-auto max-h-[580px]"
      >
        {/* main content */}
        <div className="py-4 px-6 pb-6 w-full flex flex-col">
          <div className="flex items-center gap-3 flex-wrap justify-between">
            <div className="flex-1">
              <Input
                label="Find result with"
                type="text"
                placeholder="Enter keyword"
                className="bg-ui-fg-on-color border-ui-border-base h-10 text-ui-fg-muted mt-0"
                {...register("keyword")}
              />
            </div>

            <div className="flex-1">
              <InputRange
                label="Price (S$)"
                fieldForm={{
                  placeholder: "Minimum",
                  type: "number",
                  ...register("minPrice"),
                }}
                fieldTo={{
                  placeholder: "Maximum",
                  type: "number",
                  ...register("maxPrice"),
                }}
              />
            </div>
            <div className="flex-1">
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={[
                      { label: "Category 1", value: "1" },
                      { label: "Category 2", value: "2" },
                      { label: "Category 3", value: "3" },
                      { label: "Category 4", value: "4" },
                      { label: "Category 5", value: "5" },
                    ]}
                    label="Search in category"
                    placeholder="All category"
                  />
                )}
              />
            </div>
          </div>

          {/* line search 2 */}
          <div className="flex items-start gap-6 mt-6">
            <div className="flex-1">
              <Input
                label="Search by product code"
                type="text"
                placeholder="Search "
                className="bg-ui-fg-on-color border-ui-border-base h-10 text-ui-fg-muted mt-0"
                {...register("code")}
              />

              <RenderCheckboxForm
                control={control}
                setValue={setValue}
                name="searchIns"
                options={[{ label: "Subcategories", value: "subcategories" }]}
                selectedItems={searchInValues}
                className="p-0 mt-4"
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="searchIns"
                className="text-ui-fg-base text-small leading-5 mb-1 block w-fit"
              >
                Search in
              </label>
              <div className="flex flex-wrap gap-3">
                <div className="flex flex-col">
                  <RenderCheckboxForm
                    control={control}
                    setValue={setValue}
                    name="searchIns"
                    options={searchIns.one}
                    selectedItems={searchInValues}
                  />
                </div>
                <div className="flex flex-col">
                  <RenderCheckboxForm
                    control={control}
                    setValue={setValue}
                    name="searchIns"
                    options={searchIns.two}
                    selectedItems={searchInValues}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* line */}
          <div className="w-full h-[1px] bg-[#767680] bg-opacity-[12%] mt-6" />
          <div className="w-full h-[1px] bg-[#767680] bg-opacity-[12%] mt-6" />

          {/* Search by product filters */}
          <div className="mt-6">
            <LabelDropdown
              label="Search by product filters"
              isOpen={showMoreFilter.includes("product_filter")}
              onChange={() => {
                const newFilter = [...showMoreFilter]
                const isCurrentShow = newFilter.includes("product_filter")
                const newValue = !isCurrentShow
                  ? [...newFilter, "product_filter"]
                  : newFilter.filter((item: any) => item !== "product_filter")
                setShowMoreFilter(newValue)
              }}
            />

            <div
              className={clx("transition-all", {
                hidden: !showMoreFilter.includes("product_filter"),
                block: showMoreFilter.includes("product_filter"),
              })}
            >
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex-1">
                  <Input
                    label="Principal"
                    type="text"
                    placeholder="Search"
                    className="bg-ui-fg-on-color border-ui-border-base h-10 text-ui-fg-muted mt-0"
                    {...register("principal")}
                  />
                </div>
                <div className="flex-1">
                  <Input
                    label="Categories"
                    type="text"
                    placeholder="Search"
                    className="bg-ui-fg-on-color border-ui-border-base h-10 text-ui-fg-muted mt-0"
                    {...register("categories")}
                  />
                </div>

                <div className="flex-1">
                  <Input
                    label="Promotion"
                    type="text"
                    placeholder="Search"
                    className="bg-ui-fg-on-color border-ui-border-base h-10 text-ui-fg-muted mt-0"
                    {...register("promotion")}
                  />
                </div>
                <div className="flex-1">
                  <Input
                    label="Units"
                    type="text"
                    placeholder="Search"
                    className="bg-ui-fg-on-color border-ui-border-base h-10 text-ui-fg-muted mt-0"
                    {...register("units")}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex-1">
                  <label className="font-normal text-ui-fg-base text-small leading-5 mb-1 block w-fit">
                    Expiry Date
                  </label>
                  <Controller
                    name="expiryDate"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        value={selectedRadio}
                        onValueChange={(value) => field.onChange(value)}
                        className="mt-1"
                      >
                        {[
                          { label: "None", value: "none" },
                          { label: "Your range", value: "your_range" },
                        ].map((option) => (
                          <div
                            key={option.value}
                            className="flex items-center gap-2"
                          >
                            <RadioGroup.Item
                              id={option.value}
                              key={option.value}
                              value={option.value}
                            />
                            <label
                              htmlFor={option.value}
                              className="text-small font-medium text-ui-fg-base"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </RadioGroup>
                    )}
                  />

                  <div className="flex items-center w-full gap-[10px] mt-1">
                    <Controller
                      name="startDate"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          size="base"
                          name="startDate"
                          onChange={(date) => field.onChange(date)}
                          className="rounded px-2 h-10 bg-ui-fg-on-color flex-1"
                        />
                      )}
                    />

                    <Controller
                      name="endDate"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          size="base"
                          name="endDate"
                          isDisabled={!startDate}
                          maxValue={startDate}
                          onChange={(date) => field.onChange(date)}
                          className="rounded px-2 h-10 bg-ui-fg-on-color flex-1"
                        />
                      )}
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <Textarea
                    label="Generic Name"
                    placeholder="Search"
                    className="bg-ui-fg-on-color border-ui-border-base h-[92px] text-ui-fg-muted mt-0"
                    {...register("genericName")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#767680] bg-opacity-[12%] mt-6" />
          {/* Search by product features */}
          <div className="mt-6">
            <LabelDropdown
              label="Search by product features"
              isOpen={showMoreFilter.includes("product_feature")}
              onChange={() => {
                const newFilter = [...showMoreFilter]
                const isCurrentShow = newFilter.includes("product_feature")
                const newValue = !isCurrentShow
                  ? [...newFilter, "product_feature"]
                  : newFilter.filter((item: any) => item !== "product_feature")
                setShowMoreFilter(newValue)
              }}
            />

            <div
              className={clx("transition-all", {
                hidden: !showMoreFilter.includes("product_feature"),
                block: showMoreFilter.includes("product_feature"),
              })}
            >
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex-1">
                  <Input
                    label="Manufacturer"
                    type="text"
                    placeholder="Search"
                    className="bg-ui-fg-on-color border-ui-border-base h-10 text-ui-fg-muted mt-0"
                    {...register("manufacturer")}
                  />
                </div>

                <div className="flex-1">
                  <Input
                    label="Brand"
                    type="text"
                    placeholder="Search"
                    className="bg-ui-fg-on-color border-ui-border-base h-10 text-ui-fg-muted mt-0"
                    {...register("brand")}
                  />
                </div>

                <div className="flex-1">
                  <Input
                    label="Country of Origin"
                    type="text"
                    placeholder="Search"
                    className="bg-ui-fg-on-color border-ui-border-base h-10 text-ui-fg-muted mt-0"
                    {...register("countryOfOrigin")}
                  />
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#767680] bg-opacity-[12%] mt-6" />
              <div className="flex items-center gap-4 mt-6">
                {/* freight  */}
                <div className="flex-1">
                  <InputRange
                    label="Shipping freight (S$)"
                    fieldForm={{
                      type: "number",
                      ...register("freightFrom"),
                    }}
                    fieldTo={{
                      type: "number",
                      ...register("freightTo"),
                    }}
                  />
                </div>

                {/* Weight (g) */}
                <div className="flex-1">
                  <InputRange
                    label="Weight (g)"
                    fieldForm={{
                      type: "number",
                      ...register("weightFrom"),
                    }}
                    fieldTo={{
                      type: "number",
                      ...register("weightTo"),
                    }}
                  />
                </div>

                {/* Quantity */}
                <div className="flex-1">
                  <InputRange
                    label="Quantity"
                    fieldForm={{
                      type: "number",
                      ...register("quantityFrom"),
                    }}
                    fieldTo={{
                      type: "number",
                      ...register("quantityTo"),
                    }}
                  />
                </div>

                <div className="flex-1">
                  <Controller
                    name="vendors"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={[
                          { label: "Vendor 1", value: "1" },
                          { label: "Vendor 2", value: "2" },
                          { label: "Vendor 3", value: "3" },
                          { label: "Vendor 4", value: "4" },
                          { label: "Vendor 5", value: "5" },
                        ]}
                        label="Search by vendors"
                        placeholder="All"
                      />
                    )}
                  />
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#767680] bg-opacity-[12%] mt-6" />

              <div className="flex items-center gap-4 mt-6">
                <div className="flex-1">
                  <Controller
                    name="freeShipping"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={[
                          { label: "Free 1", value: "1" },
                          { label: "Free 2", value: "2" },
                          { label: "Free 3", value: "3" },
                          { label: "Free 4", value: "4" },
                          { label: "Free 5", value: "5" },
                        ]}
                        label="Free Shipping"
                        placeholder="All"
                      />
                    )}
                  />
                </div>

                <div className="flex-1">
                  <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={[
                          { label: "Status 1", value: "1" },
                          { label: "Status 2", value: "2" },
                          { label: "Status 3", value: "3" },
                          { label: "Status 4", value: "4" },
                          { label: "Status 5", value: "5" },
                        ]}
                        label="Status"
                        placeholder="All"
                      />
                    )}
                  />
                </div>

                <div className="flex-1">
                  <Controller
                    name="itemStatus"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={[
                          { label: "Item Status (BC) 1", value: "1" },
                          { label: "Item Status (BC) 2", value: "2" },
                          { label: "Item Status (BC) 3", value: "3" },
                          { label: "Item Status (BC) 4", value: "4" },
                          { label: "Item Status (BC) 5", value: "5" },
                        ]}
                        label="Item Status (BC)"
                        placeholder="All"
                      />
                    )}
                  />
                </div>

                <div className="flex-1">
                  <Controller
                    name="forensicGroup"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={[
                          { label: "Forensic Group 1", value: "1" },
                          { label: "Forensic Group 2", value: "2" },
                          { label: "Forensic Group 3", value: "3" },
                          { label: "Forensic Group 4", value: "4" },
                          { label: "Forensic Group 5", value: "5" },
                        ]}
                        label="Forensic Group"
                        placeholder="All"
                      />
                    )}
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex-1">
                  <Controller
                    name="featuredListing"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={[
                          { label: " Featured in Listing 1", value: "1" },
                          { label: " Featured in Listing 2", value: "2" },
                          { label: " Featured in Listing 3", value: "3" },
                          { label: " Featured in Listing 4", value: "4" },
                          { label: " Featured in Listing 5", value: "5" },
                        ]}
                        label=" Featured in Listing"
                        placeholder="No"
                      />
                    )}
                  />
                </div>

                <div className="flex-1">
                  <Input
                    label="Tag"
                    type="text"
                    className="bg-ui-fg-on-color border-ui-border-base h-10 text-ui-fg-muted mt-0"
                    {...register("tag")}
                  />
                </div>

                <div className="flex-1">
                  <InputRange
                    label="Sales amount"
                    fieldForm={{
                      type: "number",
                      ...register("amountFrom"),
                    }}
                    fieldTo={{
                      type: "number",
                      ...register("amountTo"),
                    }}
                  />
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#767680] bg-opacity-[12%] mt-6" />

              {/* Sortby */}
              <div className="flex items-center gap-4 mt-4">
                <div className="flex-1">
                  <Controller
                    name="sortBy"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={[
                          { label: "Sort by 1", value: "1" },
                          { label: "Sort by 2", value: "2" },
                          { label: "Sort by 3", value: "3" },
                          { label: "Sort by 4", value: "4" },
                          { label: "Sort by 5", value: "5" },
                        ]}
                        label="Sort by"
                        placeholder="No"
                      />
                    )}
                  />
                </div>
                <div className="flex-1"></div>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#767680] bg-opacity-[12%] mt-6" />

          {/* Creation date */}
          <div className="font-semibold text-base leading-6 w-fit flex items-center gap-2 cursor-pointer mt-6">
            Creation date
          </div>
          <div className="flex items-center w-full gap-4 mt-4">
            <div className="flex-1">
              <Controller
                name="period"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="All"
                    options={[
                      { label: "Period 1", value: "1" },
                      { label: "Period 2", value: "2" },
                      { label: "Period 3", value: "3" },
                      { label: "Period 4", value: "4" },
                      { label: "Period 5", value: "5" },
                    ]}
                    label="Period"
                  />
                )}
              />
            </div>

            <div className="flex-1">
              <label className="font-normal text-ui-fg-base text-small leading-5 mb-1 block w-fit">
                Select dates
              </label>
              <div className="flex items-center w-full gap-[10px] mt-1 ">
                <Controller
                  name="dateFrom"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      size="base"
                      name="dateFrom"
                      onChange={(date) => field.onChange(date)}
                      className="rounded px-2 h-10 bg-ui-fg-on-color flex-1"
                    />
                  )}
                />

                <Controller
                  name="dateEnd"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      // selected={field.value}
                      size="base"
                      name="dateEnd"
                      isDisabled={!startDate}
                      maxValue={startDate}
                      onChange={(date) => field.onChange(date)}
                      className="rounded px-2 h-10 bg-ui-fg-on-color flex-1"
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#767680] bg-opacity-[12%] mt-6" />

          {/* Updated in the last hour(s) */}
          <div className="flex items-center w-full gap-4 mt-4">
            <div className="flex-1">
              <Input
                label="Updated in the last hour(s)"
                type="text"
                placeholder="Search"
                className="bg-ui-fg-on-color border-ui-border-base h-10 text-ui-fg-muted mt-0"
                {...register("updatedLastHour")}
              />
            </div>

            <div className="flex-1">
              <label className="font-normal text-ui-fg-base text-small leading-5 mb-1 block w-fit">
                Product type
              </label>
              <Controller
                name="productType"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    value={productTypeSelected}
                    onValueChange={(value) => field.onChange(value)}
                    className="mt-1 flex items-center"
                  >
                    {[
                      { label: "Catalog item", value: "catalog_item" },
                      {
                        label: "Variation of a catalog item",
                        value: "variation",
                      },
                    ].map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center gap-2 py-[10px]"
                      >
                        <RadioGroup.Item
                          id={option.value}
                          key={option.value}
                          value={option.value}
                        />
                        <label
                          htmlFor={option.value}
                          className="text-small font-medium text-ui-fg-base cursor-pointer"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
              />
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="flex items-center gap-2 flex-wrap w-full justify-end px-6 py-4 border-t border-solid border-ui-border-base">
          <Button
            text="Cancel"
            type="button"
            variant="secondary"
            size="base"
            onClick={onClose}
          />
          <Button text="Search" size="base" type="submit" />
        </div>
      </form>
    </ModalBase>
  )
}

const LabelDropdown = ({
  label,
  isOpen,
  onChange,
}: {
  label: string
  isOpen: boolean
  onChange: () => void
}) => {
  return (
    <div>
      <div
        className="font-semibold text-base leading-6 w-fit flex items-center gap-2 cursor-pointer"
        onClick={onChange}
      >
        {label}
        <span
          className={clx("block mt-[2px] transition-all", {
            "rotate-180": isOpen,
          })}
        >
          <ChevronDownMini />
        </span>
      </div>
    </div>
  )
}

const RenderCheckboxForm = ({
  control,
  setValue,
  name,
  options,
  selectedItems,
  className,
}: {
  control: any
  setValue: any
  name: string
  options: { label: string; value: string }[]
  selectedItems: string[]
  className?: string
}) => {
  return (
    <>
      {options.map((option, index) => (
        <Controller
          key={option.value}
          name={name}
          control={control}
          render={(field) => (
            <div
              className={clx(
                "flex items-center gap-2 py-[6px] pr-[5px] w-fit",
                {
                  "flex-1": index % 2,
                },
                className
              )}
            >
              <Checkbox
                {...field}
                id={option.value}
                checked={selectedItems.includes(option.value)}
                onCheckedChange={(checked: any) => {
                  const newValue = checked
                    ? [...selectedItems, option.value]
                    : selectedItems.filter((item: any) => item !== option.value)
                  setValue("searchIns", newValue)
                }}
              />
              <label
                htmlFor={option.value}
                className="text-small font-medium text-ui-fg-base cursor-pointer"
              >
                {option.label}
              </label>
            </div>
          )}
        />
      ))}
    </>
  )
}

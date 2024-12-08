import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "libraries/common/button"
import { Input, InputRange } from "libraries/common/input"
import { Select } from "libraries/common/select"
import { Controller, useForm } from "react-hook-form"
import { RegexHelper } from "utils/helpers/regex"
import * as zod from "zod"

type SearchForm = {
  keyword?: string
  maxPrice?: string
  minPrice?: string
  category?: string
}

export default function SearchBar() {
  const schema = zod.object({
    keyword: zod.string(),
    category: zod.string(),
    maxPrice: zod
      .string()
      .optional()
      .refine((value) => !value || RegexHelper.REGEX_NUMBER.test(value), {
        message: "Max price must be a number",
      }),
    minPrice: zod
      .string()
      .optional()
      .refine((value) => !value || RegexHelper.REGEX_NUMBER.test(value), {
        message: "Min price must be a number",
      }),
  })

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SearchForm>({
    defaultValues: {
      keyword: "",
      maxPrice: "",
      minPrice: "",
      category: "",
    },
    resolver: zodResolver(schema),
  })

  const onSubmit = async (values: SearchForm) => {
    console.log("values====>", values)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-3 flex-wrap px-4 pb-4 pt-6"
    >
      <div className="flex gap-3 items-end flex-wrap">
        <div className="flex-1">
          <Input
            label="Find result with"
            type="text"
            placeholder="Enter keyword"
            isShowError={!!errors.keyword?.message}
            {...register("keyword")}
          />
        </div>
        <div className="flex-1">
          <InputRange
            label="Price (S$)"
            fieldForm={{
              placeholder: "Minimum",
              type: "number",
              isShowError: !!errors.minPrice?.message,
              ...register("minPrice"),
            }}
            fieldTo={{
              placeholder: "Maximum",
              type: "number",
              isShowError: !!errors.maxPrice?.message,
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
                isShowError={!!errors.keyword?.message}
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

        <div className="flex items-center gap-2">
          <Button type="submit" leftIcon="magnifying-glass" text="Search" />
          <Button type="button" styles="outline" text="Advance search" />
        </div>
      </div>
    </form>
  )
}

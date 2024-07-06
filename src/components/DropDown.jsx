import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

export function DropDown() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Show More" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Business</SelectLabel>
          <SelectItem value="apple">Finance</SelectItem>
          <SelectItem value="banana">Product</SelectItem>
          <SelectItem value="blueberry">Management</SelectItem>
          <SelectItem value="grapes">Data Science</SelectItem>
          <SelectItem value="pineapple">Fintech</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

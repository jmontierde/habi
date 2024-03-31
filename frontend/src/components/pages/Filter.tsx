import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Filter = () => {
  return (
    <div className="flex gap-3">
      <Input placeholder="Enter an address, city or ZIP Code" />
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Property</SelectLabel>
            <SelectItem value="buy">Buy</SelectItem>
            <SelectItem value="rent">Rent</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {/* <Input /> */}
      <Input />
    </div>
  );
};

export default Filter;

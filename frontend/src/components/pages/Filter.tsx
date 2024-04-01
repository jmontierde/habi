import { Button } from "../ui/button";
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
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-3">
        <Input placeholder="Enter an address, city or ZIP Code" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a property" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Property</SelectLabel>
              <SelectItem value="buy">Buy</SelectItem>
              <SelectItem value="rent">Rent</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Type: Apartment" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Property</SelectLabel>
              <SelectItem value="buy">Buy</SelectItem>
              <SelectItem value="rent">Rent</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <Input placeholder="Min Price" type="number" />
        <Input placeholder="Max Price" type="number" />
        <Input placeholder="Bedroom" />
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default Filter;

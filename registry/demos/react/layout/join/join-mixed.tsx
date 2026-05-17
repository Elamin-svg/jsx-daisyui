import Join from "@registry/components/react/layout/join";
import Button from "@registry/components/react/forms/button";
import { Input } from "@registry/components/react/forms/input";
import Select from "@registry/components/react/forms/select";

export function JoinMixed() {
  return (  
    <Join >
      <Input className="w-40 join-item" placeholder="Search" />
      <Select defaultValue="" className="join-item">
        <option disabled value="">Filter</option>
        <option>Sci-fi</option>
        <option>Drama</option>
        <option>Action</option>
      </Select>
      <Button color="primary" className="join-item">Search</Button>
    </Join>
  );
}

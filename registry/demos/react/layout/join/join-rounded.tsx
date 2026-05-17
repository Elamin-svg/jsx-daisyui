import Join from "@registry/components/react/layout/join";
import Button from "@registry/components/react/forms/button";
import { Input } from "@registry/components/react/forms/input";

export function JoinRounded() {
  return (
    <Join >
        <Input className="w-48 join-item" placeholder="Email address" />
        <Button color="primary" className="join-item rounded-r-full">Subscribe</Button>
    </Join>
  );
}

import { Input } from "@registry/components/react/forms/input";

export function InputDisabled() {
  return (
    <div className="flex flex-col gap-3 w-72">
      <Input disabled placeholder="Disabled input" />
      <Input disabled value="Read-only value" readOnly />
    </div>
  );
}

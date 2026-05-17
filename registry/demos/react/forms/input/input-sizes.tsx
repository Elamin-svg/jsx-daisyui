import { Input } from "@registry/components/react/forms/input";

export function InputSizes() {
  return (
    <div className="flex flex-col gap-3">
      <Input size="xs" placeholder="Extra small" />
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
      <Input size="xl" placeholder="Extra large" />
    </div>
  );
}

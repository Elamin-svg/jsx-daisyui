import { Input } from "@registry/components/react/forms/input";

export function InputColors() {
  return (
    <div className="flex flex-col gap-3">
      <Input color="neutral"   placeholder="Neutral" />
      <Input color="primary"   placeholder="Primary" />
      <Input color="secondary" placeholder="Secondary" />
      <Input color="accent"    placeholder="Accent" />
      <Input color="info"      placeholder="Info" />
      <Input color="success"   placeholder="Success" />
      <Input color="warning"   placeholder="Warning" />
      <Input color="error"     placeholder="Error" />
    </div>
  );
}

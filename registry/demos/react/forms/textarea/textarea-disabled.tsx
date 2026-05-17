import Textarea from "@registry/components/react/forms/textarea";

export function TextareaDisabled() {
  return (
    <Textarea
      disabled
      placeholder="This textarea is disabled"
      value="Disabled content"
      className="w-full"
    />
  );
}

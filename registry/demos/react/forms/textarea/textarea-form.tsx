import Textarea from "@registry/components/react/forms/textarea";
import Button from "@registry/components/react/forms/button";

export function TextareaForm() {
  return (
    <fieldset className="space-y-3">
      <legend className="text-lg font-semibold">Leave us a message</legend>
      <label className="block">
        <span className="text-sm font-medium mb-1 block">Your message</span>
        <Textarea color="primary" placeholder="Tell us what you think..." className="w-full" />
      </label>
      <Button color="primary">Send</Button>
    </fieldset>
  );
}

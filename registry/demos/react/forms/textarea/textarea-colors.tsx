import Textarea from "@registry/components/react/forms/textarea";

export function TextareaColors() {
  return (
    <div className="space-y-3">
      <Textarea color="neutral" placeholder="Neutral" className="w-full" />
      <Textarea color="primary" placeholder="Primary" className="w-full" />
      <Textarea color="secondary" placeholder="Secondary" className="w-full" />
      <Textarea color="accent" placeholder="Accent" className="w-full" />
      <Textarea color="info" placeholder="Info" className="w-full" />
      <Textarea color="success" placeholder="Success" className="w-full" />
      <Textarea color="warning" placeholder="Warning" className="w-full" />
      <Textarea color="error" placeholder="Error" className="w-full" />
    </div>
  );
}

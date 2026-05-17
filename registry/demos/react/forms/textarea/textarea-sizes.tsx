import Textarea from "@registry/components/react/forms/textarea";

export function TextareaSizes() {
  return (
    <div className="space-y-3">
      <Textarea size="xs" placeholder="Extra small" className="w-full" />
      <Textarea size="sm" placeholder="Small" className="w-full" />
      <Textarea size="md" placeholder="Medium" className="w-full" />
      <Textarea size="lg" placeholder="Large" className="w-full" />
      <Textarea size="xl" placeholder="Extra large" className="w-full" />
    </div>
  );
}

import FileInput from "@registry/components/react/forms/file-input";

export function FileInputSizes() {
  return (
    <div className="flex flex-col gap-3">
      <FileInput size="xs" />
      <FileInput size="sm" />
      <FileInput size="md" />
      <FileInput size="lg" />
      <FileInput size="xl" />
    </div>
  );
}

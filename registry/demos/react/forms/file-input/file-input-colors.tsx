import FileInput from "@registry/components/react/forms/file-input";

export function FileInputColors() {
  return (
    <div className="flex flex-col gap-3">
      <FileInput color="neutral" />
      <FileInput color="primary" />
      <FileInput color="secondary" />
      <FileInput color="accent" />
      <FileInput color="info" />
      <FileInput color="success" />
      <FileInput color="warning" />
      <FileInput color="error" />
    </div>
  );
}

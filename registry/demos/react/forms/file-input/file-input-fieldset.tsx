import FileInput from "@registry/components/react/forms/file-input";

export function FileInputFieldset() {
  return (
    <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-80">
      <legend className="fieldset-legend">Upload file</legend>
      <FileInput color="primary" />
      <p className="label text-base-content/60 text-sm mt-1">Max file size: 10MB</p>
    </fieldset>
  );
}

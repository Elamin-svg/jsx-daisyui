import Select from "@registry/components/react/forms/select";

export function SelectColors() {
  return (
    <div className="flex flex-col gap-3 items-start">
      <Select color="neutral" defaultValue="neutral">
        <option disabled value="neutral">Neutral</option>
        <option>North America</option>
        <option>EU West</option>
      </Select>
      <Select color="primary" defaultValue="primary">
        <option disabled value="primary">Primary</option>
        <option>VSCode</option>
        <option>VSCode fork</option>
      </Select>
      <Select color="secondary" defaultValue="secondary">
        <option disabled value="secondary">Secondary</option>
        <option>Zig</option>
        <option>Rust</option>
      </Select>
      <Select color="accent" defaultValue="accent">
        <option disabled value="accent">Accent</option>
        <option>Light mode</option>
        <option>Dark mode</option>
      </Select>
      <Select color="info" defaultValue="info">
        <option disabled value="info">Info</option>
        <option>React</option>
        <option>Vue</option>
      </Select>
      <Select color="success" defaultValue="success">
        <option disabled value="success">Success</option>
        <option>Bun</option>
        <option>npm</option>
      </Select>
      <Select color="warning" defaultValue="warning">
        <option disabled value="warning">Warning</option>
        <option>Windows</option>
        <option>MacOS</option>
      </Select>
      <Select color="error" defaultValue="error">
        <option disabled value="error">Error</option>
        <option>GPT-4</option>
        <option>Claude</option>
      </Select>
    </div>
  );
}

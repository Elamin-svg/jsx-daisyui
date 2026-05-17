// scripts/data-display/create-table-demos.mjs
import fs from "fs";
import path from "path";
const ROOT = process.cwd();
function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

write(
  "registry/demos/react/data-display/table/table-default.tsx",
  `import Table from "@registry/components/react/data-display/table";

export function TableDefault() {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Alice Johnson</td><td>Admin</td><td><span className="badge badge-success badge-sm">Active</span></td></tr>
        <tr><td>2</td><td>Bob Martinez</td><td>Editor</td><td><span className="badge badge-success badge-sm">Active</span></td></tr>
        <tr><td>3</td><td>Carol White</td><td>Viewer</td><td><span className="badge badge-ghost badge-sm">Inactive</span></td></tr>
      </tbody>
    </Table>
  );
}
`,
);

write(
  "registry/demos/react/data-display/table/table-zebra.tsx",
  `import Table from "@registry/components/react/data-display/table";

export function TableZebra() {
  return (
    <Table zebra>
      <thead>
        <tr><th>Name</th><th>Job</th><th>Favourite Color</th></tr>
      </thead>
      <tbody>
        <tr><td>Cy Ganderton</td><td>Quality Control</td><td>Blue</td></tr>
        <tr><td>Hart Hagerty</td><td>Desktop Support</td><td>Purple</td></tr>
        <tr><td>Brice Swyre</td><td>Tax Accountant</td><td>Red</td></tr>
        <tr><td>Marjy Ferencz</td><td>Office Assistant</td><td>Crimson</td></tr>
      </tbody>
    </Table>
  );
}
`,
);

write(
  "registry/demos/react/data-display/table/table-sizes.tsx",
  `import Table from "@registry/components/react/data-display/table";

const rows = [
  { name: "Alice", role: "Admin" },
  { name: "Bob", role: "Editor" },
];

export function TableSizes() {
  return (
    <div className="flex flex-col gap-4">
      {(["xs", "sm", "md", "lg"] as const).map((size) => (
        <div key={size}>
          <p className="text-xs text-base-content/60 mb-1 uppercase">{size}</p>
          <Table size={size}>
            <thead><tr><th>Name</th><th>Role</th></tr></thead>
            <tbody>{rows.map((r) => <tr key={r.name}><td>{r.name}</td><td>{r.role}</td></tr>)}</tbody>
          </Table>
        </div>
      ))}
    </div>
  );
}
`,
);

write(
  "registry/demos/react/data-display/table/table-bordered.tsx",
  `import Table from "@registry/components/react/data-display/table";

export function TableBordered() {
  return (
    <Table bordered>
      <thead>
        <tr><th>Product</th><th>Price</th><th>Stock</th></tr>
      </thead>
      <tbody>
        <tr><td>Widget A</td><td>$9.99</td><td>In stock</td></tr>
        <tr><td>Widget B</td><td>$14.99</td><td>Low stock</td></tr>
        <tr><td>Widget C</td><td>$4.99</td><td>Out of stock</td></tr>
      </tbody>
    </Table>
  );
}
`,
);

console.log("\nDone!");

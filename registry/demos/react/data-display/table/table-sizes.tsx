import Table from "@registry/components/react/data-display/table";

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

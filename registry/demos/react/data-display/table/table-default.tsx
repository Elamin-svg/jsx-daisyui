import Table from "@registry/components/react/data-display/table";

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

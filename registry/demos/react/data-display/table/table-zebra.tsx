import Table from "@registry/components/react/data-display/table";

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

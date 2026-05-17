import Table from "@registry/components/react/data-display/table";

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

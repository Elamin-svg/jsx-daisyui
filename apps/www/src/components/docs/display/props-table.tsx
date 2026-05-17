import Table from "@registry/components/react/data-display/table";

export interface PropDef {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export function PropsTable({ data }: { data: PropDef[] }) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="overflow-x-auto mb-6 mt-3 border border-base-content/10 rounded-box">
      <Table className="w-full">
        <thead>
          <tr className="bg-base-200/50">
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((prop) => (
            <tr key={prop.name}>
              <td>
                <code className="text-primary font-semibold">{prop.name}</code>
              </td>
              <td>
                <code className="text-sm bg-base-200 px-1.5 py-0.5 rounded text-base-content/80">
                  {prop.type}
                </code>
              </td>
              <td>
                {prop.default ? (
                  <code className="text-sm text-base-content/80">
                    {prop.default}
                  </code>
                ) : (
                  <span className="text-base-content/40">-</span>
                )}
              </td>
              <td className="text-sm text-base-content/80">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

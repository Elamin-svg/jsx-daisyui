import { List } from "@registry/components/react/data-display/list";

export function ListLabeled() {
  return (
    <List className="w-72">
      <List.Label>Recent</List.Label>
      <List.Row>
        <List.ColGrow>
          <p className="font-semibold">Project Alpha</p>
          <p className="text-xs text-base-content/60">Updated 2 minutes ago</p>
        </List.ColGrow>
      </List.Row>
      <List.Row>
        <List.ColGrow>
          <p className="font-semibold">Project Beta</p>
          <p className="text-xs text-base-content/60">Updated 1 hour ago</p>
        </List.ColGrow>
      </List.Row>
      <List.Label>Older</List.Label>
      <List.Row>
        <List.ColGrow>
          <p className="font-semibold">Project Gamma</p>
          <p className="text-xs text-base-content/60">Updated 3 days ago</p>
        </List.ColGrow>
      </List.Row>
    </List>
  );
}

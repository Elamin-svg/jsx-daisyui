import { List } from "@registry/components/react/data-display/list";
import Button from "@registry/components/react/forms/button";

export function ListWithAvatar() {
  const users = [
    { name: "Alice Johnson", role: "Admin", initials: "AJ" },
    { name: "Bob Martinez", role: "Editor", initials: "BM" },
    { name: "Carol White", role: "Viewer", initials: "CW" },
  ];

  return (
    <List className="w-72">
      {users.map((u) => (
        <List.Row key={u.name}>
          <div className="avatar avatar-placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-10">
              <span className="text-xs">{u.initials}</span>
            </div>
          </div>
          <List.ColGrow>
            <p className="font-semibold">{u.name}</p>
            <p className="text-xs text-base-content/60">{u.role}</p>
          </List.ColGrow>
          <Button variant="ghost" size="xs">···</Button>
        </List.Row>
      ))}
    </List>
  );
}

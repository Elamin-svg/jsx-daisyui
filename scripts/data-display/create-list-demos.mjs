// scripts/data-display/create-list-demos.mjs
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
  "registry/demos/react/data-display/list/list-default.tsx",
  `import { List } from "@registry/components/react/data-display/list";

export function ListDefault() {
  return (
    <List className="w-72">
      <List.Row>
        <List.ColGrow>
          <p className="font-semibold">Inbox</p>
          <p className="text-xs text-base-content/60">3 new messages</p>
        </List.ColGrow>
        <span className="badge badge-primary badge-sm">3</span>
      </List.Row>
      <List.Row>
        <List.ColGrow>
          <p className="font-semibold">Drafts</p>
          <p className="text-xs text-base-content/60">1 unsaved draft</p>
        </List.ColGrow>
        <span className="badge badge-ghost badge-sm">1</span>
      </List.Row>
      <List.Row>
        <List.ColGrow>
          <p className="font-semibold">Sent</p>
          <p className="text-xs text-base-content/60">12 messages</p>
        </List.ColGrow>
      </List.Row>
    </List>
  );
}
`,
);

write(
  "registry/demos/react/data-display/list/list-with-avatar.tsx",
  `import { List } from "@registry/components/react/data-display/list";
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
`,
);

write(
  "registry/demos/react/data-display/list/list-labeled.tsx",
  `import { List } from "@registry/components/react/data-display/list";

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
`,
);



console.log("\nDone!");

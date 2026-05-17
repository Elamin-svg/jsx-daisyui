// scripts/navigation/create-tabs-demos.mjs
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
  "registry/demos/react/navigation/tabs/tabs-default.tsx",
  `import { Tabs } from "@registry/components/react/navigation/tabs";

export function TabsDefault() {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="py-4">Tab 1 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p className="py-4">Tab 2 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <p className="py-4">Tab 3 content</p>
      </Tabs.Content>
    </Tabs>
  );
}
`,
);

write(
  "registry/demos/react/navigation/tabs/tabs-border.tsx",
  `import { Tabs } from "@registry/components/react/navigation/tabs";

export function TabsBorder() {
  return (
    <Tabs defaultValue="tab1" variant="border">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="py-4">Tab 1 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p className="py-4">Tab 2 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <p className="py-4">Tab 3 content</p>
      </Tabs.Content>
    </Tabs>
  );
}
`,
);

write(
  "registry/demos/react/navigation/tabs/tabs-box.tsx",
  `import { Tabs } from "@registry/components/react/navigation/tabs";

export function TabsBox() {
  return (
    <Tabs defaultValue="tab1" variant="box">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="py-4">Tab 1 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p className="py-4">Tab 2 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <p className="py-4">Tab 3 content</p>
      </Tabs.Content>
    </Tabs>
  );
}
`,
);

write(
  "registry/demos/react/navigation/tabs/tabs-lift.tsx",
  `import { Tabs } from "@registry/components/react/navigation/tabs";

export function TabsLift() {
  return (
    <Tabs defaultValue="tab1" variant="lift">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="p-4">Tab 1 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p className="p-4">Tab 2 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <p className="p-4">Tab 3 content</p>
      </Tabs.Content>
    </Tabs>
  );
}
`
);

console.log("\nDone!");

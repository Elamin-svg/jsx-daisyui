// scripts/feedback/create-status-demos.mjs
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
  "registry/demos/react/feedback/status/status-default.tsx",
  `import Status from "@registry/components/react/feedback/status";

export function StatusDefault() {
  return <Status />;
}
`,
);

write(
  "registry/demos/react/feedback/status/status-sizes.tsx",
  `import Status from "@registry/components/react/feedback/status";

export function StatusSizes() {
  return (
    <div className="flex items-center gap-4">
      <Status size="xs" color="primary" />
      <Status size="sm" color="primary" />
      <Status size="md" color="primary" />
      <Status size="lg" color="primary" />
      <Status size="xl" color="primary" />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/feedback/status/status-colors.tsx",
  `import Status from "@registry/components/react/feedback/status";

export function StatusColors() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Status color="neutral" />
        <Status color="primary" />
        <Status color="secondary" />
        <Status color="accent" />
      </div>
      <div className="flex items-center gap-4">
        <Status color="info" />
        <Status color="success" />
        <Status color="warning" />
        <Status color="error" />
      </div>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/feedback/status/status-ping.tsx",
  `import Status from "@registry/components/react/feedback/status";

export function StatusPing() {
  return (
    <div className="flex items-center gap-2">
      <div className="inline-grid *:[grid-area:1/1]">
        <Status color="error" className="animate-ping" />
        <Status color="error" />
      </div>
      <span>Server is down</span>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/feedback/status/status-bounce.tsx",
  `import Status from "@registry/components/react/feedback/status";

export function StatusBounce() {
  return (
    <div className="flex items-center gap-2">
      <Status color="info" className="animate-bounce" />
      <span>Unread messages</span>
    </div>
  );
}
`,
);

console.log("\nDone!");

// scripts/feedback/create-progress-demos.mjs
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
  "registry/demos/react/feedback/progress/progress-default.tsx",
  `import Progress from "@registry/components/react/feedback/progress";

export function ProgressDefault() {
  return (
    <div className="flex flex-col gap-2 items-center w-full max-w-sm">
      <Progress value={0} max={100} className="w-full" />
      <Progress value={10} max={100} className="w-full" />
      <Progress value={40} max={100} className="w-full" />
      <Progress value={70} max={100} className="w-full" />
      <Progress value={100} max={100} className="w-full" />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/feedback/progress/progress-colors.tsx",
  `import Progress from "@registry/components/react/feedback/progress";

export function ProgressColors() {
  return (
    <div className="space-y-4 w-full max-w-sm">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Neutral</p>
        <Progress color="neutral" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Primary</p>
        <Progress color="primary" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Secondary</p>
        <Progress color="secondary" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Accent</p>
        <Progress color="accent" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Info</p>
        <Progress color="info" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Success</p>
        <Progress color="success" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Warning</p>
        <Progress color="warning" value={65} max={100} className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Error</p>
        <Progress color="error" value={65} max={100} className="w-full" />
      </div>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/feedback/progress/progress-indeterminate.tsx",
  `import Progress from "@registry/components/react/feedback/progress";

export function ProgressIndeterminate() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Progress className="w-full" />
      <Progress color="primary" className="w-full" />
      <Progress color="success" className="w-full" />
    </div>
  );
}
`,
);

console.log("\nDone!");

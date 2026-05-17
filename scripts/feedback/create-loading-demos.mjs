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
  "registry/demos/react/feedback/loading/loading-default.tsx",
  `import Loading from "@registry/components/react/feedback/loading";

export function LoadingDefault() {
  return <Loading />;
}
`,
);

write(
  "registry/demos/react/feedback/loading/loading-variants.tsx",
  `import Loading from "@registry/components/react/feedback/loading";

export function LoadingVariants() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Loading variant="spinner" />
      <Loading variant="dots" />
      <Loading variant="ring" />
      <Loading variant="ball" />
      <Loading variant="bars" />
      <Loading variant="infinity" />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/feedback/loading/loading-sizes.tsx",
  `import Loading from "@registry/components/react/feedback/loading";

export function LoadingSizes() {
  return (
    <div className="flex items-center gap-4">
      <Loading size="xs" />
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" />
      <Loading size="xl" />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/feedback/loading/loading-colors.tsx",
  `import Loading from "@registry/components/react/feedback/loading";

export function LoadingColors() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Loading color="primary" />
      <Loading color="secondary" />
      <Loading color="accent" />
      <Loading color="info" />
      <Loading color="success" />
      <Loading color="warning" />
      <Loading color="error" />
    </div>
  );
}
`,
);

console.log("\nDone!");

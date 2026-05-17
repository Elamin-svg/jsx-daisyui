// scripts/navigation/create-breadcrumbs-demos.mjs
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
  "registry/demos/react/navigation/breadcrumbs/breadcrumbs-default.tsx",
  `import { Breadcrumbs } from "@registry/components/react/navigation/breadcrumbs";

export function BreadcrumbsDefault() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.List>
        <Breadcrumbs.Item><a href="#">Home</a></Breadcrumbs.Item>
        <Breadcrumbs.Item><a href="#">Documents</a></Breadcrumbs.Item>
        <Breadcrumbs.Item>Add Document</Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
}
`,
);

write(
  "registry/demos/react/navigation/breadcrumbs/breadcrumbs-with-icons.tsx",
  `import { Breadcrumbs } from "@registry/components/react/navigation/breadcrumbs";

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
  </svg>
);

const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export function BreadcrumbsWithIcons() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <a href="#" className="flex items-center gap-1"><HomeIcon />Home</a>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <a href="#" className="flex items-center gap-1"><FolderIcon />Documents</a>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item className="flex items-center gap-1">
          <FileIcon />Report.pdf
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
}
`,
);

console.log("\nDone!");

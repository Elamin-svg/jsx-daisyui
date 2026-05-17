// scripts/navigation/create-pagination-demos.mjs
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
  "registry/demos/react/navigation/pagination/pagination-default.tsx",
  `import { Pagination } from "@registry/components/react/navigation/pagination";

export function PaginationDefault() {
  return (
    <Pagination defaultValue={2}>
      <Pagination.Item value={1}>1</Pagination.Item>
      <Pagination.Item value={2}>2</Pagination.Item>
      <Pagination.Item value={3}>3</Pagination.Item>
      <Pagination.Item value={4}>4</Pagination.Item>
      <Pagination.Item value={5}>5</Pagination.Item>
    </Pagination>
  );
}
`,
);

write(
  "registry/demos/react/navigation/pagination/pagination-with-prev-next.tsx",
  `import { Pagination } from "@registry/components/react/navigation/pagination";

export function PaginationWithPrevNext() {
  return (
    <Pagination defaultValue={3}>
      <Pagination.Item value="prev" disabled>«</Pagination.Item>
      <Pagination.Item value={1}>1</Pagination.Item>
      <Pagination.Item value={2}>2</Pagination.Item>
      <Pagination.Item value={3}>3</Pagination.Item>
      <Pagination.Item value={4}>4</Pagination.Item>
      <Pagination.Item value="next">»</Pagination.Item>
    </Pagination>
  );
}
`,
);

write(
  "registry/demos/react/navigation/pagination/pagination-sizes.tsx",
  `import { Pagination } from "@registry/components/react/navigation/pagination";

export function PaginationSizes() {
  return (
    <div className="flex flex-col items-start gap-3">
      <Pagination defaultValue={2}>
        <Pagination.Item value={1} size="xs">1</Pagination.Item>
        <Pagination.Item value={2} size="xs">2</Pagination.Item>
        <Pagination.Item value={3} size="xs">3</Pagination.Item>
      </Pagination>
      <Pagination defaultValue={2}>
        <Pagination.Item value={1} size="sm">1</Pagination.Item>
        <Pagination.Item value={2} size="sm">2</Pagination.Item>
        <Pagination.Item value={3} size="sm">3</Pagination.Item>
      </Pagination>
      <Pagination defaultValue={2}>
        <Pagination.Item value={1} size="md">1</Pagination.Item>
        <Pagination.Item value={2} size="md">2</Pagination.Item>
        <Pagination.Item value={3} size="md">3</Pagination.Item>
      </Pagination>
      <Pagination defaultValue={2}>
        <Pagination.Item value={1} size="lg">1</Pagination.Item>
        <Pagination.Item value={2} size="lg">2</Pagination.Item>
        <Pagination.Item value={3} size="lg">3</Pagination.Item>
      </Pagination>
    </div>
  );
}
`,
);



console.log("\nDone!");

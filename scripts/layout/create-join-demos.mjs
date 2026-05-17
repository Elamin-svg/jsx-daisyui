// scripts/layout/create-join-demos.mjs
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
  "registry/demos/react/layout/join/join-default.tsx",
  `import Join from "@registry/components/react/layout/join";
import Button from "@registry/components/react/forms/button";

export function JoinDefault() {
  return (
    <Join>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
    </Join>
  );
}
`,
);

write(
  "registry/demos/react/layout/join/join-vertical.tsx",
  `import Join from "@registry/components/react/layout/join";
import Button from "@registry/components/react/forms/button";

export function JoinVertical() {
  return (
    <Join >
        <Button className="join-item">Top</Button>
        <Button className="join-item">Middle</Button>
        <Button className="join-item">Bottom</Button>
    </Join>
  );
}
`,
);

write(
  "registry/demos/react/layout/join/join-responsive.tsx",
  `import Join from "@registry/components/react/layout/join";
import Button from "@registry/components/react/forms/button";

export function JoinResponsive() {
  return (
    <Join >
        <Button className="join-item">Button</Button>
        <Button className="join-item">Button</Button>
        <Button className="join-item">Button</Button>
    </Join>
  );
}
`,
);

write(
  "registry/demos/react/layout/join/join-mixed.tsx",
  `import Join from "@registry/components/react/layout/join";
import Button from "@registry/components/react/forms/button";
import { Input } from "@registry/components/react/forms/input";
import Select from "@registry/components/react/forms/select";

export function JoinMixed() {
  return (  
    <Join >
      <Input className="w-40 join-item" placeholder="Search" />
      <Select defaultValue="" className="join-item">
        <option disabled value="">Filter</option>
        <option>Sci-fi</option>
        <option>Drama</option>
        <option>Action</option>
      </Select>
      <Button color="primary" className="join-item">Search</Button>
    </Join>
  );
}
`,
);


write(
  "registry/demos/react/layout/join/join-rounded.tsx",
  `import Join from "@registry/components/react/layout/join";
import Button from "@registry/components/react/forms/button";
import { Input } from "@registry/components/react/forms/input";

export function JoinRounded() {
  return (
    <Join >
        <Input className="w-48 join-item" placeholder="Email address" />
        <Button color="primary" className="join-item rounded-r-full">Subscribe</Button>
    </Join>
  );
}
`,
);

console.log("\\nDone!");

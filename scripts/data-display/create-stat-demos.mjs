// scripts/data-display/create-stat-demos.mjs
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
  "registry/demos/react/data-display/stat/stat-default.tsx",
  `import { Stat } from "@registry/components/react/data-display/stat";

export function StatDefault() {
  return (
    <Stat>
      <Stat.Item>
        <Stat.Title>Total Page Views</Stat.Title>
        <Stat.Value>89,400</Stat.Value>
        <Stat.Desc>21% more than last month</Stat.Desc>
      </Stat.Item>
      <Stat.Item>
        <Stat.Title>New Users</Stat.Title>
        <Stat.Value>4,200</Stat.Value>
        <Stat.Desc>↗︎ 400 (22%)</Stat.Desc>
      </Stat.Item>
      <Stat.Item>
        <Stat.Title>Revenue</Stat.Title>
        <Stat.Value>$12,600</Stat.Value>
        <Stat.Desc>↘︎ 90 (14%)</Stat.Desc>
      </Stat.Item>
    </Stat>
  );
}
`,
);

write(
  "registry/demos/react/data-display/stat/stat-vertical.tsx",
  `import { Stat } from "@registry/components/react/data-display/stat";

export function StatVertical() {
  return (
    <Stat direction="vertical">
      <Stat.Item>
        <Stat.Title>Downloads</Stat.Title>
        <Stat.Value>31K</Stat.Value>
        <Stat.Desc>Jan 1st - Feb 1st</Stat.Desc>
      </Stat.Item>
      <Stat.Item>
        <Stat.Title>New Registers</Stat.Title>
        <Stat.Value>4,200</Stat.Value>
        <Stat.Desc>↗︎ 400 (22%)</Stat.Desc>
      </Stat.Item>
    </Stat>
  );
}
`,
);

write(
  "registry/demos/react/data-display/stat/stat-with-figure.tsx",
  `import { Stat } from "@registry/components/react/data-display/stat";

export function StatWithFigure() {
  return (
    <Stat>
      <Stat.Item>
        <Stat.Figure className="text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Stat.Figure>
        <Stat.Title>Downloads</Stat.Title>
        <Stat.Value className="text-secondary">31K</Stat.Value>
        <Stat.Desc>Jan 1st - Feb 1st</Stat.Desc>
      </Stat.Item>
      <Stat.Item>
        <Stat.Figure className="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </Stat.Figure>
        <Stat.Title>New Users</Stat.Title>
        <Stat.Value className="text-primary">4,200</Stat.Value>
        <Stat.Desc>↗︎ 400 (22%)</Stat.Desc>
      </Stat.Item>
    </Stat>
  );
}
`,
);

write(
  "registry/demos/react/data-display/stat/stat-centered.tsx",
  `import { Stat } from "@registry/components/react/data-display/stat";

export function StatCentered() {
  return (
    <Stat direction="vertical">
      <Stat.Item centered>
        <Stat.Title>Total Likes</Stat.Title>
        <Stat.Value>25.6K</Stat.Value>
        <Stat.Desc>↗︎ 2.3K (9%)</Stat.Desc>
      </Stat.Item>
      <Stat.Item centered>
        <Stat.Title>Page Views</Stat.Title>
        <Stat.Value>2.6M</Stat.Value>
        <Stat.Desc>↘︎ 90 (14%)</Stat.Desc>
      </Stat.Item>
    </Stat>
  );
}
`,
);

console.log("\nDone!");

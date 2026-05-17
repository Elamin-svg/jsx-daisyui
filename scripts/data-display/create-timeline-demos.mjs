// scripts/data-display/create-timeline-demos.mjs
import fs from "fs";
import path from "path";
const ROOT = process.cwd();
function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

const CheckIcon = `() => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
)`;

write(
  "registry/demos/react/data-display/timeline/timeline-default.tsx",
  `import { Timeline } from "@registry/components/react/data-display/timeline";

const CheckIcon = ${CheckIcon};

export function TimelineDefault() {
  return (
    <Timeline>
      <Timeline.Item first>
        <Timeline.Middle className="text-primary"><CheckIcon /></Timeline.Middle>
        <Timeline.End box>First milestone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Middle className="text-primary"><CheckIcon /></Timeline.Middle>
        <Timeline.End box>Second milestone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Middle><CheckIcon /></Timeline.Middle>
        <Timeline.End box>Third milestone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item last>
        <Timeline.Middle><CheckIcon /></Timeline.Middle>
        <Timeline.End box>Final step</Timeline.End>
      </Timeline.Item>
    </Timeline>
  );
}
`,
);

write(
  "registry/demos/react/data-display/timeline/timeline-vertical.tsx",
  `import { Timeline } from "@registry/components/react/data-display/timeline";

const CheckIcon = ${CheckIcon};

export function TimelineVertical() {
  const steps = [
    { year: "1984", label: "First Macintosh" },
    { year: "1998", label: "iMac" },
    { year: "2001", label: "iPod" },
    { year: "2007", label: "iPhone" },
    { year: "2010", label: "iPad" },
  ];

  return (
    <Timeline direction="vertical" compact>
      {steps.map((step, i) => (
        <Timeline.Item key={step.year} first={i === 0} last={i === steps.length - 1}>
          <Timeline.Start>{step.year}</Timeline.Start>
          <Timeline.Middle className="text-primary"><CheckIcon /></Timeline.Middle>
          <Timeline.End box>{step.label}</Timeline.End>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
`,
);

write(
  "registry/demos/react/data-display/timeline/timeline-both-sides.tsx",
  `import { Timeline } from "@registry/components/react/data-display/timeline";

const CheckIcon = ${CheckIcon};

export function TimelineBothSides() {
  return (
    <Timeline snapIcon>
      <Timeline.Item first>
        <Timeline.Start box>Plan</Timeline.Start>
        <Timeline.Middle className="text-primary"><CheckIcon /></Timeline.Middle>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Start box>Design</Timeline.Start>
        <Timeline.Middle className="text-primary"><CheckIcon /></Timeline.Middle>
        <Timeline.End box>Research</Timeline.End>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Middle className="text-primary"><CheckIcon /></Timeline.Middle>
        <Timeline.End box>Build</Timeline.End>
      </Timeline.Item>
      <Timeline.Item last>
        <Timeline.Middle><CheckIcon /></Timeline.Middle>
        <Timeline.End box>Launch</Timeline.End>
      </Timeline.Item>
    </Timeline>
  );
}
`,
);

write(
  "registry/demos/react/data-display/timeline/timeline-colored.tsx",
  `import { Timeline } from "@registry/components/react/data-display/timeline";

const CheckIcon = ${CheckIcon};

export function TimelineColored() {
  const steps = [
    { label: "Order placed", color: "bg-primary", textColor: "text-primary" },
    { label: "Processing", color: "bg-secondary", textColor: "text-secondary" },
    { label: "Shipped", color: "bg-accent", textColor: "text-accent" },
    { label: "Delivered", color: "", textColor: "" },
  ];

  return (
    <Timeline>
      {steps.map((step, i) => (
        <Timeline.Item key={step.label} first={i === 0} last={i === steps.length - 1} lineColor={step.color}>
          <Timeline.Middle className={step.textColor || "text-base-content/30"}><CheckIcon /></Timeline.Middle>
          <Timeline.End box>{step.label}</Timeline.End>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
`,
);

console.log("\nDone!");

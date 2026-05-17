// scripts/navigation/create-steps-demos.mjs
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
  "registry/demos/react/navigation/steps/steps-default.tsx",
  `import { Steps } from "@registry/components/react/navigation/steps";

export function StepsDefault() {
  return (
    <Steps activeStep={1}>
      <Steps.Item>Register</Steps.Item>
      <Steps.Item>Choose plan</Steps.Item>
      <Steps.Item>Purchase</Steps.Item>
      <Steps.Item>Receive product</Steps.Item>
    </Steps>
  );
}
`,
);

write(
  "registry/demos/react/navigation/steps/steps-vertical.tsx",
  `import { Steps } from "@registry/components/react/navigation/steps";

export function StepsVertical() {
  return (
    <Steps direction="vertical" activeStep={2}>
      <Steps.Item>Register</Steps.Item>
      <Steps.Item>Choose plan</Steps.Item>
      <Steps.Item>Purchase</Steps.Item>
      <Steps.Item>Receive product</Steps.Item>
    </Steps>
  );
}
`,
);

console.log("\nDone!");

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
  "registry/demos/react/feedback/alert/alert-default.tsx",
  `import Alert from "@registry/components/react/feedback/alert";

export function AlertDefault() {
  return (
    <Alert>
      <span>12 unread messages. Tap to see.</span>
    </Alert>
  );
}
`,
);

write(
  "registry/demos/react/feedback/alert/alert-variants.tsx",
  `import Alert from "@registry/components/react/feedback/alert";

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WarnIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const ErrorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export function AlertVariants() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Alert variant="info"><InfoIcon /><span>New software update available.</span></Alert>
      <Alert variant="success"><CheckIcon /><span>Your purchase has been confirmed!</span></Alert>
      <Alert variant="warning"><WarnIcon /><span>Warning: invalid email address.</span></Alert>
      <Alert variant="error"><ErrorIcon /><span>Error! Task failed successfully.</span></Alert>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/feedback/alert/alert-styles.tsx",
  `import Alert from "@registry/components/react/feedback/alert";

export function AlertStyles() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Alert variant="info" style="solid"><span>Solid style alert</span></Alert>
      <Alert variant="info" style="soft"><span>Soft style alert</span></Alert>
      <Alert variant="info" style="outline"><span>Outline style alert</span></Alert>
      <Alert variant="info" style="dash"><span>Dash style alert</span></Alert>
    </div>
  );
}
`,
);

console.log("\nDone!");

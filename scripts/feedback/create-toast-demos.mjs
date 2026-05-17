// scripts/feedback/create-toast-demos.mjs
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
  "registry/demos/react/feedback/toast/toast-default.tsx",
  `"use client";

import { toast, Toaster } from "@registry/components/react/feedback/toast";
import Button from "@registry/components/react/forms/button";

export function ToastDefault() {
  return (
    <div className="flex flex-wrap gap-2">
      <Toaster />
      <Button onClick={() => toast("Event has been created")}>Default</Button>
      <Button color="info" onClick={() => toast.info("New message received")}>Info</Button>
      <Button color="success" onClick={() => toast.success("Changes saved successfully")}>Success</Button>
      <Button color="warning" onClick={() => toast.warning("Low storage remaining")}>Warning</Button>
      <Button color="error" onClick={() => toast.error("Failed to save changes")}>Error</Button>
    </div>
  );
}
`,
);

console.log("\nDone!");

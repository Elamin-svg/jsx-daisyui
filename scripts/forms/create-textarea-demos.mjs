// scripts/forms/create-textarea-demos.mjs
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
  "registry/demos/react/forms/textarea/textarea-default.tsx",
  `import Textarea from "@registry/components/react/forms/textarea";

export function TextareaDefault() {
  return (
    <Textarea
      placeholder="Your message here"
      className="w-full"
    />
  );
}
`,
);

write(
  "registry/demos/react/forms/textarea/textarea-colors.tsx",
  `import Textarea from "@registry/components/react/forms/textarea";

export function TextareaColors() {
  return (
    <div className="space-y-3">
      <Textarea color="neutral" placeholder="Neutral" className="w-full" />
      <Textarea color="primary" placeholder="Primary" className="w-full" />
      <Textarea color="secondary" placeholder="Secondary" className="w-full" />
      <Textarea color="accent" placeholder="Accent" className="w-full" />
      <Textarea color="info" placeholder="Info" className="w-full" />
      <Textarea color="success" placeholder="Success" className="w-full" />
      <Textarea color="warning" placeholder="Warning" className="w-full" />
      <Textarea color="error" placeholder="Error" className="w-full" />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/textarea/textarea-sizes.tsx",
  `import Textarea from "@registry/components/react/forms/textarea";

export function TextareaSizes() {
  return (
    <div className="space-y-3">
      <Textarea size="xs" placeholder="Extra small" className="w-full" />
      <Textarea size="sm" placeholder="Small" className="w-full" />
      <Textarea size="md" placeholder="Medium" className="w-full" />
      <Textarea size="lg" placeholder="Large" className="w-full" />
      <Textarea size="xl" placeholder="Extra large" className="w-full" />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/textarea/textarea-ghost.tsx",
  `import Textarea from "@registry/components/react/forms/textarea";

export function TextareaGhost() {
  return (
    <Textarea
      variant="ghost"
      placeholder="Ghost style textarea"
      className="w-full"
    />
  );
}
`,
);

write(
  "registry/demos/react/forms/textarea/textarea-disabled.tsx",
  `import Textarea from "@registry/components/react/forms/textarea";

export function TextareaDisabled() {
  return (
    <Textarea
      disabled
      placeholder="This textarea is disabled"
      value="Disabled content"
      className="w-full"
    />
  );
}
`,
);

write(
  "registry/demos/react/forms/textarea/textarea-form.tsx",
  `import Textarea from "@registry/components/react/forms/textarea";
import Button from "@registry/components/react/forms/button";

export function TextareaForm() {
  return (
    <fieldset className="space-y-3">
      <legend className="text-lg font-semibold">Leave us a message</legend>
      <label className="block">
        <span className="text-sm font-medium mb-1 block">Your message</span>
        <Textarea color="primary" placeholder="Tell us what you think..." className="w-full" />
      </label>
      <Button color="primary">Send</Button>
    </fieldset>
  );
}
`,
);

console.log("\nDone!");

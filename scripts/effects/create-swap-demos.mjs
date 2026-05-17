// scripts/effects/create-swap-demos.mjs
// Run: node scripts/effects/create-swap-demos.mjs

import fs from "fs";
import path from "path";

const ROOT = process.cwd();

function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

// ─── Demo files ───────────────────────────────────────────────────────────────

write(
  "registry/demos/react/effects/swap/swap-default.tsx",
  `import { Swap } from "@registry/components/react/effects/swap";

export function SwapDefault() {
  return (
    <Swap defaultChecked>
      <Swap.On className="text-xl font-bold">ON</Swap.On>
      <Swap.Off className="text-xl font-bold">OFF</Swap.Off>
    </Swap>
  );
}
`,
);

write(
  "registry/demos/react/effects/swap/swap-rotate.tsx",
  `import { Swap } from "@registry/components/react/effects/swap";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="light mode">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="dark mode">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export function SwapRotate() {
  return (
    <Swap effect="rotate" defaultChecked>
      <Swap.On><SunIcon /></Swap.On>
      <Swap.Off><MoonIcon /></Swap.Off>
    </Swap>
  );
}
`,
);

write(
  "registry/demos/react/effects/swap/swap-flip.tsx",
  `import { Swap } from "@registry/components/react/effects/swap";

export function SwapFlip() {
  return (
    <Swap effect="flip" defaultChecked>
      <Swap.On className="text-4xl">😄</Swap.On>
      <Swap.Off className="text-4xl">😑</Swap.Off>
    </Swap>
  );
}
`,
);

write(
  "registry/demos/react/effects/swap/swap-text.tsx",
  `import { Swap } from "@registry/components/react/effects/swap";

export function SwapText() {
  return (
    <div className="flex gap-6">
      <Swap defaultChecked className="text-lg font-semibold">
        <Swap.On className="text-success">Active</Swap.On>
        <Swap.Off className="text-error">Inactive</Swap.Off>
      </Swap>
      <Swap effect="flip" className="text-lg font-semibold">
        <Swap.On className="text-primary">Subscribed</Swap.On>
        <Swap.Off className="text-base-content/50">Unsubscribed</Swap.Off>
      </Swap>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/effects/swap/swap-controlled.tsx",
  `"use client";

import * as React from "react";
import { Swap } from "@registry/components/react/effects/swap";

export function SwapControlled() {
  const [active, setActive] = React.useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <Swap effect="rotate" checked={active} onChange={setActive}>
        <Swap.On className="text-4xl">🔊</Swap.On>
        <Swap.Off className="text-4xl">🔇</Swap.Off>
      </Swap>
      <p className="text-sm text-base-content/60">
        Sound: <strong>{active ? "on" : "off"}</strong>
      </p>
    </div>
  );
}
`,
);

console.log("\nDone!");

// scripts/effects/create-theme-controller-demos.mjs
// Run: node scripts/effects/create-theme-controller-demos.mjs

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
  "registry/demos/react/effects/theme-controller/theme-controller-default.tsx",
  `import ThemeController from "@registry/components/react/effects/theme-controller";

export function ThemeControllerDefault() {
  return <ThemeController />;
}
`,
);

write(
  "registry/demos/react/effects/theme-controller/theme-controller-navbar.tsx",
  `import ThemeController from "@registry/components/react/effects/theme-controller";
import Button from "@registry/components/react/forms/button";

export function ThemeControllerNavbar() {
  return (
    <div className="navbar bg-base-100 rounded-box border border-base-300 shadow-sm">
      <div className="flex-1">
        <span className="text-xl font-bold px-2">MyApp</span>
      </div>
      <div className="flex-none gap-2 px-2">
        <ThemeController />
        <Button color="primary" size="sm">Sign in</Button>
      </div>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/effects/theme-controller/theme-controller-swap.tsx",
  `"use client";

import * as React from "react";
import { Swap } from "@registry/components/react/effects/swap";

export function ThemeControllerSwap() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <label className="flex cursor-pointer items-center gap-3">
      <span className="text-sm font-medium">Light</span>
      <Swap
        effect="rotate"
        checked={isDark}
        onChange={setIsDark}
        className="text-base-content"
      >
        <Swap.On>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </Swap.On>
        <Swap.Off>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </Swap.Off>
      </Swap>
      <span className="text-sm font-medium">Dark</span>
    </label>
  );
}
`,
);

console.log("\nDone!");

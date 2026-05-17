// scripts/data-display/create-mockup-demos.mjs
// Run: node scripts/data-display/create-mockup-demos.mjs

import fs from "fs";
import path from "path";

const ROOT = process.cwd();

function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

// ─── Browser ──────────────────────────────────────────────────────────────────

write(
  "registry/demos/react/data-display/mockup/mockup-browser-default.tsx",
  `import { MockupBrowser } from "@registry/components/react/data-display/mockup";

export function MockupBrowserDefault() {
  return (
    <MockupBrowser>
      <MockupBrowser.Toolbar url="https://example.com" />
      <div className="grid place-content-center border-t border-base-300 h-52 text-base-content/40 text-sm">
        Page content goes here
      </div>
    </MockupBrowser>
  );
}
`,
);

write(
  "registry/demos/react/data-display/mockup/mockup-browser-colored.tsx",
  `import { MockupBrowser } from "@registry/components/react/data-display/mockup";

export function MockupBrowserColored() {
  return (
    <MockupBrowser className="bg-base-200 border-base-300">
      <MockupBrowser.Toolbar url="https://example.com" />
      <div className="grid place-content-center h-52 text-base-content/40 text-sm">
        Page content goes here
      </div>
    </MockupBrowser>
  );
}
`,
);

write(
  "registry/demos/react/data-display/mockup/mockup-browser-saas.tsx",
  `import { MockupBrowser } from "@registry/components/react/data-display/mockup";

export function MockupBrowserSaas() {
  return (
    <MockupBrowser className="border-base-300 shadow-xl">
      <MockupBrowser.Toolbar url="https://app.acme.io/dashboard" />
      <div className="border-t border-base-300 bg-base-200 p-6 h-56">
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[
            { label: "Revenue",  value: "$48,200", badge: "+24%" },
            { label: "Users",    value: "3,842",   badge: "+12%" },
            { label: "Requests", value: "1.2M",    badge: "+8%"  },
          ].map(({ label, value, badge }) => (
            <div key={label} className="card bg-base-100 shadow-sm">
              <div className="card-body py-3 px-4 gap-1">
                <p className="text-xs text-base-content/40">{label}</p>
                <div className="flex items-end gap-2">
                  <p className="text-xl font-bold">{value}</p>
                  <span className="text-xs text-success mb-0.5">{badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body py-3 px-4">
            <div className="flex gap-1 items-end h-10">
              {[40,65,45,80,55,90,70,95,60,85,75,100,60,80,70].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-primary/30" style={{ height: \`\${h}%\` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MockupBrowser>
  );
}
`,
);

// ─── Code ─────────────────────────────────────────────────────────────────────

write(
  "registry/demos/react/data-display/mockup/mockup-code-default.tsx",
  `import { MockupCode } from "@registry/components/react/data-display/mockup";

export function MockupCodeDefault() {
  return (
    <MockupCode>
      <MockupCode.Line prefix="$">npm install daisyui</MockupCode.Line>
    </MockupCode>
  );
}
`,
);

write(
  "registry/demos/react/data-display/mockup/mockup-code-multiline.tsx",
  `import { MockupCode } from "@registry/components/react/data-display/mockup";

export function MockupCodeMultiline() {
  return (
    <MockupCode>
      <MockupCode.Line prefix="$">npm install daisyui</MockupCode.Line>
      <MockupCode.Line prefix=">" className="text-warning">installing...</MockupCode.Line>
      <MockupCode.Line prefix=">" className="text-success">Done!</MockupCode.Line>
    </MockupCode>
  );
}
`,
);

write(
  "registry/demos/react/data-display/mockup/mockup-code-highlight.tsx",
  `import { MockupCode } from "@registry/components/react/data-display/mockup";

export function MockupCodeHighlight() {
  return (
    <MockupCode>
      <MockupCode.Line prefix="1">import daisyui from "daisyui"</MockupCode.Line>
      <MockupCode.Line prefix="2">{"  "}</MockupCode.Line>
      <MockupCode.Line prefix="3" className="bg-warning text-warning-content">
        plugins: [daisyui], // ← add this
      </MockupCode.Line>
      <MockupCode.Line prefix="4">{"  "}</MockupCode.Line>
      <MockupCode.Line prefix="5">export default config</MockupCode.Line>
    </MockupCode>
  );
}
`,
);

write(
  "registry/demos/react/data-display/mockup/mockup-code-colored.tsx",
  `import { MockupCode } from "@registry/components/react/data-display/mockup";

export function MockupCodeColored() {
  return (
    <MockupCode className="bg-primary text-primary-content">
      <MockupCode.Line prefix="$">npx create-next-app@latest</MockupCode.Line>
      <MockupCode.Line prefix=">" className="opacity-70">scaffolding project...</MockupCode.Line>
      <MockupCode.Line prefix=">" className="opacity-70">Done! Run: npm run dev</MockupCode.Line>
    </MockupCode>
  );
}
`,
);

// ─── Phone ────────────────────────────────────────────────────────────────────

write(
  "registry/demos/react/data-display/mockup/mockup-phone-default.tsx",
  `import { MockupPhone } from "@registry/components/react/data-display/mockup";

export function MockupPhoneDefault() {
  return (
    <MockupPhone>
      <MockupPhone.Camera />
      <MockupPhone.Display className="bg-neutral-900 text-white grid place-content-center text-sm">
        It&apos;s Glowtime.
      </MockupPhone.Display>
    </MockupPhone>
  );
}
`,
);

write(
  "registry/demos/react/data-display/mockup/mockup-phone-app.tsx",
  `import { MockupPhone } from "@registry/components/react/data-display/mockup";

export function MockupPhoneApp() {
  return (
    <MockupPhone>
      <MockupPhone.Camera />
      <MockupPhone.Display className="bg-base-200 flex flex-col">
        {/* Status bar */}
        <div className="bg-base-300 px-5 py-2 flex justify-between text-xs text-base-content/50">
          <span>9:41</span>
          <span>●●●</span>
        </div>
        {/* Header */}
        <div className="px-5 pt-4 pb-2">
          <p className="text-xs text-base-content/40">Good morning</p>
          <p className="font-bold text-lg">Dashboard</p>
        </div>
        {/* Cards */}
        <div className="px-4 flex flex-col gap-3">
          {[
            { label: "Balance",  value: "$4,820", color: "bg-primary text-primary-content"   },
            { label: "Spending", value: "$1,240", color: "bg-secondary text-secondary-content" },
          ].map(({ label, value, color }) => (
            <div key={label} className={\`card \${color} shadow-sm\`}>
              <div className="card-body py-3 px-4 gap-0">
                <p className="text-xs opacity-70">{label}</p>
                <p className="text-2xl font-extrabold">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </MockupPhone.Display>
    </MockupPhone>
  );
}
`,
);

// ─── Window ───────────────────────────────────────────────────────────────────

write(
  "registry/demos/react/data-display/mockup/mockup-window-default.tsx",
  `import { MockupWindow } from "@registry/components/react/data-display/mockup";

export function MockupWindowDefault() {
  return (
    <MockupWindow>
      <div className="grid place-content-center border-t border-base-300 h-52 text-base-content/40 text-sm">
        Window content goes here
      </div>
    </MockupWindow>
  );
}
`,
);

write(
  "registry/demos/react/data-display/mockup/mockup-window-colored.tsx",
  `import { MockupWindow } from "@registry/components/react/data-display/mockup";

export function MockupWindowColored() {
  return (
    <MockupWindow className="bg-base-200 border-base-300">
      <div className="grid place-content-center h-52 text-base-content/40 text-sm">
        Window content goes here
      </div>
    </MockupWindow>
  );
}
`,
);

console.log("\nDone!");

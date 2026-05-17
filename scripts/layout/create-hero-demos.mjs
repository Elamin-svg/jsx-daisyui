// scripts/layout/create-hero-demos.mjs
// Run: node scripts/layout/create-hero-demos.mjs

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
  "registry/demos/react/layout/hero/hero-centered.tsx",
  `import { Hero } from "@registry/components/react/layout/hero";
import Button from "@registry/components/react/forms/button";

export function HeroCentered() {
  return (
    <Hero className="min-h-80 rounded-box bg-base-200">
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6 text-base-content/60">
            Build something amazing. Ship fast, stay lean, and focus on what matters.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}
`,
);

write(
  "registry/demos/react/layout/hero/hero-with-figure.tsx",
  `import { Hero } from "@registry/components/react/layout/hero";
import Button from "@registry/components/react/forms/button";

export function HeroWithFigure() {
  return (
    <Hero className="min-h-80 rounded-box bg-base-200">
      <Hero.Content className="flex-col lg:flex-row gap-12">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-52 rounded-box shadow-2xl"
          alt="Hero"
        />
        <div>
          <h1 className="text-4xl font-bold">Something new just dropped.</h1>
          <p className="py-4 text-base-content/60 max-w-sm">
            We just launched a feature you've been waiting for. Check it out and let us know what you think.
          </p>
          <Button color="primary">Explore now</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}
`,
);

write(
  "registry/demos/react/layout/hero/hero-with-figure-reversed.tsx",
  `import { Hero } from "@registry/components/react/layout/hero";
import Button from "@registry/components/react/forms/button";

export function HeroWithFigureReversed() {
  return (
    <Hero className="min-h-80 rounded-box bg-base-200">
      <Hero.Content className="flex-col lg:flex-row-reverse gap-12">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-52 rounded-box shadow-2xl"
          alt="Hero"
        />
        <div>
          <h1 className="text-4xl font-bold">Something new just dropped.</h1>
          <p className="py-4 text-base-content/60 max-w-sm">
            We just launched a feature you've been waiting for. Check it out and let us know what you think.
          </p>
          <Button color="primary">Explore now</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}
`,
);

write(
  "registry/demos/react/layout/hero/hero-with-form.tsx",
  `import { Hero } from "@registry/components/react/layout/hero";
import Button from "@registry/components/react/forms/button";
import {Input} from "@registry/components/react/forms/input";
import {Label} from "@registry/components/react/forms/label";

export function HeroWithForm() {
  return (
    <Hero className="min-h-80 rounded-box bg-base-200">
      <Hero.Content className="flex-col lg:flex-row-reverse gap-12">
        <div className="text-center lg:text-left max-w-sm">
          <h1 className="text-4xl font-bold">Welcome back.</h1>
          <p className="py-4 text-base-content/60">
            Sign in to your account to continue where you left off.
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-base-100">
          <div className="card-body">
            <fieldset className="fieldset gap-1">
              <Label>Email</Label>
              <Input type="email" placeholder="you@example.com" />
              <Label className="mt-2">Password</Label>
              <Input type="password" placeholder="••••••••" />
              <a className="link link-hover text-sm mt-1">Forgot password?</a>
              <Button color="primary" className="mt-4">Sign in</Button>
            </fieldset>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
}
`,
);

write(
  "registry/demos/react/layout/hero/hero-with-overlay.tsx",
  `import { Hero } from "@registry/components/react/layout/hero";
import Button from "@registry/components/react/forms/button";

export function HeroWithOverlay() {
  return (
    <Hero
      className="min-h-80 rounded-box"
      backgroundImage="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
    >
      <Hero.Overlay className="rounded-box" />
      <Hero.Content className="text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-4 text-5xl font-bold">Hello there</h1>
          <p className="mb-6 text-neutral-content/80">
            Build something amazing. Ship fast, stay lean, and focus on what matters.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}
`,
);

// ─── SaaS examples ────────────────────────────────────────────────────────────

write(
  "registry/demos/react/layout/hero/hero-saas-centered.tsx",
  `import { Hero } from "@registry/components/react/layout/hero";
import Button from "@registry/components/react/forms/button";

export function HeroSaasCentered() {
  return (
    <Hero className="min-h-96 rounded-box bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10">
      <Hero.Content className="text-center flex-col gap-6">
        <div className="badge badge-primary badge-outline text-xs font-medium tracking-wide px-3 py-2">
          Now in public beta
        </div>
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
            Ship features,{" "}
            <span className="text-primary">not infrastructure.</span>
          </h1>
          <p className="mt-4 text-lg text-base-content/60">
            Focus on your product. We handle auth, billing, and deployment so your team can move faster from day one.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button color="primary" size="lg">Start for free</Button>
          <Button variant="ghost" size="lg">See how it works →</Button>
        </div>
        <p className="text-xs text-base-content/40">No credit card required · Free up to 3 projects</p>
      </Hero.Content>
    </Hero>
  );
}
`,
);

write(
  "registry/demos/react/layout/hero/hero-saas-split.tsx",
  `import { Hero } from "@registry/components/react/layout/hero";
import Button from "@registry/components/react/forms/button";

export function HeroSaasSplit() {
  return (
    <Hero className="min-h-96 rounded-box bg-base-200">
      <Hero.Content className="flex-col lg:flex-row gap-16 items-center">
        <div className="max-w-md">
          <div className="badge badge-secondary badge-outline text-xs mb-4 px-3 py-2">
            Trusted by 10,000+ teams
          </div>
          <h1 className="text-4xl font-extrabold leading-snug">
            Analytics that actually make sense.
          </h1>
          <p className="mt-4 text-base-content/60">
            Understand your users in minutes, not weeks. Beautiful dashboards, zero setup.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button color="primary">Get started free</Button>
            <Button variant="outline">Book a demo</Button>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["bg-primary", "bg-secondary", "bg-accent", "bg-neutral"].map((c) => (
                <div key={c} className={\`size-8 rounded-full border-2 border-base-200 \${c}\`} />
              ))}
            </div>
            <span className="text-sm text-base-content/60">Join 10k+ happy teams</span>
          </div>
        </div>

        {/* Mock dashboard card */}
        <div className="w-full max-w-sm shrink-0">
          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-base-content/60">Monthly Revenue</span>
                <span className="badge badge-success badge-sm">+24%</span>
              </div>
              <p className="text-4xl font-bold">$48,200</p>
              <div className="flex gap-1 items-end h-16">
                {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-primary/20"
                    style={{ height: \`\${h}%\` }}
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-base-200">
                <div>
                  <p className="text-xs text-base-content/40">Active users</p>
                  <p className="font-semibold">3,842</p>
                </div>
                <div>
                  <p className="text-xs text-base-content/40">Conversion</p>
                  <p className="font-semibold">5.4%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
}
`,
);

console.log("\nDone!");

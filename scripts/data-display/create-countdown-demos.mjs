// scripts/data-display/create-countdown-demos.mjs
import fs from "fs";
import path from "path";

const ROOT = process.cwd();

function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

const BASE = "registry/demos/react/data-display/countdown";

// ─── countdown-simple.tsx ─────────────────────────────────────────────────────
write(
  `${BASE}/countdown-simple.tsx`,
  `"use client";

import { Countdown, useCountdown } from "@registry/components/react/data-display/countdown";

export function CountdownSimple() {
  const seconds = useCountdown(59);
  return (
    <Countdown className="font-mono text-6xl">
      <Countdown.Value value={seconds} />
    </Countdown>
  );
}
`,
);

// ─── countdown-clock.tsx ──────────────────────────────────────────────────────
write(
  `${BASE}/countdown-clock.tsx`,
  `"use client";

import { Countdown, useCountdownTimer } from "@registry/components/react/data-display/countdown";

export function CountdownClock() {
  const { hours, minutes, seconds } = useCountdownTimer(1 * 3600 + 30 * 60);
  return <Countdown.Clock hours={hours} minutes={minutes} seconds={seconds} colons size="text-4xl" />;
}
`,
);

// ─── countdown-timer.tsx ──────────────────────────────────────────────────────
write(
  `${BASE}/countdown-timer.tsx`,
  `"use client";

import { Countdown, useCountdownTimer } from "@registry/components/react/data-display/countdown";

export function CountdownTimer() {
  const { days, hours, minutes, seconds } = useCountdownTimer(3 * 86400 + 12 * 3600 + 45 * 60);
  return <Countdown.Timer days={days} hours={hours} minutes={minutes} seconds={seconds} size="text-5xl" />;
}
`,
);

// ─── countdown-timer-boxed.tsx ────────────────────────────────────────────────
write(
  `${BASE}/countdown-timer-boxed.tsx`,
  `"use client";

import { Countdown, useCountdownTimer } from "@registry/components/react/data-display/countdown";

export function CountdownTimerBoxed() {
  const { days, hours, minutes, seconds } = useCountdownTimer(3 * 86400 + 12 * 3600 + 45 * 60);
  return <Countdown.Timer days={days} hours={hours} minutes={minutes} seconds={seconds} boxed size="text-5xl" />;
}
`,
);

// ─── countdown-ecommerce.tsx ──────────────────────────────────────────────────
write(
  `${BASE}/countdown-ecommerce.tsx`,
  `"use client";

import { Countdown, useCountdownTimer } from "@registry/components/react/data-display/countdown";
import Button from "@registry/components/react/forms/button";

export function CountdownEcommerce() {
  const { hours, minutes, seconds } = useCountdownTimer(2 * 3600);
  return (
    <div className="card bg-base-100 shadow-md w-72 border border-base-200">
      <div className="relative">
        <div className="bg-base-200 h-40 rounded-t-box flex items-center justify-center text-4xl">
          👟
        </div>
        <span className="badge badge-error absolute top-3 left-3 font-semibold">−40%</span>
      </div>
      <div className="card-body gap-2 p-4">
        <h2 className="card-title text-base">Air Max Sneaker</h2>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold">€59.99</span>
          <span className="text-sm line-through text-base-content/40">€99.99</span>
        </div>
        <div className="bg-error/10 rounded-box px-3 py-2 flex items-center justify-between mt-1">
          <span className="text-xs text-error font-medium">Deal ends in</span>
          <Countdown className="font-mono text-error text-lg font-semibold">
            <Countdown.Value value={hours} digits={2} />h&nbsp;
            <Countdown.Value value={minutes} digits={2} />m&nbsp;
            <Countdown.Value value={seconds} digits={2} />s
          </Countdown>
        </div>
        <Button color="error" size="sm" className="mt-1 w-full">Add to cart</Button>
      </div>
    </div>
  );
}
`,
);

console.log("\nDone!");

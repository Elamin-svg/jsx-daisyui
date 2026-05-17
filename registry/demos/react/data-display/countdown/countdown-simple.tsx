"use client";

import { Countdown, useCountdown } from "@registry/components/react/data-display/countdown";

export function CountdownSimple() {
  const seconds = useCountdown(59);
  return (
    <Countdown className="font-mono text-6xl">
      <Countdown.Value value={seconds} />
    </Countdown>
  );
}

"use client";

import { Countdown, useCountdownTimer } from "@registry/components/react/data-display/countdown";

export function CountdownClock() {
  const { hours, minutes, seconds } = useCountdownTimer(1 * 3600 + 30 * 60);
  return <Countdown.Clock hours={hours} minutes={minutes} seconds={seconds} colons size="text-4xl" />;
}

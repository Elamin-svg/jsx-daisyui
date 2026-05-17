"use client";

import { Countdown, useCountdownTimer } from "@registry/components/react/data-display/countdown";

export function CountdownTimerBoxed() {
  const { days, hours, minutes, seconds } = useCountdownTimer(3 * 86400 + 12 * 3600 + 45 * 60);
  return <Countdown.Timer days={days} hours={hours} minutes={minutes} seconds={seconds} boxed size="text-5xl" />;
}

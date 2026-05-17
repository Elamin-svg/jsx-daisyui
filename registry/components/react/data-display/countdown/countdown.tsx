"use client";

import * as React from "react";
import { tv } from "tailwind-variants";

const countdownVariants = tv({
  slots: {
    root: "countdown",
    timerGrid: "grid grid-flow-col gap-5 text-center auto-cols-max",
    timerUnit: "flex flex-col",
    timerUnitBoxed: "flex flex-col p-2 bg-neutral rounded-box text-neutral-content",
  },
});

export type CountdownProps = Omit<React.ComponentProps<"span">, "color">;

const Countdown = React.forwardRef<HTMLSpanElement, CountdownProps>(
  ({ className, ...props }, ref) => {
    const { root } = countdownVariants();
    return <span ref={ref} className={root({ className })} {...props} />;
  }
);

Countdown.displayName = "Countdown";

export type CountdownValueProps = {
  value: number;
  digits?: 2 | 3;
  className?: string;
  "aria-label"?: string;
};

const CountdownValue = React.forwardRef<HTMLSpanElement, CountdownValueProps>(
  ({ value, digits, className, "aria-label": ariaLabel }, ref) => {
    const style: React.CSSProperties & Record<string, number> = {
      "--value": value,
      ...(digits != null ? { "--digits": digits } : {}),
    };
    return (
      <span
        ref={ref}
        style={style}
        aria-live="polite"
        aria-label={ariaLabel ?? String(value)}
        className={className}
      >
        {value}
      </span>
    );
  }
);

CountdownValue.displayName = "CountdownValue";

export type CountdownClockProps = {
  hours?: number;
  minutes?: number;
  seconds?: number;
  colons?: boolean;
  size?: string;
  className?: string;
};

const countdownClockVariants = tv({
  base: "countdown font-mono",
});

const CountdownClock = React.forwardRef<HTMLSpanElement, CountdownClockProps>(
  ({ hours = 0, minutes = 0, seconds = 0, colons = false, size = "text-2xl", className }, ref) => (
    <span
      ref={ref}
      className={countdownClockVariants({ className: `${size}${className ? ` ${className}` : ""}` })}
    >
      <CountdownValue value={hours} aria-label={String(hours)} />
      {colons ? ":" : "h "}
      <CountdownValue
        value={minutes}
        digits={colons ? 2 : undefined}
        aria-label={String(minutes)}
      />
      {colons ? ":" : "m "}
      <CountdownValue
        value={seconds}
        digits={2}
        aria-label={String(seconds)}
      />
      {!colons && "s"}
    </span>
  )
);

CountdownClock.displayName = "CountdownClock";

type TimerUnit = { value: number; label: string };

export type CountdownTimerProps = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  boxed?: boolean;
  size?: string;
  className?: string;
};

const CountdownTimer = React.forwardRef<HTMLDivElement, CountdownTimerProps>(
  ({ days, hours, minutes, seconds, boxed = false, size = "text-5xl", className }, ref) => {
    const { timerGrid, timerUnit, timerUnitBoxed } = countdownVariants();
    const units: TimerUnit[] = (
      [
        { value: days, label: "days" },
        { value: hours, label: "hours" },
        { value: minutes, label: "min" },
        { value: seconds, label: "sec" },
      ] as Array<{ value: number | undefined; label: string }>
    ).filter((u): u is TimerUnit => u.value !== undefined);

    return (
      <div ref={ref} className={timerGrid({ className })}>
        {units.map(({ value, label }) => (
          <div key={label} className={boxed ? timerUnitBoxed() : timerUnit()}>
            <Countdown className={`font-mono ${size}`}>
              <CountdownValue value={value} aria-label={String(value)} />
            </Countdown>
            <span>{label}</span>
          </div>
        ))}
      </div>
    );
  }
);

CountdownTimer.displayName = "CountdownTimer";

export type CountdownTimerResult = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
};

export function useCountdown(initial: number, interval = 1000): number {
  const [value, setValue] = React.useState(initial);
  const initialRef = React.useRef(initial);
  initialRef.current = initial;
  React.useEffect(() => {
    const id = setInterval(
      () => setValue((v) => (v > 0 ? v - 1 : initialRef.current)),
      interval,
    );
    return () => clearInterval(id);
  }, [interval]);
  return value;
}

export function useCountdownTimer(
  totalSeconds: number,
  interval = 1000,
): CountdownTimerResult {
  const [remaining, setRemaining] = React.useState(totalSeconds);
  const initializedRef = React.useRef(false);
  React.useEffect(() => {
    if (!initializedRef.current) { initializedRef.current = true; return; }
    setRemaining(totalSeconds);
  }, [totalSeconds]);
  React.useEffect(() => {
    if (remaining <= 0) return;
    const id = setInterval(() => setRemaining((r) => Math.max(0, r - 1)), interval);
    return () => clearInterval(id);
  }, [remaining, interval]);
  return {
    days: Math.floor(remaining / 86400),
    hours: Math.floor((remaining % 86400) / 3600),
    minutes: Math.floor((remaining % 3600) / 60),
    seconds: remaining % 60,
    total: remaining,
  };
}

const CountdownComponent = Object.assign(Countdown, {
  Value: CountdownValue,
  Clock: CountdownClock,
  Timer: CountdownTimer,
});

export { CountdownComponent as Countdown };
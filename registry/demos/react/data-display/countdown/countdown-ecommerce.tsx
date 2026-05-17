"use client";

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

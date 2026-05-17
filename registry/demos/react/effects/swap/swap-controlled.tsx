"use client";

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

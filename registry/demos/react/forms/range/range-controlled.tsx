"use client";

import * as React from "react";
import Range from "@registry/components/react/forms/range";

export function RangeControlled() {
  const [value, setValue] = React.useState(50);

  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <Range
        color="primary"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <p className="text-sm text-base-content/60 text-center">
        Value: <strong>{value}</strong>
      </p>
    </div>
  );
}

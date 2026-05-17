"use client";

import * as React from "react";
import Select from "@registry/components/react/forms/select";

export function SelectControlled() {
  const [value, setValue] = React.useState("React");

  return (
    <div className="flex flex-col gap-4">
      <Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        color="primary"
      >
        <option>React</option>
        <option>Vue</option>
        <option>Svelte</option>
        <option>Angular</option>
      </Select>
      <p className="text-sm text-base-content/60">
        Selected: <strong>{value}</strong>
      </p>
    </div>
  );
}

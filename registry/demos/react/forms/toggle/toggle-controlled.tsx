"use client";

import * as React from "react";
import Toggle from "@registry/components/react/forms/toggle";
import { Label } from "@registry/components/react/forms/label";

export function ToggleControlled() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Label className="flex items-center gap-3">
        <Toggle
          color="primary"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span className="text-sm">{checked ? "Enabled" : "Disabled"}</span>
      </Label>
      <p className="text-sm text-base-content/60">
        State: <strong>{checked ? "on" : "off"}</strong>
      </p>
    </div>
  );
}

"use client";

import * as React from "react";
import Checkbox from "@registry/components/react/forms/checkbox";

export function CheckboxControlled() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <label className="flex items-center gap-3">
        <Checkbox
          color="primary"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span className="text-sm">Accept terms and conditions</span>
      </label>
      <p className="text-sm text-base-content/60">
        State: <strong>{checked ? "checked" : "unchecked"}</strong>
      </p>
    </div>
  );
}

"use client";

import * as React from "react";
import Checkbox from "@registry/components/react/forms/checkbox";

export function CheckboxIndeterminate() {
  return (
    <div className="flex items-center gap-4">
      <Checkbox indeterminate />
      <Checkbox indeterminate color="primary" />
    </div>
  );
}

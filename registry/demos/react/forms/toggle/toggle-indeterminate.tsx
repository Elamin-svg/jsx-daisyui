"use client";

import * as React from "react";
import Toggle from "@registry/components/react/forms/toggle";

export function ToggleIndeterminate() {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = true;
  }, []);

  return <Toggle ref={ref} onClick={(e) => e.preventDefault()} />;
}

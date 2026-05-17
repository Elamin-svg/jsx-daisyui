"use client";

import { toast, Toaster } from "@registry/components/react/feedback/toast";
import Button from "@registry/components/react/forms/button";

export function ToastDefault() {
  return (
    <div className="flex flex-wrap gap-2">
      <Toaster />
      <Button onClick={() => toast("Event has been created")}>Default</Button>
      <Button color="info" onClick={() => toast.info("New message received")}>Info</Button>
      <Button color="success" onClick={() => toast.success("Changes saved successfully")}>Success</Button>
      <Button color="warning" onClick={() => toast.warning("Low storage remaining")}>Warning</Button>
      <Button color="error" onClick={() => toast.error("Failed to save changes")}>Error</Button>
    </div>
  );
}

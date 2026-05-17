import { Tooltip } from "@registry/components/react/feedback/tooltip";
import Button from "@registry/components/react/forms/button";

export function TooltipDefault() {
  return (
    <Tooltip content="Hello, tooltip!">
      <Tooltip.Trigger>
        <Button>Hover me</Button>
      </Tooltip.Trigger>
    </Tooltip>
  );
}

import { Tooltip } from "@registry/components/react/feedback/tooltip";
import Button from "@registry/components/react/forms/button";

export function TooltipColors() {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      <Tooltip content="Primary" color="primary">
        <Tooltip.Trigger>
          <Button color="primary" size="sm">Primary</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Secondary" color="secondary">
        <Tooltip.Trigger>
          <Button color="secondary" size="sm">Secondary</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Accent" color="accent">
        <Tooltip.Trigger>
          <Button color="accent" size="sm">Accent</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Info" color="info">
        <Tooltip.Trigger>
          <Button color="info" size="sm">Info</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Success" color="success">
        <Tooltip.Trigger>
          <Button color="success" size="sm">Success</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Warning" color="warning">
        <Tooltip.Trigger>
          <Button color="warning" size="sm">Warning</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Error" color="error">
        <Tooltip.Trigger>
          <Button color="error" size="sm">Error</Button>
        </Tooltip.Trigger>
      </Tooltip>
    </div>
  );
}

import { Tooltip } from "@registry/components/react/feedback/tooltip";
import Button from "@registry/components/react/forms/button";

export function TooltipPlacements() {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-8">
      <Tooltip content="Top tooltip" placement="top">
        <Tooltip.Trigger>
          <Button size="sm">Top</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Bottom tooltip" placement="bottom">
        <Tooltip.Trigger>
          <Button size="sm">Bottom</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Left tooltip" placement="left">
        <Tooltip.Trigger>
          <Button size="sm">Left</Button>
        </Tooltip.Trigger>
      </Tooltip>
      <Tooltip content="Right tooltip" placement="right">
        <Tooltip.Trigger>
          <Button size="sm">Right</Button>
        </Tooltip.Trigger>
      </Tooltip>
    </div>
  );
}

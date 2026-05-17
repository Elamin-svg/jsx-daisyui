import { Swap } from "@registry/components/react/effects/swap";

export function SwapText() {
  return (
    <div className="flex gap-6">
      <Swap defaultChecked className="text-lg font-semibold">
        <Swap.On className="text-success">Active</Swap.On>
        <Swap.Off className="text-error">Inactive</Swap.Off>
      </Swap>
      <Swap effect="flip" className="text-lg font-semibold">
        <Swap.On className="text-primary">Subscribed</Swap.On>
        <Swap.Off className="text-base-content/50">Unsubscribed</Swap.Off>
      </Swap>
    </div>
  );
}

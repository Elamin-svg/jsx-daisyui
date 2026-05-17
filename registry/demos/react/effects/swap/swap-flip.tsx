import { Swap } from "@registry/components/react/effects/swap";

export function SwapFlip() {
  return (
    <Swap effect="flip" defaultChecked>
      <Swap.On className="text-4xl">😄</Swap.On>
      <Swap.Off className="text-4xl">😑</Swap.Off>
    </Swap>
  );
}

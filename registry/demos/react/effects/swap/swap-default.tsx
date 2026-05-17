import { Swap } from "@registry/components/react/effects/swap";

export function SwapDefault() {
  return (
    <Swap defaultChecked>
      <Swap.On className="text-xl font-bold">ON</Swap.On>
      <Swap.Off className="text-xl font-bold">OFF</Swap.Off>
    </Swap>
  );
}

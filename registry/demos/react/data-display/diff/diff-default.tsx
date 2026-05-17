import { Diff } from "@registry/components/react/data-display/diff";

export function DiffDefault() {
  return (
    <Diff className="w-full max-w-sm">
      <Diff.Item1>
        <img alt="Before" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
      </Diff.Item1>
      <Diff.Item2>
        <img alt="After" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-bw.webp" />
      </Diff.Item2>
      <Diff.Resizer />
    </Diff>
  );
}

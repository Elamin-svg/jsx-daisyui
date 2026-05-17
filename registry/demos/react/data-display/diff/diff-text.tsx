import { Diff } from "@registry/components/react/data-display/diff";

export function DiffText() {
  return (
    <Diff aspect="1/1" className="w-64">
      <Diff.Item1 className="bg-base-200 text-base-content grid place-content-center text-3xl font-black">
        daisyUI
      </Diff.Item1>
      <Diff.Item2 className="bg-primary text-primary-content grid place-content-center text-3xl font-black">
        daisyUI
      </Diff.Item2>
      <Diff.Resizer />
    </Diff>
  );
}

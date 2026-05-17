import { MockupWindow } from "@registry/components/react/data-display/mockup";

export function MockupWindowColored() {
  return (
    <MockupWindow className="bg-base-200 border-base-300">
      <div className="grid place-content-center h-52 text-base-content/40 text-sm">
        Window content goes here
      </div>
    </MockupWindow>
  );
}

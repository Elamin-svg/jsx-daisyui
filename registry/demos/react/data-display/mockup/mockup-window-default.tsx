import { MockupWindow } from "@registry/components/react/data-display/mockup";

export function MockupWindowDefault() {
  return (
    <MockupWindow>
      <div className="grid place-content-center border-t border-base-300 h-52 text-base-content/40 text-sm">
        Window content goes here
      </div>
    </MockupWindow>
  );
}

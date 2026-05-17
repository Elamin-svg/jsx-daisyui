import { MockupBrowser } from "@registry/components/react/data-display/mockup";

export function MockupBrowserColored() {
  return (
    <MockupBrowser className="bg-base-200 border-base-300">
      <MockupBrowser.Toolbar url="https://example.com" />
      <div className="grid place-content-center h-52 text-base-content/40 text-sm">
        Page content goes here
      </div>
    </MockupBrowser>
  );
}

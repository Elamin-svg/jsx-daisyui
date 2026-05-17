import { MockupBrowser } from "@registry/components/react/data-display/mockup";

export function MockupBrowserDefault() {
  return (
    <MockupBrowser>
      <MockupBrowser.Toolbar url="https://example.com" />
      <div className="grid place-content-center border-t border-base-300 h-52 text-base-content/40 text-sm">
        Page content goes here
      </div>
    </MockupBrowser>
  );
}

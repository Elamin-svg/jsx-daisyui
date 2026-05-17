import { MockupCode } from "@registry/components/react/data-display/mockup";

export function MockupCodeHighlight() {
  return (
    <MockupCode>
      <MockupCode.Line prefix="1">import daisyui from "daisyui"</MockupCode.Line>
      <MockupCode.Line prefix="2">{"  "}</MockupCode.Line>
      <MockupCode.Line prefix="3" className="bg-warning text-warning-content">
        plugins: [daisyui], // ← add this
      </MockupCode.Line>
      <MockupCode.Line prefix="4">{"  "}</MockupCode.Line>
      <MockupCode.Line prefix="5">export default config</MockupCode.Line>
    </MockupCode>
  );
}

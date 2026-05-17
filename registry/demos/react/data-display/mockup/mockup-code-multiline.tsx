import { MockupCode } from "@registry/components/react/data-display/mockup";

export function MockupCodeMultiline() {
  return (
    <MockupCode>
      <MockupCode.Line prefix="$">npm install daisyui</MockupCode.Line>
      <MockupCode.Line prefix=">" className="text-warning">installing...</MockupCode.Line>
      <MockupCode.Line prefix=">" className="text-success">Done!</MockupCode.Line>
    </MockupCode>
  );
}

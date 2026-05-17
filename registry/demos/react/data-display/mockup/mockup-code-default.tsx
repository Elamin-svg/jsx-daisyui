import { MockupCode } from "@registry/components/react/data-display/mockup";

export function MockupCodeDefault() {
  return (
    <MockupCode>
      <MockupCode.Line prefix="$">npm install daisyui</MockupCode.Line>
    </MockupCode>
  );
}

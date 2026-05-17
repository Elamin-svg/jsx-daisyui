import { MockupCode } from "@registry/components/react/data-display/mockup";

export function MockupCodeColored() {
  return (
    <MockupCode className="bg-primary text-primary-content">
      <MockupCode.Line prefix="$">npx create-next-app@latest</MockupCode.Line>
      <MockupCode.Line prefix=">" className="opacity-70">scaffolding project...</MockupCode.Line>
      <MockupCode.Line prefix=">" className="opacity-70">Done! Run: npm run dev</MockupCode.Line>
    </MockupCode>
  );
}

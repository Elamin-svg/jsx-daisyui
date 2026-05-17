import { MockupPhone } from "@registry/components/react/data-display/mockup";

export function MockupPhoneDefault() {
  return (
    <MockupPhone>
      <MockupPhone.Camera />
      <MockupPhone.Display className="bg-neutral-900 text-white grid place-content-center text-sm">
        It&apos;s Glowtime.
      </MockupPhone.Display>
    </MockupPhone>
  );
}

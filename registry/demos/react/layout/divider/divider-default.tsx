import Divider from "@registry/components/react/layout/divider";

export function DividerDefault() {
  return (
    <div className="flex flex-col w-full max-w-sm">
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        Content
      </div>
      <Divider>OR</Divider>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        Content
      </div>
    </div>
  );
}

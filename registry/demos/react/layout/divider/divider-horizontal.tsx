import Divider from "@registry/components/react/layout/divider";

export function DividerHorizontal() {
  return (
    <div className="flex w-full max-w-sm">
      <div className="grid h-20 grow card bg-base-300 rounded-box place-items-center">
        Content
      </div>
      <Divider direction="horizontal">OR</Divider>
      <div className="grid h-20 grow card bg-base-300 rounded-box place-items-center">
        Content
      </div>
    </div>
  );
}

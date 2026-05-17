import Divider from "@registry/components/react/layout/divider";

export function DividerPlacements() {
  return (
    <div className="flex flex-col w-full max-w-sm gap-4">
      <Divider placement="start">Start</Divider>
      <Divider placement="center">Center</Divider>
      <Divider placement="end">End</Divider>
    </div>
  );
}

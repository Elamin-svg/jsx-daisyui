import Divider from "@registry/components/react/layout/divider";

export function DividerResponsive() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-2xl gap-4 lg:gap-0">
      <div className="grid grow h-32 card bg-base-300 rounded-box place-items-center">
        Content
      </div>
      <Divider direction="vertical" className="lg:!divider-horizontal">
        OR
      </Divider>
      <div className="grid grow h-32 card bg-base-300 rounded-box place-items-center">
        Content
      </div>
    </div>
  );
}

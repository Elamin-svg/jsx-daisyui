import Divider from "@registry/components/react/layout/divider";

export function DividerColors() {
  return (
    <div className="flex flex-col w-full max-w-sm gap-4">
      <Divider>Default</Divider>
      <Divider color="neutral">Neutral</Divider>
      <Divider color="primary">Primary</Divider>
      <Divider color="secondary">Secondary</Divider>
      <Divider color="accent">Accent</Divider>
      <Divider color="success">Success</Divider>
      <Divider color="warning">Warning</Divider>
      <Divider color="info">Info</Divider>
      <Divider color="error">Error</Divider>
    </div>
  );
}

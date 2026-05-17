import Button from "@registry/components/react/forms/button";

export function ButtonWide() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Button color="primary" wide>Wide button</Button>
      <Button color="secondary" block>Block button</Button>
    </div>
  );
}

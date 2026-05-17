import Button from "@registry/components/react/forms/button";

export function ButtonLoading() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button color="primary" loading>Loading</Button>
      <Button color="secondary" loading>Loading</Button>
      <Button variant="ghost" loading>Loading</Button>
    </div>
  );
}

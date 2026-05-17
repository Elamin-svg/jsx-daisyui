import Stack from "@registry/components/react/layout/stack";

export function StackDefault() {
  return (
    <Stack className="h-20 w-32">
      <div className="grid rounded-box bg-primary text-primary-content place-content-center">1</div>
      <div className="grid rounded-box bg-accent text-accent-content place-content-center">2</div>
      <div className="grid rounded-box bg-secondary text-secondary-content place-content-center">3</div>
    </Stack>
  );
}

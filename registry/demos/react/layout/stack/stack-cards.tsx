import Stack from "@registry/components/react/layout/stack";

export function StackCards() {
  return (
    <Stack>
      <div className="card bg-base-200 text-center shadow-md">
        <div className="card-body">A</div>
      </div>
      <div className="card bg-base-200 text-center shadow">
        <div className="card-body">B</div>
      </div>
      <div className="card bg-base-200 text-center shadow-sm">
        <div className="card-body">C</div>
      </div>
    </Stack>
  );
}

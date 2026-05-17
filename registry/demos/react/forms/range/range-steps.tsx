import Range from "@registry/components/react/forms/range";

export function RangeSteps() {
  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      <Range color="primary" min={0} max={100} step={25} defaultValue={50} />
      <div className="flex justify-between text-xs text-base-content/60 px-1">
        <span>0</span>
        <span>25</span>
        <span>50</span>
        <span>75</span>
        <span>100</span>
      </div>
    </div>
  );
}

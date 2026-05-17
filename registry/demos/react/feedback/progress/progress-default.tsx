import Progress from "@registry/components/react/feedback/progress";

export function ProgressDefault() {
  return (
    <div className="flex flex-col gap-2 items-center w-full max-w-sm">
      <Progress value={0} max={100} className="w-full" />
      <Progress value={10} max={100} className="w-full" />
      <Progress value={40} max={100} className="w-full" />
      <Progress value={70} max={100} className="w-full" />
      <Progress value={100} max={100} className="w-full" />
    </div>
  );
}

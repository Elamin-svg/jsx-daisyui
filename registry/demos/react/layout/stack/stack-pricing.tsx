import Stack from "@registry/components/react/layout/stack";
import Button from "@registry/components/react/forms/button";

export function StackPricing() {
  return (
    <Stack className="w-72">
      <div className="card bg-base-300 shadow-sm">
        <div className="card-body py-5">
          <p className="text-sm text-base-content/40 font-medium">Enterprise</p>
          <p className="text-2xl font-bold">Custom</p>
        </div>
      </div>
      <div className="card bg-base-200 shadow-md">
        <div className="card-body py-5">
          <p className="text-sm text-base-content/40 font-medium">Pro</p>
          <p className="text-2xl font-bold">$49 <span className="text-sm font-normal text-base-content/50">/ mo</span></p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl border border-primary/20">
        <div className="card-body py-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-primary">Starter</p>
            <span className="badge badge-primary badge-sm">Popular</span>
          </div>
          <p className="text-3xl font-extrabold">$9 <span className="text-sm font-normal text-base-content/50">/ mo</span></p>
          <p className="text-sm text-base-content/60">Everything you need to get started.</p>
          <Button color="primary" size="sm" className="mt-2">Get started</Button>
        </div>
      </div>
    </Stack>
  );
}

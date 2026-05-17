import { Hero } from "@registry/components/react/layout/hero";
import Button from "@registry/components/react/forms/button";

export function HeroSaasSplit() {
  return (
    <Hero className="min-h-96 rounded-box bg-base-200">
      <Hero.Content className="flex-col lg:flex-row gap-16 items-center">
        <div className="max-w-md">
          <div className="badge badge-secondary badge-outline text-xs mb-4 px-3 py-2">
            Trusted by 10,000+ teams
          </div>
          <h1 className="text-4xl font-extrabold leading-snug">
            Analytics that actually make sense.
          </h1>
          <p className="mt-4 text-base-content/60">
            Understand your users in minutes, not weeks. Beautiful dashboards, zero setup.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button color="primary">Get started free</Button>
            <Button variant="outline">Book a demo</Button>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["bg-primary", "bg-secondary", "bg-accent", "bg-neutral"].map((c) => (
                <div key={c} className={`size-8 rounded-full border-2 border-base-200 ${c}`} />
              ))}
            </div>
            <span className="text-sm text-base-content/60">Join 10k+ happy teams</span>
          </div>
        </div>

        {/* Mock dashboard card */}
        <div className="w-full max-w-sm shrink-0">
          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-base-content/60">Monthly Revenue</span>
                <span className="badge badge-success badge-sm">+24%</span>
              </div>
              <p className="text-4xl font-bold">$48,200</p>
              <div className="flex gap-1 items-end h-16">
                {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-primary/20"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-base-200">
                <div>
                  <p className="text-xs text-base-content/40">Active users</p>
                  <p className="font-semibold">3,842</p>
                </div>
                <div>
                  <p className="text-xs text-base-content/40">Conversion</p>
                  <p className="font-semibold">5.4%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
}

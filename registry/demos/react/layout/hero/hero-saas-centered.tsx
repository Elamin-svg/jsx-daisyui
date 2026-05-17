import { Hero } from "@registry/components/react/layout/hero";
import Button from "@registry/components/react/forms/button";

export function HeroSaasCentered() {
  return (
    <Hero className="min-h-96 rounded-box bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10">
      <Hero.Content className="text-center flex-col gap-6">
        <div className="badge badge-primary badge-outline text-xs font-medium tracking-wide px-3 py-2">
          Now in public beta
        </div>
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
            Ship features,{" "}
            <span className="text-primary">not infrastructure.</span>
          </h1>
          <p className="mt-4 text-lg text-base-content/60">
            Focus on your product. We handle auth, billing, and deployment so your team can move faster from day one.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button color="primary" size="lg">Start for free</Button>
          <Button variant="ghost" size="lg">See how it works →</Button>
        </div>
        <p className="text-xs text-base-content/40">No credit card required · Free up to 3 projects</p>
      </Hero.Content>
    </Hero>
  );
}

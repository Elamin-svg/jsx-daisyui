import { Hero } from "@registry/components/react/layout/hero";
import Button from "@registry/components/react/forms/button";

export function HeroCentered() {
  return (
    <Hero className="min-h-80 rounded-box bg-base-200">
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6 text-base-content/60">
            Build something amazing. Ship fast, stay lean, and focus on what matters.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}

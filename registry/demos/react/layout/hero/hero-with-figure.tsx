import { Hero } from "@registry/components/react/layout/hero";
import Button from "@registry/components/react/forms/button";

export function HeroWithFigure() {
  return (
    <Hero className="min-h-80 rounded-box bg-base-200">
      <Hero.Content className="flex-col lg:flex-row gap-12">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-52 rounded-box shadow-2xl"
          alt="Hero"
        />
        <div>
          <h1 className="text-4xl font-bold">Something new just dropped.</h1>
          <p className="py-4 text-base-content/60 max-w-sm">
            We just launched a feature you've been waiting for. Check it out and let us know what you think.
          </p>
          <Button color="primary">Explore now</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}

import { Hero } from "@registry/components/react/layout/hero";
import Button from "@registry/components/react/forms/button";

export function HeroWithOverlay() {
  return (
    <Hero
      className="min-h-80 rounded-box"
      backgroundImage="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
    >
      <Hero.Overlay className="rounded-box" />
      <Hero.Content className="text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-4 text-5xl font-bold">Hello there</h1>
          <p className="mb-6 text-neutral-content/80">
            Build something amazing. Ship fast, stay lean, and focus on what matters.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}

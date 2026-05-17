import { Hero } from "@registry/components/react/layout/hero";
import Button from "@registry/components/react/forms/button";
import {Input} from "@registry/components/react/forms/input";
import {Label} from "@registry/components/react/forms/label";

export function HeroWithForm() {
  return (
    <Hero className="min-h-80 rounded-box bg-base-200">
      <Hero.Content className="flex-col lg:flex-row-reverse gap-12">
        <div className="text-center lg:text-left max-w-sm">
          <h1 className="text-4xl font-bold">Welcome back.</h1>
          <p className="py-4 text-base-content/60">
            Sign in to your account to continue where you left off.
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-base-100">
          <div className="card-body">
            <fieldset className="fieldset gap-1">
              <Label>Email</Label>
              <Input type="email" placeholder="you@example.com" />
              <Label className="mt-2">Password</Label>
              <Input type="password" placeholder="••••••••" />
              <a className="link link-hover text-sm mt-1">Forgot password?</a>
              <Button color="primary" className="mt-4">Sign in</Button>
            </fieldset>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
}

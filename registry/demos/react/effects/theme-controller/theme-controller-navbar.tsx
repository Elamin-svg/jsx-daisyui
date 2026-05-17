import ThemeController from "@registry/components/react/effects/theme-controller";
import Button from "@registry/components/react/forms/button";

export function ThemeControllerNavbar() {
  return (
    <div className="navbar bg-base-100 rounded-box border border-base-300 shadow-sm">
      <div className="flex-1">
        <span className="text-xl font-bold px-2">MyApp</span>
      </div>
      <div className="flex-none gap-2 px-2">
        <ThemeController />
        <Button color="primary" size="sm">Sign in</Button>
      </div>
    </div>
  );
}

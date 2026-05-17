# jsx-daisyui

React components built with daisyUI v5, Tailwind CSS and TypeScript.

> **jsx-daisyui** is not affiliated with or endorsed by daisyUI. It is an independent library built on top of the daisyUI v5 design system.

---

## Install

Make sure you have [daisyUI v5](https://daisyui.com/docs/install) and Tailwind CSS v4 set up in your project first.

Then add any component you need using the CLI:

```bash
npx jsx-daisyui add button
```

This copies the component directly into your `components/ui/` folder and installs any required dependencies automatically. You own the code — no package to update, no version conflicts.

---

## Quick Start

```tsx
import { Button } from "@/components/ui/button";

export default function App() {
  return <Button>Click me</Button>;
}
```

---

## Themes

daisyUI JSX is fully compatible with all daisyUI themes. Apply any theme using the `data-theme` attribute:

```tsx
export default function App() {
  return (
    <html data-theme="dark">
      <Button>Click me</Button>
    </html>
  );
}
```

You can also use the custom themes built for this library. Find them in the [Theming](https://jsx-daisyui.com/docs/theming) guide.

---

Browse all components with live previews at **[jsx-daisyui.com](https://jsx-daisyui.com)**.

---

## Contributing

Contributions are welcome. If you want to add a component or fix a bug, open a PR.

---

## License

MIT

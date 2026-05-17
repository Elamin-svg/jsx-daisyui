// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Button from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Button", () => {
  it("renders a button element", () => {
    const c = render(<Button>Click me</Button>);
    expect(c.querySelector("button")).toBeTruthy();
  });

  it("renders children text", () => {
    const c = render(<Button>Hello</Button>);
    expect(c.textContent).toContain("Hello");
  });

  it("applies color variant class", () => {
    const c = render(<Button color="primary">Primary</Button>);
    expect(c.querySelector(".btn-primary")).toBeTruthy();
  });

  it("applies size variant class", () => {
    const c = render(<Button size="lg">Large</Button>);
    expect(c.querySelector(".btn-lg")).toBeTruthy();
  });

  it("applies ghost variant class", () => {
    const c = render(<Button variant="ghost">Ghost</Button>);
    expect(c.querySelector(".btn-ghost")).toBeTruthy();
  });

  it("renders loading spinner when loading is true", () => {
    const c = render(<Button loading>Loading</Button>);
    expect(c.querySelector(".loading")).toBeTruthy();
  });

  it("applies btn-wide class", () => {
    const c = render(<Button wide>Wide</Button>);
    expect(c.querySelector(".btn-wide")).toBeTruthy();
  });

  it("forwards disabled prop to the button element", () => {
    const c = render(<Button disabled>Disabled</Button>);
    expect((c.querySelector("button") as HTMLButtonElement).disabled).toBe(true);
  });

  it("forwards ref to the button element", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});

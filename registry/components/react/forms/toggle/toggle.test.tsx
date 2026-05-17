// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Toggle from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Toggle", () => {
  it("renders an input[type=checkbox]", () => {
    const c = render(<Toggle />);
    expect(c.querySelector("input[type=checkbox]")).toBeTruthy();
  });

  it("applies base toggle class", () => {
    const c = render(<Toggle />);
    expect(c.querySelector(".toggle")).toBeTruthy();
  });

  it("applies color variant class", () => {
    const c = render(<Toggle color="primary" />);
    expect(c.querySelector(".toggle-primary")).toBeTruthy();
  });

  it("applies size variant class", () => {
    const c = render(<Toggle size="lg" />);
    expect(c.querySelector(".toggle-lg")).toBeTruthy();
  });

  it("forwards defaultChecked prop", () => {
    const c = render(<Toggle defaultChecked />);
    expect((c.querySelector("input") as HTMLInputElement).checked).toBe(true);
  });

  it("forwards ref to the input element", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Toggle ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

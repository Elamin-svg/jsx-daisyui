// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Range from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Range", () => {
  it("renders an input[type=range]", () => {
    const c = render(<Range />);
    expect(c.querySelector("input[type=range]")).toBeTruthy();
  });

  it("applies base range class", () => {
    const c = render(<Range />);
    expect(c.querySelector(".range")).toBeTruthy();
  });

  it("applies color variant class", () => {
    const c = render(<Range color="primary" />);
    expect(c.querySelector(".range-primary")).toBeTruthy();
  });

  it("applies size variant class", () => {
    const c = render(<Range size="lg" />);
    expect(c.querySelector(".range-lg")).toBeTruthy();
  });

  it("forwards min/max props", () => {
    const c = render(<Range min={0} max={100} />);
    const input = c.querySelector("input") as HTMLInputElement;
    expect(input.min).toBe("0");
    expect(input.max).toBe("100");
  });

  it("forwards ref to the input element", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Range ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

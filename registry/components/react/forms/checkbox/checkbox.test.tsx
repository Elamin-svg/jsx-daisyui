// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Checkbox from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Checkbox", () => {
  it("renders an input[type=checkbox]", () => {
    const c = render(<Checkbox />);
    expect(c.querySelector("input[type=checkbox]")).toBeTruthy();
  });

  it("applies base checkbox class", () => {
    const c = render(<Checkbox />);
    expect(c.querySelector(".checkbox")).toBeTruthy();
  });

  it("applies color variant class", () => {
    const c = render(<Checkbox color="primary" />);
    expect(c.querySelector(".checkbox-primary")).toBeTruthy();
  });

  it("applies size variant class", () => {
    const c = render(<Checkbox size="sm" />);
    expect(c.querySelector(".checkbox-sm")).toBeTruthy();
  });

  it("sets indeterminate state via prop", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Checkbox indeterminate ref={ref} />);
    expect(ref.current?.indeterminate).toBe(true);
  });

  it("does not set indeterminate when prop is false", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Checkbox indeterminate={false} ref={ref} />);
    expect(ref.current?.indeterminate).toBe(false);
  });

  it("forwards ref to the input element", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Checkbox ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

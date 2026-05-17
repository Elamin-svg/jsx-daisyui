// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Radio } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Radio", () => {
  it("renders an input[type=radio]", () => {
    const c = render(<Radio name="group" />);
    expect(c.querySelector("input[type=radio]")).toBeTruthy();
  });

  it("applies base radio class", () => {
    const c = render(<Radio name="group" />);
    expect(c.querySelector(".radio")).toBeTruthy();
  });

  it("applies color variant class", () => {
    const c = render(<Radio name="group" color="primary" />);
    expect(c.querySelector(".radio-primary")).toBeTruthy();
  });

  it("applies size variant class", () => {
    const c = render(<Radio name="group" size="sm" />);
    expect(c.querySelector(".radio-sm")).toBeTruthy();
  });

  it("sets the name attribute", () => {
    const c = render(<Radio name="my-group" />);
    expect((c.querySelector("input") as HTMLInputElement).name).toBe("my-group");
  });

  it("forwards ref to the input element", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Radio name="group" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

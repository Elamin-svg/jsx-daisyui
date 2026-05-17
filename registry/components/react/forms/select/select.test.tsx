// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Select from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Select", () => {
  it("renders a select element", () => {
    const c = render(
      <Select>
        <option value="a">Option A</option>
      </Select>
    );
    expect(c.querySelector("select")).toBeTruthy();
  });

  it("applies base select class", () => {
    const c = render(<Select />);
    expect(c.querySelector(".select")).toBeTruthy();
  });

  it("applies color variant class", () => {
    const c = render(<Select color="primary" />);
    expect(c.querySelector(".select-primary")).toBeTruthy();
  });

  it("applies size variant class", () => {
    const c = render(<Select size="lg" />);
    expect(c.querySelector(".select-lg")).toBeTruthy();
  });

  it("applies ghost class", () => {
    const c = render(<Select ghost />);
    expect(c.querySelector(".select-ghost")).toBeTruthy();
  });

  it("forwards ref to the select element", () => {
    const ref = React.createRef<HTMLSelectElement>();
    render(<Select ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });
});

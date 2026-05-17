// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Input } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Input", () => {
  it("renders an input element", () => {
    const c = render(<Input />);
    expect(c.querySelector("input")).toBeTruthy();
  });

  it("applies base input class", () => {
    const c = render(<Input />);
    expect(c.querySelector(".input")).toBeTruthy();
  });

  it("applies color variant class", () => {
    const c = render(<Input color="primary" />);
    expect(c.querySelector(".input-primary")).toBeTruthy();
  });

  it("applies size variant class", () => {
    const c = render(<Input size="lg" />);
    expect(c.querySelector(".input-lg")).toBeTruthy();
  });

  it("applies ghost class", () => {
    const c = render(<Input ghost />);
    expect(c.querySelector(".input-ghost")).toBeTruthy();
  });

  it("renders validator hint paragraph when validatorHint is set", () => {
    const c = render(<Input validator validatorHint="Required field" />);
    expect(c.querySelector(".validator-hint")).toBeTruthy();
    expect(c.textContent).toContain("Required field");
  });

  it("does not render validator hint when not provided", () => {
    const c = render(<Input />);
    expect(c.querySelector(".validator-hint")).toBeFalsy();
  });

  it("forwards ref to the input element", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

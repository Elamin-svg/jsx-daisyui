// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import FileInput from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("FileInput", () => {
  it("renders an input[type=file]", () => {
    const c = render(<FileInput />);
    expect(c.querySelector("input[type=file]")).toBeTruthy();
  });

  it("applies base file-input class", () => {
    const c = render(<FileInput />);
    expect(c.querySelector(".file-input")).toBeTruthy();
  });

  it("applies color variant class", () => {
    const c = render(<FileInput color="primary" />);
    expect(c.querySelector(".file-input-primary")).toBeTruthy();
  });

  it("applies size variant class", () => {
    const c = render(<FileInput size="lg" />);
    expect(c.querySelector(".file-input-lg")).toBeTruthy();
  });

  it("applies ghost variant class", () => {
    const c = render(<FileInput variant="ghost" />);
    expect(c.querySelector(".file-input-ghost")).toBeTruthy();
  });

  it("forwards ref to the input element", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<FileInput ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

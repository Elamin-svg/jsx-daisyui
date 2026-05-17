// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Textarea from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Textarea", () => {
  it("renders a textarea element", () => {
    const c = render(<Textarea />);
    expect(c.querySelector("textarea")).toBeTruthy();
  });

  it("applies base textarea class", () => {
    const c = render(<Textarea />);
    expect(c.querySelector(".textarea")).toBeTruthy();
  });

  it("applies color variant class", () => {
    const c = render(<Textarea color="primary" />);
    expect(c.querySelector(".textarea-primary")).toBeTruthy();
  });

  it("applies size variant class", () => {
    const c = render(<Textarea size="lg" />);
    expect(c.querySelector(".textarea-lg")).toBeTruthy();
  });

  it("applies ghost variant class", () => {
    const c = render(<Textarea variant="ghost" />);
    expect(c.querySelector(".textarea-ghost")).toBeTruthy();
  });

  it("forwards placeholder prop", () => {
    const c = render(<Textarea placeholder="Write here..." />);
    expect((c.querySelector("textarea") as HTMLTextAreaElement).placeholder).toBe("Write here...");
  });

  it("forwards ref to the textarea element", () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });
});

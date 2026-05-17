// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Stack from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Stack", () => {
  it("renders with stack class", () => {
    const c = render(<Stack><div /></Stack>);
    expect(c.querySelector(".stack")).toBeTruthy();
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Stack ref={ref}><div /></Stack>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});

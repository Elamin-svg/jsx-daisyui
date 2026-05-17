// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Join from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Join", () => {
  it("renders with join class", () => {
    const c = render(<Join><div /></Join>);
    expect(c.querySelector(".join")).toBeTruthy();
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Join ref={ref}><div /></Join>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});

// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Swap } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Swap", () => {
  it("renders with swap class", () => {
    const c = render(<Swap><div /></Swap>);
    expect(c.querySelector(".swap")).toBeTruthy();
  });

  it("renders Swap.On and Swap.Off", () => {
    const c = render(
      <Swap>
        <Swap.On>on</Swap.On>
        <Swap.Off>off</Swap.Off>
      </Swap>
    );
    expect(c.textContent).toContain("on");
    expect(c.textContent).toContain("off");
  });
});

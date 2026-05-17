// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Indicator } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Indicator", () => {
  it("renders with indicator class", () => {
    const c = render(<Indicator><div /></Indicator>);
    expect(c.querySelector(".indicator")).toBeTruthy();
  });

  it("renders Indicator.Item", () => {
    const c = render(
      <Indicator>
        <Indicator.Item>badge</Indicator.Item>
      </Indicator>
    );
    expect(c.textContent).toContain("badge");
  });
});

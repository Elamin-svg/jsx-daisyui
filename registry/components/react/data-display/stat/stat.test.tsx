// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Stat } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Stat", () => {
  it("renders with stats class", () => {
    const c = render(<Stat><div /></Stat>);
    expect(c.querySelector(".stats")).toBeTruthy();
  });
  it("renders Stat.Title and Stat.Value", () => {
    const c = render(
      <Stat>
        <Stat.Item>
          <Stat.Title>Total</Stat.Title>
          <Stat.Value>42</Stat.Value>
        </Stat.Item>
      </Stat>
    );
    expect(c.textContent).toContain("Total");
    expect(c.textContent).toContain("42");
  });
});

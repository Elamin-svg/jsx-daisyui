// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Dock } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Dock", () => {
  it("renders with dock class", () => {
    const c = render(<Dock><div /></Dock>);
    expect(c.querySelector(".dock")).toBeTruthy();
  });

  it("renders Dock.Item", () => {
    const c = render(
      <Dock>
        <Dock.Item>item</Dock.Item>
      </Dock>
    );
    expect(c.textContent).toContain("item");
  });
});

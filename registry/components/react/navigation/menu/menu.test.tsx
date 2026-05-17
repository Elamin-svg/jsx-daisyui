// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Menu } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Menu", () => {
  it("renders with menu class", () => {
    const c = render(<Menu><li>item</li></Menu>);
    expect(c.querySelector(".menu")).toBeTruthy();
  });

  it("renders Menu.Title", () => {
    const c = render(
      <Menu>
        <Menu.Title>Category</Menu.Title>
      </Menu>
    );
    expect(c.textContent).toContain("Category");
  });
});

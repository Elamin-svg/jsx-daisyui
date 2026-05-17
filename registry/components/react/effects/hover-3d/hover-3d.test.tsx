// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Hover3D from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Hover3D", () => {
  it("renders without crashing", () => {
    const c = render(<Hover3D><div>content</div></Hover3D>);
    expect(c.firstChild).toBeTruthy();
  });

  it("renders children", () => {
    const c = render(<Hover3D><span>hi</span></Hover3D>);
    expect(c.textContent).toContain("hi");
  });
});

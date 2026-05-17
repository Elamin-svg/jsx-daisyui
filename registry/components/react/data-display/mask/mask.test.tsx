// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Mask from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Mask", () => {
  it("renders with mask class", () => {
    const c = render(<Mask />);
    expect(c.querySelector(".mask")).toBeTruthy();
  });
  it("applies mask shape variant", () => {
    const c = render(<Mask shape="circle" />);
    expect(c.querySelector(".mask-circle")).toBeTruthy();
  });
});

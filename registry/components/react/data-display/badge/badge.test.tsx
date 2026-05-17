// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Badge from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Badge", () => {
  it("renders with badge class", () => {
    const c = render(<Badge>new</Badge>);
    expect(c.querySelector(".badge")).toBeTruthy();
  });
  it("applies color variant", () => {
    const c = render(<Badge color="primary">new</Badge>);
    expect(c.querySelector(".badge-primary")).toBeTruthy();
  });
});

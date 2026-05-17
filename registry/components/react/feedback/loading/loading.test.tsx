// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Loading from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Loading", () => {
  it("renders with loading class", () => {
    const c = render(<Loading />);
    expect(c.querySelector(".loading")).toBeTruthy();
  });

  it("applies size variant", () => {
    const c = render(<Loading size="lg" />);
    expect(c.querySelector(".loading-lg")).toBeTruthy();
  });
});

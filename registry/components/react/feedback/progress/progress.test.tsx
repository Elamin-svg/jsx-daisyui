// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Progress from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Progress", () => {
  it("renders with progress class", () => {
    const c = render(<Progress />);
    expect(c.querySelector(".progress")).toBeTruthy();
  });

  it("applies color variant class", () => {
    const c = render(<Progress color="primary" />);
    expect(c.querySelector(".progress-primary")).toBeTruthy();
  });
});

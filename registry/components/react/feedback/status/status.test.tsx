// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Status from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Status", () => {
  it("renders with status class", () => {
    const c = render(<Status />);
    expect(c.querySelector(".status")).toBeTruthy();
  });

  it("applies color variant class", () => {
    const c = render(<Status color="success" />);
    expect(c.querySelector(".status-success")).toBeTruthy();
  });
});

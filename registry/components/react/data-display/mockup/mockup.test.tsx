// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { MockupBrowser, MockupCode, MockupPhone, MockupWindow } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Mockup", () => {
  it("renders MockupBrowser without crashing", () => {
    const c = render(<MockupBrowser><div /></MockupBrowser>);
    expect(c.firstChild).toBeTruthy();
  });
  it("renders MockupCode without crashing", () => {
    const c = render(<MockupCode><div /></MockupCode>);
    expect(c.firstChild).toBeTruthy();
  });
  it("renders MockupPhone without crashing", () => {
    const c = render(<MockupPhone><div /></MockupPhone>);
    expect(c.firstChild).toBeTruthy();
  });
  it("renders MockupWindow without crashing", () => {
    const c = render(<MockupWindow><div /></MockupWindow>);
    expect(c.firstChild).toBeTruthy();
  });
});

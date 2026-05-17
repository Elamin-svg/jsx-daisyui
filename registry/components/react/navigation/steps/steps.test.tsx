// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Steps } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Steps", () => {
  it("renders with steps class", () => {
    const c = render(<Steps><li>step</li></Steps>);
    expect(c.querySelector(".steps")).toBeTruthy();
  });

  it("renders Steps.Item", () => {
    const c = render(
      <Steps>
        <Steps.Item>Step 1</Steps.Item>
      </Steps>
    );
    expect(c.textContent).toContain("Step 1");
  });
});

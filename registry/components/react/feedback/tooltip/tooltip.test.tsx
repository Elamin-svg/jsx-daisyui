// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Tooltip } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Tooltip", () => {
  it("renders with tooltip class", () => {
    const c = render(<Tooltip><button>hover me</button></Tooltip>);
    expect(c.querySelector(".tooltip")).toBeTruthy();
  });

  it("renders Tooltip.Content", () => {
    const c = render(
      <Tooltip>
        <Tooltip.Trigger>hover</Tooltip.Trigger>
        <Tooltip.Content>tip text</Tooltip.Content>
      </Tooltip>
    );
    expect(c.textContent).toContain("tip text");
  });
});

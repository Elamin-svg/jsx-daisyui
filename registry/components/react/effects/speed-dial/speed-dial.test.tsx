// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { SpeedDial } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("SpeedDial", () => {
  it("renders without crashing", () => {
    const c = render(<SpeedDial><div /></SpeedDial>);
    expect(c.firstChild).toBeTruthy();
  });

  it("renders SpeedDial.Action", () => {
    const c = render(
      <SpeedDial>
        <SpeedDial.Action>action</SpeedDial.Action>
      </SpeedDial>
    );
    expect(c.textContent).toContain("action");
  });
});

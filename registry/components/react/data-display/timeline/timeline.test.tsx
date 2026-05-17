// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Timeline } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Timeline", () => {
  it("renders with timeline class", () => {
    const c = render(<Timeline><li /></Timeline>);
    expect(c.querySelector(".timeline")).toBeTruthy();
  });
  it("renders Timeline.Start and Timeline.End", () => {
    const c = render(
      <Timeline>
        <li>
          <Timeline.Start>start</Timeline.Start>
          <Timeline.Middle />
          <Timeline.End>end</Timeline.End>
        </li>
      </Timeline>
    );
    expect(c.textContent).toContain("start");
    expect(c.textContent).toContain("end");
  });
});

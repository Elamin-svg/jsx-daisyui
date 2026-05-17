// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Tabs } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Tabs", () => {
  it("renders Tabs.List with tabs class", () => {
    const c = render(<Tabs><Tabs.List><div /></Tabs.List></Tabs>);
    expect(c.querySelector(".tabs")).toBeTruthy();
  });

  it("renders Tabs.Trigger text", () => {
    const c = render(
      <Tabs>
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        </Tabs.List>
      </Tabs>
    );
    expect(c.textContent).toContain("Tab 1");
  });
});

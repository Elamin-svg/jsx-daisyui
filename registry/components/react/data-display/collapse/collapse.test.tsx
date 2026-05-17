// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Collapse } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Collapse", () => {
  it("renders with collapse class", () => {
    const c = render(<Collapse><div /></Collapse>);
    expect(c.querySelector(".collapse")).toBeTruthy();
  });
  it("renders Collapse.Summary and Collapse.Content", () => {
    const c = render(
      <Collapse>
        <Collapse.Summary>title</Collapse.Summary>
        <Collapse.Content>body</Collapse.Content>
      </Collapse>
    );
    expect(c.textContent).toContain("title");
    expect(c.textContent).toContain("body");
  });
});

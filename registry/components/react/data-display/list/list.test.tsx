// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { List } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("List", () => {
  it("renders with list class", () => {
    const c = render(<List><div /></List>);
    expect(c.querySelector(".list")).toBeTruthy();
  });
  it("renders List.Row", () => {
    const c = render(
      <List>
        <List.Row>entry</List.Row>
      </List>
    );
    expect(c.textContent).toContain("entry");
  });
});

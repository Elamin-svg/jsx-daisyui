// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Table from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Table", () => {
  it("renders a table element", () => {
    const c = render(<Table><tbody><tr><td>cell</td></tr></tbody></Table>);
    expect(c.querySelector("table")).toBeTruthy();
  });
  it("applies table class", () => {
    const c = render(<Table><tbody /></Table>);
    expect(c.querySelector(".table")).toBeTruthy();
  });
});

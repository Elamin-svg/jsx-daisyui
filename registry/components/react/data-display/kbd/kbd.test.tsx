// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Kbd from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Kbd", () => {
  it("renders a kbd element", () => {
    const c = render(<Kbd>Ctrl</Kbd>);
    expect(c.querySelector("kbd")).toBeTruthy();
  });
  it("applies kbd class", () => {
    const c = render(<Kbd>Enter</Kbd>);
    expect(c.querySelector(".kbd")).toBeTruthy();
  });
});

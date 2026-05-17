// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Navbar } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Navbar", () => {
  it("renders with navbar class", () => {
    const c = render(<Navbar><div /></Navbar>);
    expect(c.querySelector(".navbar")).toBeTruthy();
  });

  it("renders Navbar.Start and Navbar.End", () => {
    const c = render(
      <Navbar>
        <Navbar.Start>start</Navbar.Start>
        <Navbar.End>end</Navbar.End>
      </Navbar>
    );
    expect(c.textContent).toContain("start");
    expect(c.textContent).toContain("end");
  });
});

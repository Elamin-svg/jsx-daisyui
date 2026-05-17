// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Footer } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Footer", () => {
  it("renders with footer class", () => {
    const c = render(<Footer><div /></Footer>);
    expect(c.querySelector(".footer")).toBeTruthy();
  });

  it("renders Footer.Title", () => {
    const c = render(
      <Footer>
        <Footer.Title>Links</Footer.Title>
      </Footer>
    );
    expect(c.textContent).toContain("Links");
  });
});

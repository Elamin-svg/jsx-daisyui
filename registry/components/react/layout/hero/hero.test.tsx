// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Hero } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Hero", () => {
  it("renders with hero class", () => {
    const c = render(<Hero><div /></Hero>);
    expect(c.querySelector(".hero")).toBeTruthy();
  });

  it("renders Hero.Content", () => {
    const c = render(
      <Hero>
        <Hero.Content>hello</Hero.Content>
      </Hero>
    );
    expect(c.textContent).toContain("hello");
  });
});

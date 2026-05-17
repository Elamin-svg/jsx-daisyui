// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Carousel } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Carousel", () => {
  it("renders with carousel class", () => {
    const c = render(<Carousel><div /></Carousel>);
    expect(c.querySelector(".carousel")).toBeTruthy();
  });
  it("renders Carousel.Item", () => {
    const c = render(
      <Carousel>
        <Carousel.Item>slide</Carousel.Item>
      </Carousel>
    );
    expect(c.textContent).toContain("slide");
  });
});

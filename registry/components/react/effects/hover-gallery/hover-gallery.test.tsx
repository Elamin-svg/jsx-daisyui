// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import HoverGallery from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("HoverGallery", () => {
  it("renders without crashing", () => {
    const c = render(<HoverGallery images={[]} />);
    expect(c.firstChild).toBeTruthy();
  });

  it("renders image items", () => {
    const c = render(<HoverGallery images={[{ src: "a.jpg", alt: "item" }]} />);
    expect(c.querySelector("img")).toBeTruthy();
  });
});

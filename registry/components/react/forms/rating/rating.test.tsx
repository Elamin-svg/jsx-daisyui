// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Rating } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Rating", () => {
  it("renders a div with rating class", () => {
    const c = render(
      <Rating name="stars">
        <Rating.Item itemIndex={1} />
      </Rating>
    );
    expect(c.querySelector(".rating")).toBeTruthy();
  });

  it("renders Rating.Item as a radio input", () => {
    const c = render(
      <Rating name="stars">
        <Rating.Item itemIndex={1} />
      </Rating>
    );
    expect(c.querySelector("input[type=radio]")).toBeTruthy();
  });

  it("renders Rating.Hidden with aria-label=clear", () => {
    const c = render(
      <Rating name="stars">
        <Rating.Hidden />
        <Rating.Item itemIndex={1} />
      </Rating>
    );
    const radios = c.querySelectorAll("input[type=radio]");
    expect(radios.length).toBe(2);
    expect((radios[0] as HTMLInputElement).getAttribute("aria-label")).toBe("clear");
  });

  it("marks the correct item as checked for a controlled value", () => {
    const c = render(
      <Rating name="stars" value={2}>
        <Rating.Item itemIndex={1} />
        <Rating.Item itemIndex={2} />
        <Rating.Item itemIndex={3} />
      </Rating>
    );
    const inputs = c.querySelectorAll("input[type=radio]") as NodeListOf<HTMLInputElement>;
    expect(inputs[1].checked).toBe(true);
    expect(inputs[0].checked).toBe(false);
  });

  it("renders read-only items as divs instead of inputs", () => {
    const c = render(
      <Rating name="stars" readOnly value={2}>
        <Rating.Item itemIndex={1} />
        <Rating.Item itemIndex={2} />
      </Rating>
    );
    expect(c.querySelectorAll("input[type=radio]").length).toBe(0);
    expect(c.querySelectorAll("div[aria-label]").length).toBeGreaterThan(0);
  });

  it("applies size variant class", () => {
    const c = render(
      <Rating name="stars" size="lg">
        <Rating.Item itemIndex={1} />
      </Rating>
    );
    expect(c.querySelector(".rating-lg")).toBeTruthy();
  });
});

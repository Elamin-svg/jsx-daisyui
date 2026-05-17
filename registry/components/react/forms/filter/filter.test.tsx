// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Filter } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Filter", () => {
  it("renders a form element by default", () => {
    const c = render(<Filter name="category" />);
    expect(c.querySelector("form.filter")).toBeTruthy();
  });

  it("renders a div when asForm is false", () => {
    const c = render(<Filter name="category" asForm={false} />);
    expect(c.querySelector("div.filter")).toBeTruthy();
    expect(c.querySelector("form")).toBeFalsy();
  });

  it("renders Filter.Item as a radio input", () => {
    const c = render(
      <Filter name="size">
        <Filter.Item label="Small" value="s" />
      </Filter>
    );
    expect(c.querySelector("input[type=radio]")).toBeTruthy();
  });

  it("renders Filter.Item as a checkbox when type=checkbox", () => {
    const c = render(
      <Filter name="size">
        <Filter.Item label="Small" value="s" type="checkbox" />
      </Filter>
    );
    expect(c.querySelector("input[type=checkbox]")).toBeTruthy();
  });

  it("renders Filter.Reset as a reset input", () => {
    const c = render(
      <Filter name="size">
        <Filter.Reset size="md" />
      </Filter>
    );
    expect(c.querySelector("input[type=reset]")).toBeTruthy();
  });

  it("renders Filter.Reset as radio when mode=radio", () => {
    const c = render(
      <Filter name="size">
        <Filter.Reset size="md" mode="radio" />
      </Filter>
    );
    expect(c.querySelector("input[type=radio]")).toBeTruthy();
  });
});

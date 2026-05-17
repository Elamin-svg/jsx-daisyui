// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Diff } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Diff", () => {
  it("renders with diff class", () => {
    const c = render(<Diff><div /></Diff>);
    expect(c.querySelector(".diff")).toBeTruthy();
  });
  it("renders Diff.Item1 and Diff.Item2", () => {
    const c = render(
      <Diff>
        <Diff.Item1>before</Diff.Item1>
        <Diff.Item2>after</Diff.Item2>
      </Diff>
    );
    expect(c.textContent).toContain("before");
    expect(c.textContent).toContain("after");
  });
});

// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Pagination } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Pagination", () => {
  it("renders with join class", () => {
    const c = render(<Pagination><div /></Pagination>);
    expect(c.querySelector(".join")).toBeTruthy();
  });

  it("renders Pagination.Item", () => {
    const c = render(
      <Pagination>
        <Pagination.Item value={1}>1</Pagination.Item>
      </Pagination>
    );
    expect(c.textContent).toContain("1");
  });
});

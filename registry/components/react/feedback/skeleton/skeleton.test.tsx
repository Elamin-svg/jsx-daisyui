// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Skeleton from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Skeleton", () => {
  it("renders with skeleton class", () => {
    const c = render(<Skeleton />);
    expect(c.querySelector(".skeleton")).toBeTruthy();
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Skeleton ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});

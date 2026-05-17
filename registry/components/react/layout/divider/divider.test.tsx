// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Divider from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Divider", () => {
  it("renders with divider class", () => {
    const c = render(<Divider />);
    expect(c.querySelector(".divider")).toBeTruthy();
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Divider ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});

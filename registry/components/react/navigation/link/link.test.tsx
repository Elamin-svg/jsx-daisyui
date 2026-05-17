// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Link from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Link", () => {
  it("renders an anchor element", () => {
    const c = render(<Link href="#">Click</Link>);
    expect(c.querySelector("a")).toBeTruthy();
  });

  it("applies link class", () => {
    const c = render(<Link href="#">Click</Link>);
    expect(c.querySelector(".link")).toBeTruthy();
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLAnchorElement>();
    render(<Link href="#" ref={ref}>Click</Link>);
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });
});

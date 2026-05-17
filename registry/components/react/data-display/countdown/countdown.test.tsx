// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Countdown } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Countdown", () => {
  it("renders without crashing", () => {
    const c = render(<Countdown><div /></Countdown>);
    expect(c.firstChild).toBeTruthy();
  });
});

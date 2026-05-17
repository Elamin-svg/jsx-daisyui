// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import * as ThemeControllerModule from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("ThemeController", () => {
  it("exports a component", () => {
    const exports = Object.values(ThemeControllerModule);
    expect(exports.length).toBeGreaterThan(0);
    expect(exports.some(e => typeof e === "function")).toBe(true);
  });
});

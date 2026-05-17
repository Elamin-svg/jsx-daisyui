// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Toaster, toast } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Toast", () => {
  it("exports Toaster component", () => {
    expect(typeof Toaster).toBe("function");
  });

  it("exports toast function", () => {
    expect(typeof toast).toBe("function");
  });
});

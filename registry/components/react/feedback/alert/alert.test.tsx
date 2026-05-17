// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import Alert from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Alert", () => {
  it("renders with alert class", () => {
    const c = render(<Alert>message</Alert>);
    expect(c.querySelector(".alert")).toBeTruthy();
  });

  it("renders children", () => {
    const c = render(<Alert>Something went wrong</Alert>);
    expect(c.textContent).toContain("Something went wrong");
  });

  it("applies variant class", () => {
    const c = render(<Alert variant="error">Error</Alert>);
    expect(c.querySelector(".alert-error")).toBeTruthy();
  });
});

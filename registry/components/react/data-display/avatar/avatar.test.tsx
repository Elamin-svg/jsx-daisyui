// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Avatar } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Avatar", () => {
  it("renders with avatar class", () => {
    const c = render(<Avatar><div /></Avatar>);
    expect(c.querySelector(".avatar")).toBeTruthy();
  });
  it("renders Avatar.Placeholder", () => {
    const c = render(
      <Avatar>
        <Avatar.Placeholder>AB</Avatar.Placeholder>
      </Avatar>
    );
    expect(c.textContent).toContain("AB");
  });
});

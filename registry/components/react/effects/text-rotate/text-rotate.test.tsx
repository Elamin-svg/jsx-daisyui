// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { TextRotate } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("TextRotate", () => {
  it("renders without crashing", () => {
    const c = render(<TextRotate><div /></TextRotate>);
    expect(c.firstChild).toBeTruthy();
  });

  it("renders TextRotate.Item", () => {
    const c = render(
      <TextRotate>
        <TextRotate.List>
          <TextRotate.Item>word</TextRotate.Item>
        </TextRotate.List>
      </TextRotate>
    );
    expect(c.textContent).toContain("word");
  });
});

// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Card } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Card", () => {
  it("renders with card class", () => {
    const c = render(<Card><div /></Card>);
    expect(c.querySelector(".card")).toBeTruthy();
  });
  it("renders Card.Body and Card.Actions", () => {
    const c = render(
      <Card>
        <Card.Body>content</Card.Body>
        <Card.Actions>actions</Card.Actions>
      </Card>
    );
    expect(c.textContent).toContain("content");
    expect(c.textContent).toContain("actions");
  });
});

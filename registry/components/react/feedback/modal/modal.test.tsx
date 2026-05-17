// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Modal } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Modal", () => {
  it("renders a dialog element", () => {
    const c = render(<Modal><div /></Modal>);
    expect(c.querySelector("dialog")).toBeTruthy();
  });

  it("renders Modal.Body", () => {
    const c = render(
      <Modal>
        <Modal.Body>content</Modal.Body>
      </Modal>
    );
    expect(c.textContent).toContain("content");
  });
});

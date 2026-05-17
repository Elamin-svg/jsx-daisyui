import { afterEach } from "vitest";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import React from "react";

export function createRenderer() {
  let container: HTMLDivElement;
  let root: Root;

  afterEach(() => {
    act(() => root?.unmount());
    container?.remove();
  });

  return function render(ui: React.ReactElement) {
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => root.render(ui));
    return container;
  };
}

// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Chat } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Chat", () => {
  it("renders with chat class", () => {
    const c = render(<Chat><div /></Chat>);
    expect(c.querySelector(".chat")).toBeTruthy();
  });
  it("renders Chat.Bubble", () => {
    const c = render(
      <Chat>
        <Chat.Bubble>hello</Chat.Bubble>
      </Chat>
    );
    expect(c.textContent).toContain("hello");
  });
});

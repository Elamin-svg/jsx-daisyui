// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { Drawer } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Drawer", () => {
  it("renders drawer root", () => {
    const c = render(
      <Drawer open={false} onOpen={() => {}} onClose={() => {}}>
        <div />
      </Drawer>,
    );

    expect(c.querySelector(".drawer")).toBeTruthy();
  });

  it("renders Drawer.Content", () => {
    const c = render(
      <Drawer open={false}>
        <Drawer.Content>body</Drawer.Content>
      </Drawer>,
    );

    expect(c.textContent).toContain("body");
  });

  it("syncs checkbox with open state", () => {
    const c = render(
      <Drawer open={true}>
        <div />
      </Drawer>,
    );

    const input = c.querySelector("input.drawer-toggle") as HTMLInputElement;

    expect(input.checked).toBe(true);
  });

  it("renders overlay element", () => {
    const c = render(
      <Drawer open={true}>
        <Drawer.Side>
          <div>menu</div>
        </Drawer.Side>
      </Drawer>,
    );

    expect(c.querySelector(".drawer-overlay")).toBeTruthy();
  });
});

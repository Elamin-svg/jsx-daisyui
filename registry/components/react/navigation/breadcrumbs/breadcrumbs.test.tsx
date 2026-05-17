// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { createRenderer } from "../../test-utils";
import { Breadcrumbs } from "./breadcrumbs";

const render = createRenderer();

describe("Breadcrumbs", () => {
  it("renders with breadcrumbs class", () => {
    const c = render(
      <Breadcrumbs>
        <div />
      </Breadcrumbs>,
    );
    expect(c.querySelector(".breadcrumbs")).toBeTruthy();
  });

  it("renders Breadcrumbs.List and Breadcrumbs.Item", () => {
    const c = render(
      <Breadcrumbs>
        <Breadcrumbs.List>
          <Breadcrumbs.Item>Home</Breadcrumbs.Item>
        </Breadcrumbs.List>
      </Breadcrumbs>,
    );
    expect(c.textContent).toContain("Home");
  });
});

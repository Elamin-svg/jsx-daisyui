// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { createRenderer } from "../../test-utils";
import { Accordion } from "./index";

const render = createRenderer();

describe("Accordion", () => {
  it("renders Accordion.Item with collapse class", () => {
    const c = render(
      <Accordion>
        <Accordion.Item>
          <div />
        </Accordion.Item>
      </Accordion>,
    );
    expect(c.querySelector(".collapse")).toBeTruthy();
  });
  it("renders Accordion.Trigger and Accordion.Content", () => {
    const c = render(
      <Accordion>
        <Accordion.Item>
          <Accordion.Trigger>title</Accordion.Trigger>
          <Accordion.Content>body</Accordion.Content>
        </Accordion.Item>
      </Accordion>,
    );
    expect(c.textContent).toContain("title");
    expect(c.textContent).toContain("body");
  });
});

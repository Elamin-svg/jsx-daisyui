// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { createRenderer } from "../../test-utils";
import { Accordion } from "./index";

const render = createRenderer();

describe("Accordion", () => {
  it("renders with collapse class", () => {
    const c = render(
      <Accordion name="test">
        <Accordion.Title>title</Accordion.Title>
        <Accordion.Content>body</Accordion.Content>
      </Accordion>,
    );
    expect(c.querySelector(".collapse")).toBeTruthy();
  });

  it("renders Title and Content", () => {
    const c = render(
      <Accordion name="test">
        <Accordion.Title>title</Accordion.Title>
        <Accordion.Content>body</Accordion.Content>
      </Accordion>,
    );
    expect(c.textContent).toContain("title");
    expect(c.textContent).toContain("body");
  });

  it("renders a hidden radio input", () => {
    const c = render(
      <Accordion name="test">
        <Accordion.Title>title</Accordion.Title>
        <Accordion.Content>body</Accordion.Content>
      </Accordion>,
    );
    const input = c.querySelector('input[type="radio"]');
    expect(input).toBeTruthy();
    expect(input?.getAttribute("name")).toBe("test");
  });

  it("checks radio input when defaultChecked", () => {
    const c = render(
      <Accordion name="test" defaultChecked>
        <Accordion.Title>title</Accordion.Title>
        <Accordion.Content>body</Accordion.Content>
      </Accordion>,
    );
    const input = c.querySelector('input[type="radio"]') as HTMLInputElement;
    expect(input?.defaultChecked).toBe(true);
  });

  it("applies arrow icon class", () => {
    const c = render(
      <Accordion name="test" icon="arrow">
        <Accordion.Title>title</Accordion.Title>
        <Accordion.Content>body</Accordion.Content>
      </Accordion>,
    );
    expect(c.querySelector(".collapse-arrow")).toBeTruthy();
  });

  it("applies plus icon class", () => {
    const c = render(
      <Accordion name="test" icon="plus">
        <Accordion.Title>title</Accordion.Title>
        <Accordion.Content>body</Accordion.Content>
      </Accordion>,
    );
    expect(c.querySelector(".collapse-plus")).toBeTruthy();
  });
});

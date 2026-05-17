// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Dropdown } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Dropdown", () => {
  it("renders a div with dropdown class", () => {
    const c = render(<Dropdown><div /></Dropdown>);
    expect(c.querySelector(".dropdown")).toBeTruthy();
  });

  it("applies position variant class", () => {
    const c = render(<Dropdown position="top"><div /></Dropdown>);
    expect(c.querySelector(".dropdown-top")).toBeTruthy();
  });

  it("applies align variant class", () => {
    const c = render(<Dropdown align="end"><div /></Dropdown>);
    expect(c.querySelector(".dropdown-end")).toBeTruthy();
  });

  it("applies hover variant class", () => {
    const c = render(<Dropdown hover><div /></Dropdown>);
    expect(c.querySelector(".dropdown-hover")).toBeTruthy();
  });

  it("renders Dropdown.Trigger as a button with btn class", () => {
    const c = render(
      <Dropdown>
        <Dropdown.Trigger>Open</Dropdown.Trigger>
      </Dropdown>
    );
    expect(c.querySelector("button.btn")).toBeTruthy();
    expect(c.textContent).toContain("Open");
  });

  it("renders Dropdown.Content as a ul", () => {
    const c = render(
      <Dropdown>
        <Dropdown.Content />
      </Dropdown>
    );
    expect(c.querySelector("ul")).toBeTruthy();
  });

  it("renders Dropdown.Item with anchor by default", () => {
    const c = render(
      <Dropdown>
        <Dropdown.Content>
          <Dropdown.Item>Option A</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    );
    expect(c.querySelector("li[role=menuitem]")).toBeTruthy();
    expect(c.querySelector("a")).toBeTruthy();
  });

  it("renders Dropdown.Item without anchor when anchor=false", () => {
    const c = render(
      <Dropdown>
        <Dropdown.Content>
          <Dropdown.Item anchor={false}>Plain item</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    );
    expect(c.querySelector("a")).toBeFalsy();
    expect(c.textContent).toContain("Plain item");
  });
});

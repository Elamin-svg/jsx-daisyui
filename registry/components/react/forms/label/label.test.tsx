// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Label } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Label", () => {
  it("renders a label element with label class", () => {
    const c = render(<Label>Name</Label>);
    expect(c.querySelector("label.label")).toBeTruthy();
    expect(c.textContent).toContain("Name");
  });

  it("forwards ref to the label element", () => {
    const ref = React.createRef<HTMLLabelElement>();
    render(<Label ref={ref}>Test</Label>);
    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });

  it("renders Label.InputField as a label with input class", () => {
    const c = render(
      <Label.InputField>
        <input />
      </Label.InputField>
    );
    expect(c.querySelector("label.input")).toBeTruthy();
  });

  it("renders Label.Prefix and Label.Suffix inside Label.InputField", () => {
    const c = render(
      <Label.InputField>
        <Label.Prefix>@</Label.Prefix>
        <input />
        <Label.Suffix>.com</Label.Suffix>
      </Label.InputField>
    );
    expect(c.textContent).toContain("@");
    expect(c.textContent).toContain(".com");
  });

  it("renders Label.Prefix as a span", () => {
    const c = render(<Label.Prefix>prefix</Label.Prefix>);
    expect(c.querySelector("span")).toBeTruthy();
  });

  it("renders Label.Suffix as a span", () => {
    const c = render(<Label.Suffix>suffix</Label.Suffix>);
    expect(c.querySelector("span")).toBeTruthy();
  });

  it("renders Label.SelectField as a label with select class", () => {
    const c = render(
      <Label.SelectField>
        <select />
      </Label.SelectField>
    );
    expect(c.querySelector("label.select")).toBeTruthy();
  });

  it("renders label text inside Label.SelectField", () => {
    const c = render(
      <Label.SelectField label="Country">
        <select />
      </Label.SelectField>
    );
    expect(c.textContent).toContain("Country");
  });

  it("renders Label.FloatingLabel with label span", () => {
    const c = render(
      <Label.FloatingLabel label="Email">
        <input />
      </Label.FloatingLabel>
    );
    expect(c.textContent).toContain("Email");
  });

  it("renders Label.FloatingLabel with floating-label class", () => {
    const c = render(
      <Label.FloatingLabel label="Email">
        <input />
      </Label.FloatingLabel>
    );
    expect(c.querySelector(".floating-label")).toBeTruthy();
  });
});

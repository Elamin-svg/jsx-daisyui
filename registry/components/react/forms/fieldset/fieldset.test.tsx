// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import React from "react";
import { Fieldset } from "./index";
import { createRenderer } from "../../test-utils";

const render = createRenderer();

describe("Fieldset", () => {
  it("renders a fieldset element with fieldset class", () => {
    const c = render(<Fieldset />);
    expect(c.querySelector("fieldset.fieldset")).toBeTruthy();
  });

  it("renders Fieldset.Legend as a legend element", () => {
    const c = render(
      <Fieldset>
        <Fieldset.Legend>My Legend</Fieldset.Legend>
      </Fieldset>
    );
    expect(c.querySelector("legend")).toBeTruthy();
    expect(c.textContent).toContain("My Legend");
  });

  it("applies fieldset-legend class to legend", () => {
    const c = render(
      <Fieldset>
        <Fieldset.Legend>Legend</Fieldset.Legend>
      </Fieldset>
    );
    expect(c.querySelector(".fieldset-legend")).toBeTruthy();
  });

  it("renders Fieldset.Description as a p element", () => {
    const c = render(
      <Fieldset>
        <Fieldset.Description>Helper text</Fieldset.Description>
      </Fieldset>
    );
    expect(c.querySelector("p")).toBeTruthy();
    expect(c.textContent).toContain("Helper text");
  });

  it("forwards ref to the fieldset element", () => {
    const ref = React.createRef<HTMLFieldSetElement>();
    render(<Fieldset ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLFieldSetElement);
  });
});

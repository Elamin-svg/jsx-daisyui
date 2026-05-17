// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { createRenderer } from "../../test-utils";
import Calendar from "./index";

const render = createRenderer();

describe("Calendar", () => {
  it("renders without crashing", () => {
    const c = render(<Calendar />);
    expect(c.firstChild).toBeTruthy();
  });

  it("applies the react-day-picker class", () => {
    const c = render(<Calendar />);
    expect(c.querySelector(".react-day-picker")).toBeTruthy();
  });

  it("merges custom className", () => {
    const c = render(<Calendar className="my-custom-class" />);
    expect(c.querySelector(".react-day-picker.my-custom-class")).toBeTruthy();
  });

  it("renders navigation buttons", () => {
    const c = render(<Calendar />);
    expect(c.querySelectorAll("button").length).toBeGreaterThan(0);
  });

  it("renders day grid cells", () => {
    const c = render(<Calendar />);
    expect(c.querySelectorAll("td").length).toBeGreaterThan(0);
  });
});

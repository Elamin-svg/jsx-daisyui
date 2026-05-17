import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import fs from "fs";
import { getRegistryComponent } from "../../apps/www/src/server/get-registry-comp.js";

// Intercept all file reads — we never want to touch the real filesystem here
beforeEach(() => {
  vi.spyOn(fs, "readFileSync").mockReturnValue("export default Button;" as any);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("getRegistryComponent", () => {
  it("returns source, dependencies, and isClient for a known component", () => {
    const result = getRegistryComponent("button");

    expect(result).not.toBeNull();
    expect(result?.source).toBe("export default Button;");
    expect(Array.isArray(result?.dependencies)).toBe(true);
    expect(typeof result?.isClient).toBe("boolean");
  });

  it("returns null for an unknown component name", () => {
    const result = getRegistryComponent("does-not-exist");
    expect(result).toBeNull();
  });

  it("returns null when the component file cannot be read", () => {
    vi.spyOn(fs, "readFileSync").mockImplementation(() => {
      throw new Error("ENOENT: no such file or directory");
    });

    const result = getRegistryComponent("button");
    expect(result).toBeNull();
  });

  it("returns the correct dependency list for a known component", () => {
    const result = getRegistryComponent("button");
    // button only depends on tailwind-variants (no extra packages)
    expect(result?.dependencies).toContain("tailwind-variants");
  });

  it("returns isClient: false for button (server component)", () => {
    const result = getRegistryComponent("button");
    expect(result?.isClient).toBe(false);
  });
});

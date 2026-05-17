import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

vi.mock("node:fs", () => ({
  existsSync: vi.fn(),
  readFileSync: vi.fn(),
  mkdirSync: vi.fn(),
  writeFileSync: vi.fn(),
}));

import * as fs from "node:fs";
import {
  getComponentDir,
  hasPackage,
  writeComponent,
} from "../../packages/cli/src/utils/fs.js";

const mockReadFileSync = vi.mocked(fs.readFileSync);
const mockExistsSync = vi.mocked(fs.existsSync);
const mockWriteFileSync = vi.mocked(fs.writeFileSync);
const mockMkdirSync = vi.mocked(fs.mkdirSync);

function mockPackageJson(deps: Record<string, string> = {}) {
  mockReadFileSync.mockReturnValue(
    JSON.stringify({ dependencies: deps }) as unknown as any,
  );
}

beforeEach(() => {
  mockExistsSync.mockReturnValue(false);
});

afterEach(() => vi.clearAllMocks());

describe("hasPackage", () => {
  it("returns true when dep is in dependencies", () => {
    mockPackageJson({ react: "^18.0.0" });
    expect(hasPackage("react")).toBe(true);
  });

  it("returns false when dep is absent", () => {
    mockPackageJson({});
    expect(hasPackage("react")).toBe(false);
  });
});

describe("getComponentDir", () => {
  it("returns src/components/ui for Next.js project with src/", () => {
    mockPackageJson({ next: "^14.0.0" });
    mockExistsSync.mockReturnValue(true);
    expect(getComponentDir()).toBe("src/components/ui");
  });

  it("returns components/ui for Next.js project without src/", () => {
    mockPackageJson({ next: "^14.0.0" });
    mockExistsSync.mockReturnValue(false);
    expect(getComponentDir()).toBe("components/ui");
  });

  it("returns components/ui for non-Next.js projects even with src/", () => {
    mockPackageJson({ vite: "^5.0.0" });
    mockExistsSync.mockReturnValue(true);
    expect(getComponentDir()).toBe("components/ui");
  });
});

describe("writeComponent", () => {
  it("writes component source to the correct path", () => {
    mockPackageJson({});
    mockExistsSync.mockReturnValue(false);

    writeComponent("button", {
      source: "export default Button",
      dependencies: [],
      isClient: false,
    });

    expect(mockMkdirSync).toHaveBeenCalled();
    expect(mockWriteFileSync).toHaveBeenCalledWith(
      expect.stringContaining("button.tsx"),
      "export default Button",
      "utf-8",
    );
  });

  it('prepends "use client" for Next.js client components', () => {
    mockPackageJson({ next: "^14.0.0" });
    mockExistsSync.mockReturnValue(false);

    writeComponent("toggle", {
      source: "export default Toggle",
      dependencies: [],
      isClient: true,
    });

    expect(mockWriteFileSync).toHaveBeenCalledWith(
      expect.anything(),
      expect.stringContaining('"use client"'),
      "utf-8",
    );
  });

  it('does not prepend "use client" for non-Next.js projects', () => {
    mockPackageJson({ vite: "^5.0.0" });

    writeComponent("toggle", {
      source: "export default Toggle",
      dependencies: [],
      isClient: true,
    });

    const written = mockWriteFileSync.mock.calls[0][1] as string;
    expect(written).not.toContain('"use client"');
  });
});

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

vi.mock("node:fs", () => ({ existsSync: vi.fn() }));
vi.mock("node:child_process", () => ({ execSync: vi.fn() }));
vi.mock("../../packages/cli/src/utils/fs.js", () => ({ hasPackage: vi.fn() }));

import { existsSync } from "node:fs";
import { execSync } from "node:child_process";
import { hasPackage } from "../../packages/cli/src/utils/fs.js";
import { detectPackageManager, installDependencies } from "../../packages/cli/src/utils/deps.js";

const mockExistsSync = vi.mocked(existsSync);
const mockExecSync = vi.mocked(execSync);
const mockHasPackage = vi.mocked(hasPackage);

beforeEach(() => {
  mockExistsSync.mockReturnValue(false);
  mockHasPackage.mockReturnValue(false);
});

afterEach(() => vi.clearAllMocks());

describe("detectPackageManager", () => {
  it("detects bun via bun.lockb", () => {
    mockExistsSync.mockImplementation((p) => String(p).endsWith("bun.lockb"));
    expect(detectPackageManager()).toBe("bun");
  });

  it("detects pnpm via pnpm-lock.yaml", () => {
    mockExistsSync.mockImplementation((p) => String(p).endsWith("pnpm-lock.yaml"));
    expect(detectPackageManager()).toBe("pnpm");
  });

  it("detects yarn via yarn.lock", () => {
    mockExistsSync.mockImplementation((p) => String(p).endsWith("yarn.lock"));
    expect(detectPackageManager()).toBe("yarn");
  });

  it("falls back to npm when no lock file exists", () => {
    mockExistsSync.mockReturnValue(false);
    expect(detectPackageManager()).toBe("npm");
  });
});

describe("installDependencies", () => {
  it("does nothing when all deps are already installed", () => {
    mockHasPackage.mockReturnValue(true);
    installDependencies(["react", "tailwind-variants"]);
    expect(mockExecSync).not.toHaveBeenCalled();
  });

  it("installs only missing deps", () => {
    mockHasPackage.mockImplementation((dep) => dep === "react");
    installDependencies(["react", "tailwind-variants"]);
    expect(mockExecSync).toHaveBeenCalledWith(
      expect.stringContaining("tailwind-variants"),
      expect.anything(),
    );
    expect(mockExecSync).not.toHaveBeenCalledWith(
      expect.stringContaining("react "),
      expect.anything(),
    );
  });

  it("uses 'yarn add' for yarn projects", () => {
    mockExistsSync.mockImplementation((p) => String(p).endsWith("yarn.lock"));
    installDependencies(["lucide-react"]);
    expect(mockExecSync).toHaveBeenCalledWith(
      expect.stringContaining("yarn add"),
      expect.anything(),
    );
  });

  it("uses 'pnpm install' for pnpm projects", () => {
    mockExistsSync.mockImplementation((p) => String(p).endsWith("pnpm-lock.yaml"));
    installDependencies(["lucide-react"]);
    expect(mockExecSync).toHaveBeenCalledWith(
      expect.stringContaining("pnpm install"),
      expect.anything(),
    );
  });
});

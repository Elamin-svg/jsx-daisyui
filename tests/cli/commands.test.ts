import { describe, it, expect, vi, afterEach } from "vitest";

vi.mock("../../packages/cli/src/utils/registry.js", () => ({ fetchComponent: vi.fn() }));
vi.mock("../../packages/cli/src/utils/deps.js", () => ({ installDependencies: vi.fn() }));
vi.mock("../../packages/cli/src/utils/fs.js", () => ({
  hasPackage: vi.fn(),
  writeComponent: vi.fn(),
  getComponentDir: vi.fn(() => "components/ui"),
}));

import { fetchComponent } from "../../packages/cli/src/utils/registry.js";
import { installDependencies } from "../../packages/cli/src/utils/deps.js";
import { hasPackage, writeComponent } from "../../packages/cli/src/utils/fs.js";
import { add } from "../../packages/cli/src/commands/add.js";

const mockFetch = vi.mocked(fetchComponent);
const mockInstall = vi.mocked(installDependencies);
const mockHasPackage = vi.mocked(hasPackage);
const mockWrite = vi.mocked(writeComponent);

const validComponent = {
  source: "export default function Button() {}",
  dependencies: ["tailwind-variants"],
  isClient: false,
};

afterEach(() => vi.clearAllMocks());

describe("add command", () => {
  it("exits early when react is not installed", async () => {
    mockHasPackage.mockReturnValue(false);
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    await add("button");

    expect(spy).toHaveBeenCalledWith(expect.stringContaining("No React"));
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("exits early when solid-js is detected", async () => {
    mockHasPackage.mockImplementation((dep) => dep === "solid-js");
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    await add("button");

    expect(spy).toHaveBeenCalledWith(expect.stringContaining("SolidJS"));
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("exits early when fetchComponent returns null", async () => {
    mockHasPackage.mockImplementation((dep) => dep === "react");
    mockFetch.mockResolvedValue(null);

    await add("button");

    expect(mockInstall).not.toHaveBeenCalled();
    expect(mockWrite).not.toHaveBeenCalled();
  });

  it("installs deps and writes component on success", async () => {
    mockHasPackage.mockImplementation((dep) => dep === "react");
    mockFetch.mockResolvedValue(validComponent);

    await add("button");

    expect(mockInstall).toHaveBeenCalledWith(validComponent.dependencies);
    expect(mockWrite).toHaveBeenCalledWith("button", validComponent);
  });

  it("logs error and does not write when installDependencies throws", async () => {
    mockHasPackage.mockImplementation((dep) => dep === "react");
    mockFetch.mockResolvedValue(validComponent);
    mockInstall.mockImplementation(() => { throw new Error("npm ERR!"); });
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    await add("button");

    expect(spy).toHaveBeenCalledWith(expect.stringContaining("npm ERR!"));
    expect(mockWrite).not.toHaveBeenCalled();
  });
});

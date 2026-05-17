import { describe, it, expect, vi, afterEach } from "vitest";
import { fetchComponent } from "../../packages/cli/src/utils/registry.js";

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  delete process.env.JSX_DAISYUI_REGISTRY_URL;
});

const validComponent = {
  source: 'export default function Button() { return <button /> }',
  dependencies: ["tailwind-variants"],
  isClient: false,
};

describe("fetchComponent", () => {
  it("returns null and logs error on network failure", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("ENOTFOUND")));
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    const result = await fetchComponent("button");

    expect(result).toBeNull();
    expect(spy).toHaveBeenCalledWith(expect.stringContaining("internet connection"));
  });

  it("returns null and logs server error message on non-ok response", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      json: () => Promise.resolve({ message: "Not found" }),
    }));
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    const result = await fetchComponent("nonexistent");

    expect(result).toBeNull();
    expect(spy).toHaveBeenCalledWith(expect.stringContaining("Not found"));
  });

  it("returns null when response is missing required fields", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ source: "code" }), // missing dependencies + isClient
    }));
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    const result = await fetchComponent("button");

    expect(result).toBeNull();
    expect(spy).toHaveBeenCalledWith(expect.stringContaining("unexpected response"));
  });

  it("returns component data on valid response", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(validComponent),
    }));

    const result = await fetchComponent("button");

    expect(result).toEqual(validComponent);
  });

  it("uses JSX_DAISYUI_REGISTRY_URL env var when set", async () => {
    process.env.JSX_DAISYUI_REGISTRY_URL = "http://localhost:3000/api/registry";
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(validComponent),
    });
    vi.stubGlobal("fetch", fetchMock);

    await fetchComponent("button");

    expect(fetchMock).toHaveBeenCalledWith("http://localhost:3000/api/registry/button");
  });
});

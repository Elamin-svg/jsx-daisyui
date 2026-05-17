import type { CompApiRes } from "../types.js";

function getRegistryUrl(): string {
  return process.env.JSX_DAISYUI_REGISTRY_URL ?? "https://jsx-daisyui.com/api/registry";
}

function isValidResponse(data: unknown): data is CompApiRes {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof (data as CompApiRes).source === "string" &&
    Array.isArray((data as CompApiRes).dependencies) &&
    typeof (data as CompApiRes).isClient === "boolean"
  );
}

export async function fetchComponent(name: string): Promise<CompApiRes | null> {
  let res: Response;

  try {
    res = await fetch(`${getRegistryUrl()}/${name}`);
  } catch {
    console.error("❌ Could not reach the registry. Check your internet connection.");
    return null;
  }

  if (!res.ok) {
    const err = (await res.json().catch(() => ({}))) as { message?: string };
    console.error(`❌ ${err.message ?? `Failed to fetch component "${name}" (${res.status}).`}`);
    return null;
  }

  const data: unknown = await res.json();

  if (!isValidResponse(data)) {
    console.error(`❌ Registry returned an unexpected response for "${name}".`);
    return null;
  }

  return data;
}

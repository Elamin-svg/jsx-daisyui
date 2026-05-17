import path from "path";
import fs from "fs";
import { registry } from "@/../../registry/components/react/index";

export function getRegistryComponent(name: string) {
  const component = name ? (registry as Record<string, any>)[name] : null;
  if (!component) return null;

  const filePath = path.join(
    process.cwd(),
    "../../registry/components/react",
    component.file,
  );
  let source: string;
  try {
    source = fs.readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }

  return {
    source,
    dependencies: component.dependencies,
    isClient: component.isClient,
  };
}

import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { hasPackage } from "./fs.js";

export function detectPackageManager(): string {
  const cwd = process.cwd();
  if (existsSync(join(cwd, "bun.lockb")) || existsSync(join(cwd, "bun.lock"))) return "bun";
  if (existsSync(join(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (existsSync(join(cwd, "yarn.lock"))) return "yarn";
  return "npm";
}

export function installDependencies(deps: string[]): void {
  const missing = deps.filter((dep) => !hasPackage(dep));
  if (missing.length === 0) return;

  const pm = detectPackageManager();
  const cmd = pm === "yarn" ? "yarn add" : `${pm} install`;
  console.log(`📦 Installing with ${pm}: ${missing.join(", ")}`);
  execSync(`${cmd} ${missing.join(" ")}`, { stdio: "inherit" });
}

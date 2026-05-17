#!/usr/bin/env node
import { add } from "./commands/add.js";

const [command, arg] = process.argv.slice(2);

if (!command || !arg) {
  console.log("Usage: jsx-daisyui add <component>");
  process.exit(1);
}

const name = arg.trim().toLowerCase();

if (!/^[a-z0-9-]+$/.test(name)) {
  console.error(`❌ Invalid component name "${arg}". Use only letters, numbers, and hyphens.`);
  process.exit(1);
}

if (command === "add") {
  await add(name);
} else {
  console.error(`Unknown command: "${command}". Did you mean "add"?`);
  process.exit(1);
}

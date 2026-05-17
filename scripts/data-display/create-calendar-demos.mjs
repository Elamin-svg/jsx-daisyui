// scripts/data-display/create-calendar-demos.mjs
import fs from "fs";
import path from "path";
const ROOT = process.cwd();
function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

write(
  "registry/demos/react/data-display/calendar/calendar-default.tsx",
  `"use client";
import  Calendar  from "@registry/components/react/data-display/calendar";
import { useState } from "react";


export function CalendarDefault() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return <Calendar mode="single" selected={date} onSelect={setDate} />;
}
`,
);

console.log("\nDone!");

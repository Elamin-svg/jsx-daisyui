// apps/www/src/lib/search.ts
import Fuse from "fuse.js";
import { docs, type Doc } from "./docs";

export const fuse = new Fuse<Doc>(docs, {
  keys: ["title", "description"],
  threshold: 0.3,
});

export function search(query: string) {
  if (!query) return [];
  return fuse.search(query).map((r) => r.item);
}

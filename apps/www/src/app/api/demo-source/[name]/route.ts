import path from "path";
import fs from "fs";
import { registry } from "@/../../registry/previews/react/__index__";
import { type NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  const entry = (registry as Record<string, any>)[name];

  if (!entry) {
    return new Response("Not found", { status: 404 });
  }

  const filePath = path.join(
    process.cwd(),
    "../../registry/demos/react",
    entry.filePath + ".tsx",
  );

  let source: string;
  try {
    source = fs.readFileSync(filePath, "utf-8");
  } catch {
    return new Response("Not found", { status: 404 });
  }

  // Rewrite internal registry imports to the public-facing @/components/ui/ alias
  source = source.replace(
    /@registry\/components\/react\/[^/]+\//g,
    "@/components/ui/",
  );

  return new Response(source, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

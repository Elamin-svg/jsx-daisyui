import { getRegistryComponent } from "@/server/get-registry-comp";
import { registry } from "@/../../registry/components/react/index";
import { NextResponse, type NextRequest } from "next/server";

const VALID_NAMES = new Set(Object.keys(registry));

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;

  if (!name || !VALID_NAMES.has(name)) {
    return NextResponse.json(
      { message: "Please provide a valid component name" },
      { status: 400 },
    );
  }

  const component = getRegistryComponent(name);

  if (!component)
    return NextResponse.json({ message: "Not found" }, { status: 404 });

  return NextResponse.json(component);
}

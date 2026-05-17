import { notFound } from "next/navigation";
import {
  docs,
  getLastDocsByGroupSlug,
  getNextDocsByGroupSlug,
} from "@/lib/docs";
import { ScrollToTop } from "@/components/ui";
import Button from "@registry/components/react/forms/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getRegistryComponent } from "@/server/get-registry-comp";
import { makeComponents } from "@/components/docs";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function DocPage({ params }: Props) {
  const { id } = await params;

  const docEntry = docs.find((d) => d.slug === `/docs/${id}`);
  const nextDocEntry = getNextDocsByGroupSlug(`/docs/${id}`);
  const lastDocEntry = getLastDocsByGroupSlug(`/docs/${id}`);
  const registryComp = getRegistryComponent(id);

  if (!docEntry) notFound();

  try {
    const { default: Content } = await import(
      `@/content/${docEntry.group}/${id}.mdx`
    );

    return (
      <main className="max-w-4xl      ">
        <Content components={makeComponents(id, registryComp)} />
        <div className="w-full justify-between flex items-center pt-4">
          {lastDocEntry && (
            <Link href={lastDocEntry.slug}>
              <Button size="sm">
                <ArrowLeft className="size-3.5" /> {lastDocEntry.title}
              </Button>
            </Link>
          )}
          {nextDocEntry && (
            <Link href={nextDocEntry.slug}>
              <Button size="sm">
                {nextDocEntry.title} <ArrowRight className="size-3.5" />
              </Button>
            </Link>
          )}
        </div>
        <ScrollToTop />
      </main>
    );
  } catch {
    notFound();
  }
}

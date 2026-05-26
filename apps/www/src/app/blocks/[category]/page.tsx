import { categories, getBlocksByCategory } from "@/lib/blocks";
import { notFound } from "next/navigation";

export default async function BlocksCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;
  const blocksByCategory = getBlocksByCategory(category);
  let categoryData;

  if (blocksByCategory.length === 0) {
    return notFound();
  }

  categoryData = categories[category as keyof typeof categories];

  return (
    <main className="max-w-7xl min-h-[calc(100vh-8rem)] container mx-auto py-6 px-4 pt-12 xl:p-12">
      <div>
        <h1 className="text-5xl font-medium">{categoryData.name}</h1>
        <p className="mt-4 text-base-content/70">{categoryData.description}</p>
      </div>
    </main>
  );
}

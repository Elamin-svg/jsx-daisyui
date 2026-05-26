import { blocksData } from "@/blocks";
import BlocksCategoryGrid from "@/components/blocks/blocks-category-grid";

export default function Blocks() {
  console.log(blocksData);
  return (
    <main className="max-w-7xl min-h-[calc(100vh-8rem)] container mx-auto py-6 px-4 pt-12 xl:p-12">
      <div>
        <h1 className="text-5xl font-semibold">Blocks </h1>
        <p className="text-base-content/70 mt-4 max-w-4xl">
          Reusable components built with jsx-daisyui and designed to be used
          together to build pages. These are not documented as standalone
          components, but rather as a collection of components that can be used
          together to build pages.
        </p>
      </div>
      <BlocksCategoryGrid />
    </main>
  );
}

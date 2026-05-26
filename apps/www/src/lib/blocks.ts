import { BlockData, blocksData } from "@/blocks";

export const categories = {
  hero: {
    name: "Hero",
    description: "A hero block with a title, description, and call to action.",
  },
};

export function getBlocksByCategory(category?: string): BlockData[] {
  const blocksByCategory = [] as BlockData[];

  blocksData.forEach((blockData) => {
    if (blockData.category === category) {
      blocksByCategory.push(blockData);
    }
  });

  console.log("category", blocksData);
  console.log("blocksByCategory", blocksByCategory);

  return blocksByCategory;
}

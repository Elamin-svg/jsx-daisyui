import * as Heros from "./hero/index";

export type BlockData = {
  name: string;
  description: string;
  block: React.FC;
  category: "hero";
};

export const blocksData: BlockData[] = [...Object.values(Heros)];

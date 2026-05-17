import { visit } from "unist-util-visit";

export function remarkPreviewCode() {
  return (tree: any, file: any) => {
    const source = String(file);

    visit(tree, "mdxJsxFlowElement", (node: any) => {
      if (node.name !== "Preview") return;
      if (!node.position) return;

      const hasCode = node.attributes?.some((a: any) => a.name === "code");
      if (hasCode) return;

      const raw = source.slice(
        node.position.start.offset,
        node.position.end.offset,
      );

      const openEnd = raw.indexOf(">") + 1;
      const closeStart = raw.lastIndexOf("</Preview>");
      const innerCode = raw.slice(openEnd, closeStart).trim();
      if (!innerCode) return;

      node.attributes.push({
        type: "mdxJsxAttribute",
        name: "code",
        value: innerCode,
      });
    });
  };
}

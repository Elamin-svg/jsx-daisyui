import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { remarkPreviewCode } from "./src/plugins/remark-preview-code";

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkPreviewCode],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  outputFileTracingIncludes: {
    "/api/registry/[name]": ["../../registry/components/react/**/*.tsx"],
    "/api/demo-source/[name]": ["../../registry/demos/react/**/*.tsx"],
    "/docs/[id]": ["../../registry/components/react/**/*.tsx"],
  },
  webpack: (config) => {
    config.module.rules.push({
      resourceQuery: /raw/,
      type: "asset/source",
      exclude: /node_modules/,
    });
    return config;
  },
};

export default withMDX(nextConfig);

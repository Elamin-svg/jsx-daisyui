import {
  CodeBlock,
  Preview,
  PropsTable,
  InstallationClient as Installation,
} from "@/components/docs";
import { toast } from "@registry/components/react/feedback/toast";
import Button from "@registry/components/react/forms/button";
import Link from "@registry/components/react/navigation/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import NextLink from "next/link";
import Alert from "@registry/components/react/feedback/alert";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => <h2 className="text-2xl     ">{children}</h2>,
    h3: ({ children }) => (
      <h3 className="text-lg text-base-content/70 mt-4 mb-2 ">{children}</h3>
    ),
    ul: ({ children }) => (
      <ul className="list-disc   pl-6 pt-4 text-base-content/85">{children}</ul>
    ),
    code: ({ children }) => (
      <code className="badge badge-neutral badge-soft font-mono text-sm">
        {children}
      </code>
    ),
    blockquote: ({ children }) => (
      <Alert style="soft" className="mt-3">
        {children}
      </Alert>
    ),
    hr: () => <hr className=" border-transparent h-10" />,
    Preview,
    CodeBlock,
    Installation,
    Button,
    CheckCircle,
    toast,
    PropsTable,
    NextLink,
    Link,
    ArrowRight,
    ...components,
  };
}

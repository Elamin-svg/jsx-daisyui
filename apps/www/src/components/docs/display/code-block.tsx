"use client";

import { useState, useEffect, useRef, memo, useCallback } from "react";
import { codeToHtml } from "shiki";
import { Copy, Check } from "lucide-react";
import Button from "@registry/components/react/forms/button";

function getTheme(): string {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "github-dark"
    : "light-plus";
}

type Props = {
  code: string;
  label?: string;
  lang?: string;
  className?: string;
};

function CodeBlockComponent({ code, label, lang = "tsx", className }: Props) {
  const [highlighted, setHighlighted] = useState("");
  const [copied, setCopied] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const highlight = useCallback(async () => {
    const html = await codeToHtml(code, { lang, theme: getTheme() });
    if (mountedRef.current) setHighlighted(html);
  }, [code, lang]);

  useEffect(() => {
    highlight();
  }, [highlight]);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.attributeName === "data-theme") {
          highlight();
          break;
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, [code, highlight]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={`my-4 max-h-112 min-h-25 w-full overflow-y-auto rounded-box border border-base-300 overflow-hidden shadow-xs ${className ?? ""}`}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-base-200 border-b border-base-300">
        <span className="text-sm font-mono text-base-content/50">
          {label || lang}
        </span>
        <Button
          className="size-fit p-1.5 text-base-content/80"
          variant="ghost"
          onClick={handleCopy}
        >
          {copied ? (
            <Check size={16} className="transition-all" />
          ) : (
            <Copy size={16} className="transition-all" />
          )}
        </Button>
      </div>

      <div
        className="text-sm overflow-x-auto [&>pre]:bg-base-100! [&>pre]:p-4 [&>pre]:m-0"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
}

export const CodeBlock = memo(CodeBlockComponent);

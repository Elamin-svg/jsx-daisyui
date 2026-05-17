"use client";

import {
  useState,
  useEffect,
  useRef,
  memo,
  Suspense,
  useCallback,
} from "react";
import { codeToHtml } from "shiki";
import { registry } from "@registry/previews/react/__index__";
import Loader from "@registry/components/react/feedback/loading";

const highlightCache = new Map<string, string>();

async function getHighlighted(code: string, theme: string): Promise<string> {
  const key = `${theme}::${code}`;
  if (highlightCache.has(key)) return highlightCache.get(key)!;
  const html = await codeToHtml(code, { lang: "tsx", theme });
  highlightCache.set(key, html);
  return html;
}

function getTheme(): string {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "github-dark"
    : "light-plus";
}

type Props = {
  name?: string;
  children?: React.ReactNode;
  code?: string;
  label?: string;
  className?: string;
};

function PreviewComponent({ name, children, code, label, className }: Props) {
  //safe indexed access to avoid TS error
  const item = name ? (registry as Record<string, any>)[name] : null;
  const Component = item?.component;
  const finalCode = code || item?.source;
  const finalLabel = label || name || "";

  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [highlighted, setHighlighted] = useState("");

  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const highlight = useCallback(async () => {
    if (!finalCode) return;
    const html = await getHighlighted(finalCode, getTheme());
    if (mountedRef.current) setHighlighted(html);
  }, [finalCode]);

  useEffect(() => {
    highlight();
  }, [highlight]);

  useEffect(() => {
    if (!finalCode) return;
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
  }, [finalCode, highlight]);

  if (name && !item) {
    return (
      <div className="my-6 p-4 border rounded-box text-error">
        Unknown preview: <code>{name}</code>
      </div>
    );
  }

  return (
    <>
      <div
        className={`mt-3 mb-10 w-full rounded-box h-fit     border relative shadow-xs max-w-6xl border-base-300 ${className ?? ""}`}
      >
        <div className="flex items-center justify-between px-4 py-2 bg-base-200 border-b border-base-300">
          <span className="text-sm font-mono text-base-content/50">
            {finalLabel}
          </span>
          {finalCode && (
            <div className="tabs tabs-boxed tabs-sm">
              <button
                className={`tab ${tab === "preview" ? "tab-active" : ""}`}
                onClick={() => setTab("preview")}
              >
                Preview
              </button>
              <button
                className={`tab ${tab === "code" ? "tab-active" : ""}`}
                onClick={() => setTab("code")}
              >
                Code
              </button>
            </div>
          )}
        </div>
        <div className="overflow-x-auto">
          {tab === "preview" ? (
            <div className="p-4 overflow-x-auto  min-w-xs  min-h-80 max-h-140 h-fit flex flex-wrap items-center justify-center gap-4 bg-base-100">
              {Component ? (
                <Suspense fallback={<Loader variant="ring" />}>
                  <Component />
                </Suspense>
              ) : (
                children
              )}
            </div>
          ) : (
            <div
              className="text-sm     min-w-xs [&>pre]:bg-base-100! [&>pre]:p-4 [&>pre]:m-0"
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export const Preview = memo(PreviewComponent);

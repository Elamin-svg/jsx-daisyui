"use client";

import { useState, memo } from "react";
import { Copy, Check } from "lucide-react";
import Button from "@registry/components/react/forms/button";

const MANAGERS = ["npm", "yarn", "pnpm", "bun"] as const;
type Manager = (typeof MANAGERS)[number];

const commands: Record<Manager, (name: string) => string> = {
  npm: (name) => `npx jsx-daisyui add ${name}`,
  yarn: (name) => `yarn dlx jsx-daisyui add ${name}`,
  pnpm: (name) => `pnpm dlx jsx-daisyui add ${name}`,
  bun: (name) => `bunx jsx-daisyui add ${name}`,
};

type Props = { name: string };

function CommandBlockComponent({ name }: Props) {
  const [manager, setManager] = useState<Manager>("npm");
  const [copied, setCopied] = useState(false);

  const command = commands[manager](name);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const activeClass = "tab-active border border-base-200 bg-base-100";

  return (
    <div className="my-3 w-full rounded-box border border-base-300 overflow-hidden shadow-xs">
      <div className="flex items-center bg-base-200 border-b border-base-300 px-3 py-1.5 gap-0.5">
        <div className="tabs flex items-center gap-0.5 *:py-1 *:rounded-lg *:h-fit">
          {MANAGERS.map((m) => (
            <button
              key={m}
              className={`tab text-sm ${manager === m ? activeClass : ""}`}
              onClick={() => setManager(m)}
            >
              {m}
            </button>
          ))}
        </div>
        <Button
          className="ml-auto size-fit p-1.5 text-base-content/80"
          variant="ghost"
          onClick={handleCopy}
        >
          {copied ? (
            <Check size={14} className="transition-all" />
          ) : (
            <Copy size={14} className="transition-all" />
          )}
        </Button>
      </div>

      <div className="px-4 py-3 bg-base-100">
        <code className="text-sm font-mono text-base-content/80">
          {command}
        </code>
      </div>
    </div>
  );
}

export const CommandBlock = memo(CommandBlockComponent);

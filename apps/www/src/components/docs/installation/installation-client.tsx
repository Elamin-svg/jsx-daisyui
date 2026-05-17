"use client";

import { Tabs } from "@registry/components/react/navigation/tabs";
import { CodeBlock, CommandBlock } from "../display";

export function InstallationClient({
  name,
  source,
}: {
  name: string;
  source: string | null;
}) {
  return (
    <div className="pt-4 mb-8">
      <h6 className="text-2xl mb-2">Installation</h6>
      <Tabs defaultValue="command" variant="border">
        <Tabs.List>
          <Tabs.Trigger value="command">Command</Tabs.Trigger>
          <Tabs.Trigger value="manually">Manually</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="command">
          <CommandBlock name={name} />
        </Tabs.Content>
        <Tabs.Content value="manually">
          <CodeBlock code={source ?? ""} label={`${name}.tsx`} />
        </Tabs.Content>
      </Tabs>
    </div>
  );
}

import { Tabs } from "@registry/components/react/navigation/tabs";

export function TabsBorder() {
  return (
    <Tabs defaultValue="tab1" variant="border">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="py-4">Tab 1 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p className="py-4">Tab 2 content</p>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <p className="py-4">Tab 3 content</p>
      </Tabs.Content>
    </Tabs>
  );
}

import { Dock } from "@registry/components/react/navigation/dock";

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const InboxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export function DockWithLabels() {
  return (
    <Dock defaultValue="home" className="relative w-full max-w-xs">
      <Dock.Item value="home">
        <HomeIcon />
        <Dock.ItemLabel>Home</Dock.ItemLabel>
      </Dock.Item>
      <Dock.Item value="inbox">
        <InboxIcon />
        <Dock.ItemLabel>Inbox</Dock.ItemLabel>
      </Dock.Item>
      <Dock.Item value="profile">
        <UserIcon />
        <Dock.ItemLabel>Profile</Dock.ItemLabel>
      </Dock.Item>
    </Dock>
  );
}

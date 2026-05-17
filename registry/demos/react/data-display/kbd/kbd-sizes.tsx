import Kbd from "@registry/components/react/data-display/kbd";

export function KbdSizes() {
  return (
    <div className="flex items-center gap-2">
      <Kbd size="xs">Ctrl</Kbd>
      <Kbd size="sm">Ctrl</Kbd>
      <Kbd size="md">Ctrl</Kbd>
      <Kbd size="lg">Ctrl</Kbd>
      <Kbd size="xl">Ctrl</Kbd>
    </div>
  );
}

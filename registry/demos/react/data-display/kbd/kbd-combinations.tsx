import Kbd from "@registry/components/react/data-display/kbd";

export function KbdCombinations() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-1">
        <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
      </div>
      <div className="flex items-center gap-1">
        <Kbd>⌘</Kbd> + <Kbd>K</Kbd>
      </div>
      <div className="flex items-center gap-1">
        <Kbd>Alt</Kbd> + <Kbd>F4</Kbd>
      </div>
    </div>
  );
}

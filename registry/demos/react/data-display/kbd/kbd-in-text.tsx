import Kbd from "@registry/components/react/data-display/kbd";

export function KbdInText() {
  return (
    <p className="text-base-content">
      Press <Kbd size="sm">Ctrl</Kbd> + <Kbd size="sm">S</Kbd> to save, or{" "}
      <Kbd size="sm">⌘</Kbd> + <Kbd size="sm">Z</Kbd> to undo.
    </p>
  );
}

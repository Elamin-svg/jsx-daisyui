import Link from "@registry/components/react/navigation/link";

export function LinkColors() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link href="#" color="neutral">Neutral</Link>
      <Link href="#" color="primary">Primary</Link>
      <Link href="#" color="secondary">Secondary</Link>
      <Link href="#" color="accent">Accent</Link>
      <Link href="#" color="info">Info</Link>
      <Link href="#" color="success">Success</Link>
      <Link href="#" color="warning">Warning</Link>
      <Link href="#" color="error">Error</Link>
    </div>
  );
}

import { Card } from "@registry/components/react/data-display/card";

export default function BlocksCategoryGrid() {
  return (
    <div className="grid mt-8 grid-cols-3 gap-4">
      <Card
        variant="border"
        className="cursor-pointer border-base-300  hover:-translate-y-1 shadow-xs transition-all hover:bg-base-200/30  "
      >
        <Card.Body className="gap-0.5 py-4">
          <Card.Title className="font-normal">Accordion</Card.Title>
          <p className="text-base-content/50">12 blocks</p>
        </Card.Body>
      </Card>
    </div>
  );
}

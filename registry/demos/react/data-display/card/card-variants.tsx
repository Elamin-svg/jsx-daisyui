import { Card } from "@registry/components/react/data-display/card";

export function CardVariants() {
  return (
    <div className="flex flex-wrap gap-4">
      <Card variant="shadow" className="w-48">
        <Card.Body><Card.Title>Shadow</Card.Title><p>Default shadow card.</p></Card.Body>
      </Card>
      <Card variant="border" className="w-48">
        <Card.Body><Card.Title>Border</Card.Title><p>Bordered card variant.</p></Card.Body>
      </Card>
      <Card variant="dash" className="w-48">
        <Card.Body><Card.Title>Dash</Card.Title><p>Dashed border card.</p></Card.Body>
      </Card>
    </div>
  );
}

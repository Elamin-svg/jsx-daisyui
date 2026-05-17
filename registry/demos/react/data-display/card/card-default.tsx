import { Card } from "@registry/components/react/data-display/card";
import Button from "@registry/components/react/forms/button";

export function CardDefault() {
  return (
    <Card className="w-72">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <p>A simple card with a title, body text, and action button.</p>
        <Card.Actions>
          <Button color="primary" size="sm">Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}

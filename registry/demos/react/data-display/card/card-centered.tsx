import { Card } from "@registry/components/react/data-display/card";
import Button from "@registry/components/react/forms/button";

export function CardCentered() {
  return (
    <Card className="w-64 bg-primary text-primary-content">
      <Card.Body centered>
        <Card.Title>Congratulations!</Card.Title>
        <p>You have been selected for a special offer.</p>
        <Card.Actions>
          <Button>Claim now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}

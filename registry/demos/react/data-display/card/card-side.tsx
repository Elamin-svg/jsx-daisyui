import { Card } from "@registry/components/react/data-display/card";
import Button from "@registry/components/react/forms/button";

export function CardSide() {
  return (
    <Card side className="max-w-sm">
      <Card.Figure src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="w-32 h-full" />
      <Card.Body>
        <Card.Title>New Arrivals</Card.Title>
        <p>Click the button to listen on Spotiwhy app.</p>
        <Card.Actions>
          <Button color="primary" size="sm">Listen</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}

import { Card } from "@registry/components/react/data-display/card";
import Button from "@registry/components/react/forms/button";

export function CardImage() {
  return (
    <Card className="w-72">
      <Card.Figure src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
      <Card.Body>
        <Card.Title>Classic Sneakers</Card.Title>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <Card.Actions>
          <Button color="primary">Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}

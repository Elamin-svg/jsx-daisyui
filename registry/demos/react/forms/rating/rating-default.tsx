import { Rating } from "@registry/components/react/forms/rating";

export function RatingDefault() {
  return (
    <Rating name="rating-default" defaultValue={2}>
      <Rating.Item itemIndex={1} aria-label="1 star" />
      <Rating.Item itemIndex={2} aria-label="2 stars" />
      <Rating.Item itemIndex={3} aria-label="3 stars" />
      <Rating.Item itemIndex={4} aria-label="4 stars" />
      <Rating.Item itemIndex={5} aria-label="5 stars" />
    </Rating>
  );
}

import { Rating } from "@registry/components/react/forms/rating";

export function RatingHidden() {
  return (
    <Rating name="rating-hidden-demo" defaultValue={2} size="lg">
      <Rating.Hidden />
      {[1, 2, 3, 4, 5].map((n) => (
        <Rating.Item
          key={n}
          itemIndex={n}
          mask="mask-star-2"
          aria-label={`${n} star`}
        />
      ))}
    </Rating>
  );
}

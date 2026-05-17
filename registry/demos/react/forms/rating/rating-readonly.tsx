import { Rating } from "@registry/components/react/forms/rating";

export function RatingReadonly() {
  return (
    <Rating name="rating-readonly" value={3} readOnly size="lg">
      {[1, 2, 3, 4, 5].map((n) => (
        <Rating.Item
          key={n}
          itemIndex={n}
          mask="mask-star-2"
          color="bg-orange-400"
          aria-label={`${n} star`}
        />
      ))}
    </Rating>
  );
}

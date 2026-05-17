import * as React from "react";
import { Rating } from "@registry/components/react/forms/rating";

export function RatingHalf() {
  return (
    <Rating name="rating-half-demo" defaultValue={3} size="lg" half>
      <Rating.Hidden />
      {Array.from({ length: 5 }, (_, star) => (
        <React.Fragment key={star}>
          <Rating.Item
            itemIndex={star * 2 + 1}
            mask="mask-star-2"
            color="bg-green-500"
            halfSide="first"
            aria-label={`${star + 0.5} stars`}
          />
          <Rating.Item
            itemIndex={star * 2 + 2}
            mask="mask-star-2"
            color="bg-green-500"
            halfSide="second"
            aria-label={`${star + 1} stars`}
          />
        </React.Fragment>
      ))}
    </Rating>
  );
}

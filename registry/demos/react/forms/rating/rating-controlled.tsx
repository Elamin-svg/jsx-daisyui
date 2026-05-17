"use client";

import * as React from "react";
import { Rating } from "@registry/components/react/forms/rating";

export function RatingControlled() {
  const [value, setValue] = React.useState<number>(3);

  return (
    <div className="flex flex-col gap-4">
      <Rating
        name="rating-controlled"
        value={value}
        onValueChange={setValue}
        size="lg"
      >
        <Rating.Hidden onClick={() => setValue(0)} />
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
      <p className="text-sm text-base-content/60">
        Selected: <strong>{value > 0 ? `${value} / 5` : "none (cleared)"}</strong>
      </p>
    </div>
  );
}

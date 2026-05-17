import { Rating } from "@registry/components/react/forms/rating";

export function RatingSizes() {
  return (
    <div className="flex flex-col items-center gap-3">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Rating key={size} name={`rating-size-${size}`} defaultValue={2} size={size}>
          {[1, 2, 3, 4, 5].map((n) => (
            <Rating.Item key={n} itemIndex={n} aria-label={`${n} star`} />
          ))}
        </Rating>
      ))}
    </div>
  );
}

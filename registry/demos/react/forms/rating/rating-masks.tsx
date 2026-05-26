import { Rating, type RatingMask } from "@registry/components/react/forms/rating";

const MASK_DEMOS: { mask: RatingMask; color: string; label: string }[] = [
  { mask: "mask-star",   color: "bg-yellow-400", label: "Star"   },
  { mask: "mask-star-2", color: "bg-orange-400", label: "Star 2" },
  { mask: "mask-heart",  color: "bg-red-400",    label: "Heart"  },
];

export function RatingMasks() {
  return (
    <div className="flex flex-col gap-4">
      {MASK_DEMOS.map(({ mask, color, label }, i) => (
        <div key={mask} className="flex items-center gap-4">
          <span className="w-16 text-sm text-base-content/60">{label}</span>
          <Rating name={`rating-mask-${i}`} defaultValue={2} size="lg">
            {[1, 2, 3, 4, 5].map((n) => (
              <Rating.Item
                key={n}
                itemIndex={n}
                mask={mask}
                color={color}
                aria-label={`${n} star`}
              />
            ))}
          </Rating>
        </div>
      ))}
    </div>
  );
}

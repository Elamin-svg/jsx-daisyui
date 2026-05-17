import { Rating } from "@registry/components/react/forms/rating";

const COLOR_DEMOS = [
  { color: "bg-orange-400", label: "Orange" },
  { color: "bg-green-500",  label: "Green"  },
  { color: "bg-red-400",    label: "Red"    },
  { color: "bg-blue-400",   label: "Blue"   },
  { color: "bg-purple-400", label: "Purple" },
];

export function RatingColors() {
  return (
    <div className="flex flex-col gap-3">
      {COLOR_DEMOS.map(({ color, label }, i) => (
        <div key={color} className="flex items-center gap-4">
          <span className="w-16 text-sm text-base-content/60">{label}</span>
          <Rating name={`rating-color-${i}`} defaultValue={3}>
            {[1, 2, 3, 4, 5].map((n) => (
              <Rating.Item
                key={n}
                itemIndex={n}
                mask="mask-star-2"
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

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const maskVariants = tv({
  base: "mask",
  variants: {
    shape: {
      squircle: "mask-squircle",
      heart: "mask-heart",
      hexagon: "mask-hexagon",
      "hexagon-2": "mask-hexagon-2",
      decagon: "mask-decagon",
      pentagon: "mask-pentagon",
      diamond: "mask-diamond",
      square: "mask-square",
      circle: "mask-circle",
      star: "mask-star",
      "star-2": "mask-star-2",
      triangle: "mask-triangle",
      "triangle-2": "mask-triangle-2",
      "triangle-3": "mask-triangle-3",
      "triangle-4": "mask-triangle-4",
    },
    half: {
      "1": "mask-half-1",
      "2": "mask-half-2",
    },
  },
});

type MaskVariants = VariantProps<typeof maskVariants>;

export type MaskShape = NonNullable<MaskVariants["shape"]>;

export type MaskProps = Omit<React.ComponentProps<"img">, "color"> & MaskVariants;

const Mask = React.forwardRef<HTMLImageElement, MaskProps>(
  ({ shape, half, className, ...props }, ref) => (
    <img ref={ref} className={maskVariants({ shape, half, className })} {...props} />
  )
);

Mask.displayName = "Mask";

export default Mask;

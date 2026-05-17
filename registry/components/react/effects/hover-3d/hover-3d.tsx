import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const hover3dVariants = tv({
  base: "hover-3d",
  variants: {
    zones: {
      4: "",
      6: "",
      8: "",
      10: "",
      12: "",
    },
  },
  defaultVariants: {
    zones: 8,
  },
});

type Hover3DVariants = VariantProps<typeof hover3dVariants>;

export type Hover3DProps = Omit<React.ComponentProps<"div">, "color"> &
  Hover3DVariants;

const Hover3D = React.forwardRef<HTMLDivElement, Hover3DProps>(
  ({ zones = 8, className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={hover3dVariants({ zones, className })} {...props}>
        {children}
        {Array.from({ length: zones as number }, (_, i) => (
          <div key={i} />
        ))}
      </div>
    );
  }
);

Hover3D.displayName = "Hover3D";

export default Hover3D;

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const hoverGalleryVariants = tv({
  base: "hover-gallery",
  variants: {
    maxWidth: {
      "max-w-40": "max-w-40",
      "max-w-48": "max-w-48",
      "max-w-60": "max-w-60",
      "max-w-72": "max-w-72",
      "max-w-80": "max-w-80",
      "max-w-96": "max-w-96",
    },
  },
  defaultVariants: {
    maxWidth: "max-w-60",
  },
});

type HoverGalleryVariants = VariantProps<typeof hoverGalleryVariants>;

export type HoverGalleryProps = Omit<React.ComponentProps<"figure">, "color"> &
  HoverGalleryVariants & {
    images: { src: string; alt?: string }[];
  };

const HoverGallery = React.forwardRef<HTMLElement, HoverGalleryProps>(
  ({ images, maxWidth, className, ...props }, ref) => {
    return (
      <figure
        ref={ref}
        className={hoverGalleryVariants({ maxWidth, className })}
        {...props}
      >
        {images.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt ?? ""} />
        ))}
      </figure>
    );
  }
);

HoverGallery.displayName = "HoverGallery";

export default HoverGallery;

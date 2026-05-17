import HoverGallery from "@registry/components/react/effects/hover-gallery";

const images = [
  { src: "https://picsum.photos/seed/a/200/200", alt: "Photo 1" },
  { src: "https://picsum.photos/seed/b/200/200", alt: "Photo 2" },
  { src: "https://picsum.photos/seed/c/200/200", alt: "Photo 3" },
  { src: "https://picsum.photos/seed/d/200/200", alt: "Photo 4" },
  { src: "https://picsum.photos/seed/e/200/200", alt: "Photo 5" },
];

export function HoverGalleryDefault() {
  return <HoverGallery images={images} />;
}

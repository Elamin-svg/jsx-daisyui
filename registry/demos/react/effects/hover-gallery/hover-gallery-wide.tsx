import HoverGallery from "@registry/components/react/effects/hover-gallery";

const images = [
  { src: "https://picsum.photos/seed/f/200/200", alt: "Photo 1" },
  { src: "https://picsum.photos/seed/g/200/200", alt: "Photo 2" },
  { src: "https://picsum.photos/seed/h/200/200", alt: "Photo 3" },
  { src: "https://picsum.photos/seed/i/200/200", alt: "Photo 4" },
  { src: "https://picsum.photos/seed/j/200/200", alt: "Photo 5" },
  { src: "https://picsum.photos/seed/k/200/200", alt: "Photo 6" },
];

export function HoverGalleryWide() {
  return <HoverGallery images={images} maxWidth="max-w-80" />;
}

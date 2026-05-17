import { Carousel } from "@registry/components/react/data-display/carousel";

export function CarouselMulti() {
  return (
    <Carousel className="rounded-box w-64 gap-2">
      {["photo-1559703248-dcaaec9fab78", "photo-1565098772267-60af42b81ef2", "photo-1572635148818-ef6fd45eb394", "photo-1559703248-dcaaec9fab78"].map((p, i) => (
        <Carousel.Item key={i} className="w-1/2">
          <img src={`https://img.daisyui.com/images/stock/${p}.webp`} className="w-full rounded-box" alt={`Slide ${i + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

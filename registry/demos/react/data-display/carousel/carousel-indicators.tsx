import { Carousel } from "@registry/components/react/data-display/carousel";

export function CarouselIndicators() {
  return (
    <div className="flex flex-col gap-2">
      <Carousel className="rounded-box w-64" snap="center">
        <Carousel.Item id="slide1" full>
          <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" className="w-full" alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item id="slide2" full>
          <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" className="w-full" alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item id="slide3" full>
          <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" className="w-full" alt="Slide 3" />
        </Carousel.Item>
      </Carousel>
      <Carousel.Indicators count={3} prefix="slide" />
    </div>
  );
}

// scripts/data-display/create-carousel-demos.mjs
import fs from "fs";
import path from "path";
const ROOT = process.cwd();
function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

write(
  "registry/demos/react/data-display/carousel/carousel-default.tsx",
  `import { Carousel } from "@registry/components/react/data-display/carousel";

export function CarouselDefault() {
  return (
    <Carousel className="rounded-box w-64">
      <Carousel.Item id="item1" full>
        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" className="w-full" alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item id="item2" full>
        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" className="w-full" alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item id="item3" full>
        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" className="w-full" alt="Slide 3" />
      </Carousel.Item>
    </Carousel>
  );
}
`,
);

write(
  "registry/demos/react/data-display/carousel/carousel-indicators.tsx",
  `import { Carousel } from "@registry/components/react/data-display/carousel";

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
`,
);

write(
  "registry/demos/react/data-display/carousel/carousel-multi.tsx",
  `import { Carousel } from "@registry/components/react/data-display/carousel";

export function CarouselMulti() {
  return (
    <Carousel className="rounded-box w-64 gap-2">
      {["photo-1559703248-dcaaec9fab78", "photo-1565098772267-60af42b81ef2", "photo-1572635148818-ef6fd45eb394", "photo-1559703248-dcaaec9fab78"].map((p, i) => (
        <Carousel.Item key={i} className="w-1/2">
          <img src={\`https://img.daisyui.com/images/stock/\${p}.webp\`} className="w-full rounded-box" alt={\`Slide \${i + 1}\`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
`,
);

console.log("\nDone!");

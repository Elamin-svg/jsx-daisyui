import Hover3D from "@registry/components/react/effects/hover-3d";

export function Hover3DCard() {
  return (
    <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
      <Hover3D>
        {/* content */}
        <figure className="  rounded-2xl">
          <img
            src="https://img.daisyui.com/images/stock/card-1.webp?x"
            alt="Tailwind CSS 3D card"
          />
        </figure>
      </Hover3D>

      <Hover3D>
        {/* content */}
        <figure className=" rounded-2xl">
          <img
            src="https://img.daisyui.com/images/stock/card-2.webp?x"
            alt="Tailwind CSS 3D hover"
          />
        </figure>
      </Hover3D>

      <Hover3D>
        {/* content */}
        <figure className=" rounded-2xl">
          <img
            src="https://img.daisyui.com/images/stock/card-3.webp?x"
            alt="Tailwind CSS 3D hover"
          />
        </figure>
      </Hover3D>
    </div>
  );
}


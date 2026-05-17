import Hover3D from "@registry/components/react/effects/hover-3d";

export function Hover3DDefault() {
  return (
    <Hover3D className=" ">
      {/* content */}
      <figure className="max-w-100 rounded-2xl">
        <img
          src="https://img.daisyui.com/images/stock/creditcard.webp"
          alt="3D card"
        />
      </figure>
    </Hover3D>
  );
}

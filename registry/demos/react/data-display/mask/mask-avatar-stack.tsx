import Mask from "@registry/components/react/data-display/mask";

const AVATARS = [
  "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
  "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
];

export function MaskAvatarStack() {
  return (
    <div className="flex flex-col gap-6 items-center">
      {/* Circle stack */}
      <div className="flex -space-x-4">
        {AVATARS.map((src, i) => (
          <Mask
            key={i}
            shape="circle"
            src={src}
            alt={`Avatar ${i + 1}`}
            className="w-12 h-12 border-2 border-base-100"
          />
        ))}
      </div>
      {/* Hexagon stack */}
      <div className="flex -space-x-3">
        {AVATARS.map((src, i) => (
          <Mask
            key={i}
            shape="hexagon"
            src={src}
            alt={`Avatar ${i + 1}`}
            className="w-12 h-12"
          />
        ))}
      </div>
      {/* Squircle stack */}
      <div className="flex -space-x-3">
        {AVATARS.map((src, i) => (
          <Mask
            key={i}
            shape="squircle"
            src={src}
            alt={`Avatar ${i + 1}`}
            className="w-12 h-12"
          />
        ))}
      </div>
    </div>
  );
}

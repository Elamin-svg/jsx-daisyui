import Mask from "@registry/components/react/data-display/mask";

const TEAM = [
  { name: "Sarah K.",  role: "CEO",             src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
  { name: "Marcus L.", role: "CTO",             src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" },
  { name: "Priya M.",  role: "Head of Design",  src: "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp" },
  { name: "Tom R.",    role: "Lead Engineer",   src: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" },
];

export function MaskTeam() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
      {TEAM.map(({ name, role, src }) => (
        <div key={name} className="flex flex-col items-center gap-3">
          <Mask
            shape="squircle"
            src={src}
            alt={name}
            className="w-20 h-20"
          />
          <div className="text-center">
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-base-content/50">{role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

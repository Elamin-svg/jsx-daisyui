import Mask from "@registry/components/react/data-display/mask";

export function MaskHalf() {
  return (
    <div className="flex items-center gap-1">
      <Mask shape="star-2" half="1" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" alt="half star 1" className="w-16 h-16 bg-yellow-400" />
      <Mask shape="star-2" half="2" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" alt="half star 2" className="w-16 h-16 bg-yellow-400" />
    </div>
  );
}

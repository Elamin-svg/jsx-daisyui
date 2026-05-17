import  Mask, {type MaskShape } from "@registry/components/react/data-display/mask";

const SHAPES: { shape: MaskShape; label: string }[] = [
  { shape: "squircle",    label: "Squircle"    },
  { shape: "heart",       label: "Heart"       },
  { shape: "hexagon",     label: "Hexagon"     },
  { shape: "hexagon-2",   label: "Hexagon 2"   },
  { shape: "decagon",     label: "Decagon"     },
  { shape: "pentagon",    label: "Pentagon"    },
  { shape: "diamond",     label: "Diamond"     },
  { shape: "square",      label: "Square"      },
  { shape: "circle",      label: "Circle"      },
  { shape: "star",        label: "Star"        },
  { shape: "star-2",      label: "Star 2"      },
  { shape: "triangle",    label: "Triangle ↑"  },
  { shape: "triangle-2",  label: "Triangle ↓"  },
  { shape: "triangle-3",  label: "Triangle ←"  },
  { shape: "triangle-4",  label: "Triangle →"  },
];

export function MaskAllShapes() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {SHAPES.map(({ shape, label }) => (
        <div key={shape} className="flex flex-col items-center gap-2">
          <Mask
            shape={shape}
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
            alt={label}
            className="w-16 h-16"
          />
          <span className="text-xs text-base-content/50">{label}</span>
        </div>
      ))}
    </div>
  );
}

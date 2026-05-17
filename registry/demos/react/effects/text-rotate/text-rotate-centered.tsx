import { TextRotate } from "@registry/components/react/effects/text-rotate";

export function TextRotateCentered() {
  return (
    <div className="text-center">
      <p className="text-base-content/60 text-sm mb-1">Currently showing</p>
      <TextRotate centered className="text-2xl font-semibold text-secondary">
        <TextRotate.List>
          <TextRotate.Item>Tailwind CSS</TextRotate.Item>
          <TextRotate.Item>DaisyUI</TextRotate.Item>
          <TextRotate.Item>React</TextRotate.Item>
        </TextRotate.List>
      </TextRotate>
    </div>
  );
}

import { TextRotate } from "@registry/components/react/effects/text-rotate";

export function TextRotateInline() {
  return (
    <h2 className="text-3xl font-bold text-center">
      Build with{" "}
      <TextRotate className="text-primary">
        <TextRotate.List>
          <TextRotate.Item>speed</TextRotate.Item>
          <TextRotate.Item>style</TextRotate.Item>
          <TextRotate.Item>confidence</TextRotate.Item>
          <TextRotate.Item>daisyUI</TextRotate.Item>
        </TextRotate.List>
      </TextRotate>
    </h2>
  );
}

import { TextRotate } from "@registry/components/react/effects/text-rotate";

export function TextRotateDefault() {
  return (
    <TextRotate>
      <TextRotate.List>
        <TextRotate.Item>React</TextRotate.Item>
        <TextRotate.Item>Vue</TextRotate.Item>
        <TextRotate.Item>Svelte</TextRotate.Item>
        <TextRotate.Item>Angular</TextRotate.Item>
      </TextRotate.List>
    </TextRotate>
  );
}

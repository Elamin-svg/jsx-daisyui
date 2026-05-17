import { Steps } from "@registry/components/react/navigation/steps";

export function StepsVertical() {
  return (
    <Steps direction="vertical" activeStep={2}>
      <Steps.Item>Register</Steps.Item>
      <Steps.Item>Choose plan</Steps.Item>
      <Steps.Item>Purchase</Steps.Item>
      <Steps.Item>Receive product</Steps.Item>
    </Steps>
  );
}

import { Steps } from "@registry/components/react/navigation/steps";

export function StepsDefault() {
  return (
    <Steps activeStep={1}>
      <Steps.Item>Register</Steps.Item>
      <Steps.Item>Choose plan</Steps.Item>
      <Steps.Item>Purchase</Steps.Item>
      <Steps.Item>Receive product</Steps.Item>
    </Steps>
  );
}

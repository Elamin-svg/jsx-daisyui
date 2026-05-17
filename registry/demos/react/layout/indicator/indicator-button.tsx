import { Indicator } from "@registry/components/react/layout/indicator";
import Button from "@registry/components/react/forms/button";

export function IndicatorButton() {
  return (
    <Indicator>
      <Indicator.Item vertical="top" horizontal="end">
        <span className="badge badge-secondary">12</span>
      </Indicator.Item>
      <Button>Inbox</Button>
    </Indicator>
  );
}

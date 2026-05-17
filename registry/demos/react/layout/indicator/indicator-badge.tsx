import { Indicator } from "@registry/components/react/layout/indicator";

export function IndicatorBadge() {
  return (
    <Indicator>
      <Indicator.Item vertical="top" horizontal="end">
        <div className="badge badge-primary">New</div>
      </Indicator.Item>
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        Content
      </div>
    </Indicator>
  );
}

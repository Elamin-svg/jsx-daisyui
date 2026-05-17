import { Indicator } from "@registry/components/react/layout/indicator";

export function IndicatorPlacements() {
  return (
    <Indicator className="max-w-fit">
      <Indicator.Item vertical="top" horizontal="start">
        <span className="badge">↖︎</span>
      </Indicator.Item>
      <Indicator.Item vertical="top" horizontal="center">
        <span className="badge">↑</span>
      </Indicator.Item>
      <Indicator.Item vertical="top" horizontal="end">
        <span className="badge">↗︎</span>
      </Indicator.Item>
      <Indicator.Item vertical="middle" horizontal="start">
        <span className="badge">←</span>
      </Indicator.Item>
      <Indicator.Item vertical="middle" horizontal="center">
        <span className="badge">●</span>
      </Indicator.Item>
      <Indicator.Item vertical="middle" horizontal="end">
        <span className="badge">→</span>
      </Indicator.Item>
      <Indicator.Item vertical="bottom" horizontal="start">
        <span className="badge">↙︎</span>
      </Indicator.Item>
      <Indicator.Item vertical="bottom" horizontal="center">
        <span className="badge">↓</span>
      </Indicator.Item>
      <Indicator.Item vertical="bottom" horizontal="end">
        <span className="badge">↘︎</span>
      </Indicator.Item>
      <div className="grid w-60 h-32 bg-base-300 place-items-center">Box</div>
    </Indicator>
  );
}

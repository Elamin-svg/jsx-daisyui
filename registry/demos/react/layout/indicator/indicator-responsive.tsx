import { Indicator } from "@registry/components/react/layout/indicator";

export function IndicatorResponsive() {
  return (
    <Indicator>
      <Indicator.Item vertical="top" horizontal="start" className="sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end">
        <span className="badge badge-secondary">Responsive</span>
      </Indicator.Item>
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        Content
      </div>
    </Indicator>
  );
}

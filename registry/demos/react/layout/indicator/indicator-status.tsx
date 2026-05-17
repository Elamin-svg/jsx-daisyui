import { Indicator } from "@registry/components/react/layout/indicator";

export function IndicatorStatus() {
  return (
    <Indicator>
      <Indicator.Item vertical="top" horizontal="end">
        <span className="status status-online size-3"></span>
      </Indicator.Item>
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        <img
          className="size-10 rounded-full"
          src="https://img.daisyui.com/images/profile/demo/2@94w.webp"
          alt="user"
        />
      </div>
    </Indicator>
  );
}

import { Stat } from "@registry/components/react/data-display/stat";

export function StatWithFigure() {
  return (
    <Stat>
      <Stat.Item>
        <Stat.Figure className="text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Stat.Figure>
        <Stat.Title>Downloads</Stat.Title>
        <Stat.Value className="text-secondary">31K</Stat.Value>
        <Stat.Desc>Jan 1st - Feb 1st</Stat.Desc>
      </Stat.Item>
      <Stat.Item>
        <Stat.Figure className="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </Stat.Figure>
        <Stat.Title>New Users</Stat.Title>
        <Stat.Value className="text-primary">4,200</Stat.Value>
        <Stat.Desc>↗︎ 400 (22%)</Stat.Desc>
      </Stat.Item>
    </Stat>
  );
}

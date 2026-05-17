import { Stat } from "@registry/components/react/data-display/stat";

export function StatVertical() {
  return (
    <Stat direction="vertical">
      <Stat.Item>
        <Stat.Title>Downloads</Stat.Title>
        <Stat.Value>31K</Stat.Value>
        <Stat.Desc>Jan 1st - Feb 1st</Stat.Desc>
      </Stat.Item>
      <Stat.Item>
        <Stat.Title>New Registers</Stat.Title>
        <Stat.Value>4,200</Stat.Value>
        <Stat.Desc>↗︎ 400 (22%)</Stat.Desc>
      </Stat.Item>
    </Stat>
  );
}

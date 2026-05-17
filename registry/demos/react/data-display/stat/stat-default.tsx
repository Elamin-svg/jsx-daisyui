import { Stat } from "@registry/components/react/data-display/stat";

export function StatDefault() {
  return (
    <Stat>
      <Stat.Item>
        <Stat.Title>Total Page Views</Stat.Title>
        <Stat.Value>89,400</Stat.Value>
        <Stat.Desc>21% more than last month</Stat.Desc>
      </Stat.Item>
      <Stat.Item>
        <Stat.Title>New Users</Stat.Title>
        <Stat.Value>4,200</Stat.Value>
        <Stat.Desc>↗︎ 400 (22%)</Stat.Desc>
      </Stat.Item>
      <Stat.Item>
        <Stat.Title>Revenue</Stat.Title>
        <Stat.Value>$12,600</Stat.Value>
        <Stat.Desc>↘︎ 90 (14%)</Stat.Desc>
      </Stat.Item>
    </Stat>
  );
}

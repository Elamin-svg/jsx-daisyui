import { Stat } from "@registry/components/react/data-display/stat";

export function StatCentered() {
  return (
    <Stat direction="vertical">
      <Stat.Item centered>
        <Stat.Title>Total Likes</Stat.Title>
        <Stat.Value>25.6K</Stat.Value>
        <Stat.Desc>↗︎ 2.3K (9%)</Stat.Desc>
      </Stat.Item>
      <Stat.Item centered>
        <Stat.Title>Page Views</Stat.Title>
        <Stat.Value>2.6M</Stat.Value>
        <Stat.Desc>↘︎ 90 (14%)</Stat.Desc>
      </Stat.Item>
    </Stat>
  );
}

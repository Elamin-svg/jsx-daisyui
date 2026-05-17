import { Timeline } from "@registry/components/react/data-display/timeline";

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);

export function TimelineDefault() {
  return (
    <Timeline>
      <Timeline.Item first>
        <Timeline.Middle className="text-primary"><CheckIcon /></Timeline.Middle>
        <Timeline.End box>First milestone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Middle className="text-primary"><CheckIcon /></Timeline.Middle>
        <Timeline.End box>Second milestone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Middle><CheckIcon /></Timeline.Middle>
        <Timeline.End box>Third milestone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item last>
        <Timeline.Middle><CheckIcon /></Timeline.Middle>
        <Timeline.End box>Final step</Timeline.End>
      </Timeline.Item>
    </Timeline>
  );
}

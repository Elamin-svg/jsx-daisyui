import { Timeline } from "@registry/components/react/data-display/timeline";

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);

export function TimelineVertical() {
  const steps = [
    { year: "1984", label: "First Macintosh" },
    { year: "1998", label: "iMac" },
    { year: "2001", label: "iPod" },
    { year: "2007", label: "iPhone" },
    { year: "2010", label: "iPad" },
  ];

  return (
    <Timeline direction="vertical" compact>
      {steps.map((step, i) => (
        <Timeline.Item key={step.year} first={i === 0} last={i === steps.length - 1}>
          <Timeline.Start>{step.year}</Timeline.Start>
          <Timeline.Middle className="text-primary"><CheckIcon /></Timeline.Middle>
          <Timeline.End box>{step.label}</Timeline.End>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { tv } from "tailwind-variants";

const calendarVariants = tv({
  base: "react-day-picker",
});

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, ...props }: CalendarProps) {
  return <DayPicker className={calendarVariants({ className })} {...props} />;
}
Calendar.displayName = "Calendar";

export default Calendar;

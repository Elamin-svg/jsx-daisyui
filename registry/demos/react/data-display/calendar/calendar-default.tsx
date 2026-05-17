"use client";
import  Calendar  from "@registry/components/react/data-display/calendar";
import { useState } from "react";


export function CalendarDefault() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return <Calendar mode="single" selected={date} onSelect={setDate} />;
}

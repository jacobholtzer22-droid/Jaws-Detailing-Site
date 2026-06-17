import type { DayHours } from "@/site.config";

/** "19:30" -> "7:30 PM". Returns "" for null. */
export function formatTime(value: string | null): string {
  if (!value) return "";
  const [hStr, mStr] = value.split(":");
  let h = Number(hStr);
  const m = mStr ?? "00";
  const period = h >= 12 ? "PM" : "AM";
  h = h % 12;
  if (h === 0) h = 12;
  return `${h}:${m} ${period}`;
}

/** "Closed" or "8:00 AM – 7:30 PM" for a day's hours. */
export function formatDayHours(day: DayHours): string {
  if (day.closed || !day.open || !day.close) return "Closed";
  return `${formatTime(day.open)} – ${formatTime(day.close)}`;
}

export const DAY_ORDER = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export function dayLabel(key: string): string {
  return key.charAt(0).toUpperCase() + key.slice(1);
}

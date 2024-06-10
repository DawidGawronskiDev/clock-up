import { format } from "date-fns";

export default function isEvening(date: string) {
  return Number(format(date, "H")) < 19;
}

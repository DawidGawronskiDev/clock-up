import { useSelector } from "react-redux";
import { format } from "date-fns";
import { RootState } from "../store/store";
import Greeting from "./Greeting";

export default function Clock() {
  const { date, timezone } = useSelector((state: RootState) => state.time);

  const formattedTimezone = timezone.split("/").join(" / ");

  return (
    <div className="text-c-300 flex flex-col items-start justify-start">
      <Greeting />
      <h1>{format(date, "kk:mm")}</h1>
      <h3>{formattedTimezone}</h3>
    </div>
  );
}

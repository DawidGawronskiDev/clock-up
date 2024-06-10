import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import clsx from "clsx";
import { getDay, getDayOfYear, getWeek } from "date-fns";
import Wrapper from "./Wrapper";
import DetailsItem from "./DetailsItem";
import isEvening from "../utils/isEvening";

export default function Details() {
  const { isOpen } = useSelector((state: RootState) => state.details);
  const { date, timezone } = useSelector((state: RootState) => state.time);

  return (
    <div
      className={clsx("bg-bl relative", {
        hidden: !isOpen,
        "bg-c-300 text-c-100": isEvening(date),
        "bg-c-100/80 text-c-300": !isEvening(date),
      })}
    >
      <Wrapper>
        <div className="h-full py-14 flex *:flex-1 gap-24 items-center">
          <div className="flex flex-col gap-11">
            <DetailsItem label="Current timezone" value={timezone} />
            <DetailsItem label="Day of the year" value={getDayOfYear(date)} />
          </div>
          <div className="flex flex-col gap-11">
            <DetailsItem label="Day of the week" value={getDay(date)} />
            <DetailsItem label="Week numbers" value={getWeek(date)} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

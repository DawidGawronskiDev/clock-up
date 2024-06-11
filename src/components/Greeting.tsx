import IconSun from "../assets/icon-sun.svg";
import IconMoon from "../assets/icon-moon.svg";
import isEvening from "../utils/isEvening";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ReactNode } from "react";

export default function Greeting() {
  const { date } = useSelector((state: RootState) => state.time);

  let content: ReactNode;

  if (!isEvening(date)) {
    content = (
      <>
        <img src={IconMoon} alt="Moon" />
        <h4>
          Good evening
          <span className="hidden lg:inline-block">, It's currently</span>
        </h4>
      </>
    );
  } else {
    content = (
      <>
        <img src={IconSun} alt="Sun" />
        <h4>
          Good morning
          <span className="hidden lg:inline-block">, It's currently</span>
        </h4>
      </>
    );
  }

  return <div className="flex items-start justify-start gap-4">{content}</div>;
}

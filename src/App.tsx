import Quote from "./components/Quote";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateTime } from "./store/timeSlice";
import Clock from "./components/Clock";
import isEvening from "./utils/isEvening";
import { RootState } from "./store/store";
import Button from "./components/Button";
import Wrapper from "./components/Wrapper";
import Details from "./components/Details";
import { open } from "./store/details";

function App() {
  const dispatch = useDispatch();
  const { date } = useSelector((state: RootState) => state.time);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <main
      className={clsx("bg-black/70 bg-blend-darken", {
        "bg-daytime-mobile md:bg-daytime-tablet xl:bg-daytime-desktop":
          isEvening(date) === true,
        "bg-nighttime-mobile md:bg-nighttime-tablet xl:bg-nighttime-desktop":
          isEvening(date) === false,
      })}
    >
      <Wrapper>
        <div className="h-full flex flex-col justify-between py-14">
          <Quote />
          <div className="flex items-end justify-between">
            <Clock />
            <Button onClick={() => dispatch(open())}>More</Button>
          </div>
        </div>
      </Wrapper>
      <Details />
    </main>
  );
}

export default App;

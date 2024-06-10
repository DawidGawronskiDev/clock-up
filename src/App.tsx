import { format } from "date-fns";
import Quote from "./components/Quote";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateTime } from "./store/timeSlice";

function App() {
  const currentDate = new Date();
  const currentHour = Number(format(currentDate, "H"));

  const dispatch = useDispatch();

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
          currentHour < 19,
        "bg-nighttime-mobile md:bg-nighttime-tablet xl:bg-nighttime-desktop":
          currentHour >= 19,
      })}
    >
      <Quote />
    </main>
  );
}

export default App;

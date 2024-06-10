import { format } from "date-fns";
import Quote from "./components/Quote";
import clsx from "clsx";

function App() {
  const currentDate = new Date();
  const currentHour = Number(format(currentDate, "H"));

  return (
    <main
      className={clsx("bg-black/50 bg-blend-darken", {
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

import "./Days.css";
import { DAYS } from "../../utils/constants";
const Days = () => {
  // const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  return (
    <main className="days--container">
      {DAYS.map((day) => (
        <p className="day--item">{day}</p>
      ))}
    </main>
  );
};

export default Days;

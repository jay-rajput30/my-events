import "./Date.css";
import { DATES } from "../../utils/constants";

const Date = () => {
  return (
    <section className="date--container">
      {DATES.map((date, idx) => {
        return (
          <div key={idx} className="date--item--container">
            <p className="date--item">{date}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Date;

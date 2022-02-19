import { useState } from "react";
import { DATES } from "../../utils/constants";
import "./Event.css";

const Event = ({ setShowForm }) => {
  const [data, setData] = useState({
    title: "",
    location: "",
    date: null,
    time: null,
    description: "",
    color: null,
  });

  const timeChangeHandler = (e) => {
    setData((prev) => ({ ...prev, time: e.target.value }));
  };
  const cancelClickHandler = () => {
    setShowForm((prev) => false);
  };

  const createClickHandler = () => {
    console.log({ data });
  };

  const daySelect = (
    <select
      className="select--date"
      onChange={(e) =>
        setData((prev) => ({ ...prev, date: parseInt(e.target.value) }))
      }
    >
      {DATES.map((item) => {
        return <option value={`${item}`}>{item}</option>;
      })}
    </select>
  );
  return (
    // <div className="event--form--container">

    <form className="event--form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="form--input--title"
        placeholder="add title"
        onChange={(e) =>
          setData((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <input
        type="text"
        className="form--input--location"
        placeholder="add location"
        onChange={(e) =>
          setData((prev) => ({ ...prev, location: e.target.value }))
        }
      />
      {daySelect}
      <input
        type="time"
        min="00:00"
        max="24:00"
        id="event--time"
        onChange={timeChangeHandler}
      />
      <textarea
        rows="4"
        className="form--input--description"
        placeholder="add description"
        onChange={(e) =>
          setData((prev) => ({ ...prev, description: e.target.value }))
        }
      />
      <div className="color--group--container">
        <div
          className="color--item color--item--rose"
          onClick={(e) => setData((prev) => ({ ...prev, color: "#fda4af" }))}
        >
          {/* <input
            type="radio"
            id="rose--check"
            value="rose"
            name="color--group"
            onChange={(e) => setData((prev) => ({ ...prev, color: "#fda4af" }))}
            checked
          />
          <label htmlFor="rose--check"> </label> */}
        </div>
        <div
          className="color--item color--item--blue"
          onClick={(e) => setData((prev) => ({ ...prev, color: "#60a5fa" }))}
        >
          {/* <input
            type="radio"
            id="blue--check"
            value="blue"
            name="color--group"
            onClick={(e) => setData((prev) => ({ ...prev, color: "#60a5fa" }))}
          />
          <label htmlFor="blue--check"> </label> */}
        </div>
        <div
          className="color--item color--item--yellow"
          onClick={(e) => setData((prev) => ({ ...prev, color: "#fcd34d" }))}
        >
          {/* <input
            type="radio"
            id="yellow--check"
            value="yellow"
            name="color--group"
          />
          <label htmlFor="yellow--check"> </label> */}
        </div>
        <div
          className="color--item color--item--teal"
          onClick={(e) => setData((prev) => ({ ...prev, color: "#5eead4" }))}
        >
          {/* <input
            type="radio"
            id="teal--check"
            value="teal"
            name="color--group"
            onChange={(e) => setData((prev) => ({ ...prev, color: "#5eead4" }))}
          />
          <label htmlFor="teal--check"> </label> */}
        </div>
      </div>
      <div className="btn--group">
        <button className="btn--create" onClick={createClickHandler}>
          create
        </button>
        <button className="btn--cancel" onClick={cancelClickHandler}>
          cancel
        </button>
      </div>
    </form>
  );
};

export default Event;

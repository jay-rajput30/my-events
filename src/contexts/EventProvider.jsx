import { createContext, useContext, useReducer } from "react";

const eventContext = createContext();

const reducerFunc = (state, { type, payload }) => {
  switch (type) {
    case "ADD": {
      const newEvent = { ...state, payload };
      localStorage.setItem("events", newEvent);
      return newEvent;
    }

    case "REMOVE": {
      const newEvent = state.filter(
        (item) => item.title !== payload.title && item.date !== payload.date
      );
      localStorage.setItem("events", newEvent);
      return newEvent;
    }

    default:
      return state;
  }
};
const EventProvider = ({ children }) => {
  const { state, eventDispatch } = useReducer(reducerFunc, {});
  return (
    <eventContext.Provider value={{ allEvents: state, eventDispatch }}>
      {children}
    </eventContext.Provider>
  );
};

export const useEvent = () => {
  return useContext(eventContext);
};

export default EventProvider;

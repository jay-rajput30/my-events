import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Date from "./components/Date/Date";
import Days from "./components/Days/Days";
import Event from "./components/Event/Event";
import Header from "./components/Header/Header";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="calendar--container">
      <Header />
      <Days />
      <Date />
      <Button setShowForm={setShowForm} />
      {showForm && <Event setShowForm={setShowForm} />}
    </div>
  );
}

export default App;

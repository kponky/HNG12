import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import TicketSelction from "./pages/TicketSelction";
import AttendeeDetails from "./pages/AttendeeDetails";
import TicketBooked from "./pages/TicketBooked";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<TicketSelction />} />
        <Route path="/" element={<AttendeeDetails />} />
        <Route path="/" element={<TicketBooked />} />
      </Routes>
    </div>
  );
}

export default App;

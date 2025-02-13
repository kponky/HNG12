import { useState } from "react";
import "./App.css";
import "./styles/AttendeeDetails.css"
import "./styles/TicketSelection.css";
import "./styles/TicketBooked.css";
import "./styles/Navbar.css";
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
        <Route path="/attendee-details" element={<AttendeeDetails />} />
        <Route path="/attende-booked" element={<TicketBooked />} />
      </Routes>
    </div>
  );
}

export default App;

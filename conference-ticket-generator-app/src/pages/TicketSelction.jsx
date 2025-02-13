import React from "react";
import "../styles/TicketSelection.css";
import { useNavigate } from "react-router-dom";

const TicketSelction = () => {

  const navigate = useNavigate();
  return (
    <div className="ticket-selction-container">
      <div className="ticket-heading">
        <h3>Ticket Selection</h3>

        <span>Step 1/3</span>
      </div>

      <div className="progress-bar-heading"></div>

      <div className="frame-2">
        <div className="techember-heading">
          <h1>Techember Fest ”25</h1>
          <p>
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>

          <div className="event-details">
            <span>📍 [Event Location]</span>

            <span>| |</span>

            <span>March 15, 2025 | 7:00 PM</span>
          </div>
        </div>

        <div className="progress-bar"></div>

        <div className="ticket-type">
          <p className="text1">Select Ticket type</p>
          <div className="ticket-boxes">
            <div className="ticket-box">
              <h1>Free</h1>
              <span>REGULAR ACCESS</span>
              <p>20/52</p>
            </div>
            <div className="ticket-box">
              <h1>$150</h1>
              <span>VIP ACCESS</span>
              <p>20/52</p>
            </div>
            <div className="ticket-box">
              <h1>$150</h1>
              <span>VVIP ACCESS</span>
              <p>20/52</p>
            </div>
          </div>
        </div>

        <div className="ticket-select">
          <h1> Number of Tickets</h1>

          <div className="input-select-field">
            <select name="ticket-dropdown" id="ticket-dropdown">
              <option value="1">1 </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>

        <div className="btns">
          <button>cancel</button>
          <button onClick={() => navigate ("/attendee-details")}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default TicketSelction;

// <label htmlFor="ticket-dropdown">Number of tickets</label>

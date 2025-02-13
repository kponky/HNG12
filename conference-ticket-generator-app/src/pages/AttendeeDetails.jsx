import React from "react";
import "../styles/AttendeeDetails.css";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";

const AttendeeDetails = () => {
  return (
    <div className="ticket-details-container">
      <div className="ticket-heading">
        <h3>Attendee Details</h3>
        <span>Step 2/3</span>
      </div>
      <div className="progress-bar-heading"></div>

      <div className="attendee-frame">
        <div className="file-wrapper">
          <h3>Upload Profile Photo</h3>

          <div className="file-wrap">
            <div className="file-upload-box">
              <input
                type="file"
                id="file-input"
                accept="image/*"
                style={{ display: "none" }}
              />

              <label htmlFor="file-input" className="file-upload-label">
                <AiOutlineCloudDownload className="download-icon" size={30} />
                <p>Drag and drop or click to upload</p>
              </label>

              <div className="preview-container">
                <img src="" alt="Preview" className="preview-image" />
              </div>
            </div>
          </div>
        </div>

        <div className="progress-bar"></div>

        <form action="">
          <div className="input-group">
            <label htmlFor="name">Enter your Name:</label>
            <div className="input-field">
              <input type="text" required />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="email">Enter your email *</label>
            <div className="input-field">
              <BsEnvelope size={20} />
              <input type="text" placeholder="hello@avioflagos.io" required />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="">Special request?</label>
            <textarea name="" id="" placeholder="Textarea"></textarea>
          </div>
        </form>

        <div className="btns">
          <button>cancel</button>
          <button onClick={() => navigate("/attendee-details")}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default AttendeeDetails;

import React, { useState } from "react";

const SetReminder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to show the modal
  const submitForm = () => {
    setIsModalOpen(true); // Show the modal
    setTimeout(() => {
      setIsModalOpen(false); // Hide the modal after 2 seconds
    }, 1000);
  };
  return (
    <>
      <div className="main_content_iner">
        <div className="white_card card_height_100 mb_30 rounded-4 p-4">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="fw-medium fs-3 mb-0">Reminder</h1>
            <div className="d-flex gap-2">
              <button
                className="btn_1 text-decoration-none"
                onClick={submitForm} // Trigger modal on click
              >
                Set Reminder
              </button>
              {/* <!-- <button  className="submit-btn btn btn-primary">Submit for Review</button> --> */}
            </div>
          </div>
          <hr style={{ color: "#cecaca", marginBottom: "0" }} />

          <div className="white_card card_height_100">
            <div className="white_card_body" style={{ padding: "0" }}>
              <div className="mt-4">
                <div className="row ">
                  <div className="col-md-6">
                    <div className="gps">
                      <div className="d-flex align-items-center gap-4">
                        <span className="airport fs-3">
                          (LAX) Airport,{" "}
                          <span className="fs-5 fw-normal">
                            Los Angeles, CA
                          </span>
                        </span>
                        <br />
                      </div>
                      <div className="info-label1 fs-4 mt-2">
                        Begins At: 21/02/2024 | 21:30:00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="white_card_header1 pb-3">
                      <div className="box_header m-0">
                        <div className="main-title">
                          <p className="m-0 info-label2">Start Date</p>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <input
                        type="date"
                        className="form-control form-control-lg bg-gray border-none py-3"
                        name="inputDate"
                        id="inputDate"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="white_card_header1 pb-3">
                      <div className="box_header m-0">
                        <div className="main-title">
                          <p className="m-0 info-label2">Time</p>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <input
                        type="time"
                        className="form-control form-control-lg bg-gray border-none py-3"
                        name="inputTime"
                        id="inputTime"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="white_card_header1 pb-3">
                      <div className="box_header m-0">
                        <div className="main-title">
                          <p className="m-0 info-label2 mb-0">End Date</p>
                        </div>
                      </div>
                    </div>

                    <div className=" mb-0">
                      <input
                        type="date"
                        className="form-control form-control-lg bg-gray border-none py-3"
                        name="inputDate"
                        id="inputDate"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="white_card_header1 pb-3">
                      <div className="box_header m-0">
                        <div className="main-title">
                          <p className="m-0 info-label2">Time</p>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <input
                        type="time"
                        className="form-control form-control-lg bg-gray border-none py-3"
                        name="inputTime"
                        id="inputTime"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="white_card_header1 pb-3">
                      <div className="box_header m-0">
                        <div className="main-title">
                          <p className="m-0 info-label2">Repeat</p>
                        </div>
                      </div>
                    </div>

                    <div className=" mb-0">
                      <input
                        type="number"
                        className="form-control form-control-lg bg-gray border-none py-3"
                        name="inputNumber"
                        id="inputNumber"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="white_card_header1 pb-3">
                      <div className="box_header m-0">
                        <div className="main-title">
                          <p className="m-0 info-label2">Calender</p>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <input
                        type="number"
                        className="form-control form-control-lg bg-gray border-none py-3"
                        name="inputNumber"
                        id="inputNumber"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="white_card_header1 pb-3">
                      <div className="box_header m-0">
                        <div className="main-title">
                          <p className="m-0 info-label2">Alert</p>
                        </div>
                      </div>
                    </div>

                    <div className=" mb-0">
                      <input
                        type="number"
                        className="form-control form-control-lg bg-gray border-none py-3"
                        name="inputNumber"
                        id="inputNumber"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="modal-overlay"
          style={{
            display: "block",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dim the background
            zIndex: 1050, // Ensure it appears above other content
          }}
        >
          <div
            className="modal-content"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)", // Center the modal
              zIndex: 1051, // Ensure it appears above the overlay
            }}
          >
            <img
              className="d-block mx-auto"
              src="/assets/img/home/set-reminder.png"
              alt="Reminder set"
              style={{
                maxWidth: "100%", // Ensure the image doesn't overflow its container
                height: "auto", // Maintain aspect ratio
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SetReminder;

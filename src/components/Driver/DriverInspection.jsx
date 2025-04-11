import React from "react";
import { Link } from "react-router-dom";

const DriverInspection = () => {
  return (
    <>
      <div className="main_content_iner">
        <div className="white_card_body bg-white px-4 py-3 mb-3 rounded-4">
          <div className="d-flex align-items-center mb-2 fs-3">
            <span to="/" className="text-dark fw-medium text-decoration-none ">
              Driver
            </span>
            <img
              src="/images/bread-arrow.svg"
              alt="arrow"
              style={{ margin: "0 10px" }}
            />
            <span className="bread-text fw-medium">Inspect</span>
          </div>
        </div>{" "}
        <div className="white_card card_height_100 mb_30 rounded-4">
          <div className="white_card_body">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="fw-medium fs-3">Trip Inspection</h1>
            </div>
            <hr style={{ color: "#cecaca" }} />

            <div className="job-ticket4">
              <div className="mt-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h1 className="gps fs-4 mb-0">Inspection</h1>
                  <div className="d-flex gap-2">
                    <p className="fs-6">
                      Check any item that needs attention. Provide details under
                      comments sections.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="white_card_header1">
                      <div className="box_header m-0">
                        <div className="main-title">
                          <p className="m-0 info-label2">Truck No.</p>
                        </div>
                      </div>
                    </div>

                    <div className=" mb-0">
                      <input
                        type="number"
                        className="form-control form-control-lg p-3"
                        name="inputDate"
                        id="inputDate"
                        placeholder="No."
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="white_card_header1">
                      <div className="box_header m-0">
                        <div className="main-title">
                          <p className="m-0 info-label2">Odometer Reading</p>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <input
                        type="number"
                        className="form-control form-control-lg p-3"
                        name="inputTime"
                        id="inputTime"
                        placeholder="Type"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="white_card_header1">
                      <div className="box_header m-0">
                        <div className="main-title">
                          <p className="m-0 info-label2">Trailer</p>
                        </div>
                      </div>
                    </div>

                    <div className=" mb-0">
                      <input
                        type="number"
                        className="form-control form-control-lg p-3"
                        name="inputTime"
                        id="inputTime"
                        placeholder="No."
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="white_card_header1">
                      <div className="box_header m-0">
                        <div className="main-title">
                          <p className="m-0 info-label2">Inspection Date</p>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <input
                        type="date"
                        className="form-control form-control-lg p-3"
                        name="inputDate"
                        id="inputDate"
                        placeholder="Choose date"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="white_card_header1">
                      <div className="box_header m-0">
                        <div className="main-title">
                          <p className="m-0 info-label2">Time</p>
                        </div>
                      </div>
                    </div>

                    <div className=" mb-0">
                      <input
                        type="time"
                        className="form-control form-control-lg p-3"
                        name="inputNumber"
                        id="inputNumber"
                        placeholder="Select time"
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-30">
                  <div className="row align-items-end">
                    <div className="col-md-6">
                      <div className="tire-section">
                        <div className="section-title">Tires</div>
                        <input
                          type="text"
                          className="segmented-input"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="tire-section">
                        <div className="section-title">Trailers</div>
                        <input
                          type="text"
                          className="segmented-input"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-30">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="form-inline-group">
                        <label for="signature">Driver's Signature</label>
                        <input type="text" id="signature" />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-inline-group">
                        <label for="date">Date</label>
                        <input type="date" id="date" />
                      </div>
                    </div>

                    <div className="col-md-3 offset-md-1">
                      <button className="submit-btn1">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverInspection;

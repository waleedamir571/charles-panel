import React from "react";
import { Link } from "react-router-dom";

const AssetMaintainance = () => {
  return (
    <>
      <div className="main_content_iner">
        <div className="white_card_body bg-white px-4 py-3 mb-3 rounded-4">
          <div className="d-flex align-items-center mb-2 fs-3">
            <Link to="/" className="text-dark fw-medium text-decoration-none ">
              Dashboard
            </Link>
            <img
              src="/images/bread-arrow.svg"
              alt="arrow"
              style={{ margin: "0 10px" }}
            />
            <Link
              to="/assets"
              className="text-dark fw-medium text-decoration-none "
            >
              <span className="text-dark fw-medium">Assets</span>
            </Link>
            <img
              src="/images/bread-arrow.svg"
              alt="arrow"
              style={{ margin: "0 10px" }}
            />
            <Link
              to="/assets/detail"
              className="text-dark fw-medium text-decoration-none "
            >
              <span className=" fw-medium">Truck no. 234332</span>
            </Link>
            <img
              src="/images/bread-arrow.svg"
              alt="arrow"
              style={{ margin: "0 10px" }}
            />
            <span className="bread-text fw-medium">Maintenance</span>
          </div>
        </div>{" "}
        <div className="white_card card_height_100 mb_30 rounded-4">
          <div className="white_card_body">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="fw-bold fs-4 mb-0">
                Details <span className="year">(2007 Peterbilt 389)</span>
              </h1>

              <div className="d-flex gap-2">
                <p className="asset-unit me-3">
                  Date Entered <span className="year">: 01-21-2025</span>
                </p>

                <button
                  className="btn_1 text-decoration-none cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalLong"
                >
                  Update Status
                </button>
              </div>
            </div>

            <div className="ptb-15">
              <div className="line-container"></div>
            </div>

            <div className="">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className=" job-ticket4">
                    <div className="card-body mt-3">
                      <div className="row truck-info">
                        <div
                          className="col-md-2"
                          style={{ borderRight: "2px solid #000 !important" }}
                        >
                          <img
                            className="w-100"
                            src="/assets/img/home/truck3.png"
                            alt=""
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="info-label2 d-flex flex-column justify-content-start align-items-start">
                                Truck No :
                                <span className="year fw-normal">2345332</span>
                              </div>
                            </div>
                            <div className="col-md-4 ">
                              <div className="info-label2 d-flex flex-column justify-content-start align-items-start">
                                Make :
                                <span className="year fw-normal">
                                  Peterbilt
                                </span>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="info-label2 d-flex flex-column justify-content-start align-items-start">
                                Model :
                                <span className="year fw-normal">359</span>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="row">
                            <div className="col-md-4">
                              <div className="info-label2 d-flex flex-column justify-content-start align-items-start">
                                Year :
                                <span className="year fw-normal">2007</span>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="info-label2 d-flex flex-column justify-content-start align-items-start">
                                Odometer :
                                <span className="year fw-normal">
                                  230,332 Miles
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link
                          to="/assets/detail/maintainance/docs"
                          className="col-md-2 cursor-pointer"
                        >
                          <img src="/assets/img/home/view-doc.png" alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="">
                        <div className="gps">Items</div>
                        <div className="ptb-15">
                          <div className="line-container"></div>
                        </div>
                        <div className="">
                          <div className="row">
                            <div className="col-md-12">
                              <textarea
                                className="form-control resize-none bg-gray border-none p-3"
                                maxlength="225"
                                rows="3"
                                name="maxlength-textarea"
                                id="maxlength-textarea"
                                placeholder="Add comment"
                              ></textarea>
                            </div>
                          </div>
                          <br />
                        </div>
                      </div>
                      <br />
                      <div className="">
                        <div className="gps">Service Description</div>
                        <div className="ptb-15">
                          <div className="line-container"></div>
                        </div>
                        <div className="">
                          <div className="row">
                            <div className="col-md-12">
                              <textarea
                                className="form-control resize-none bg-gray border-none p-3"
                                maxlength="225"
                                rows="5"
                                name="maxlength-textarea"
                                id="maxlength-textarea"
                                placeholder="Add comment"
                              ></textarea>
                            </div>
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="">
                        <div className="gps">Uploads</div>
                        <div className="ptb-15">
                          <div className="line-container"></div>
                        </div>

                        <div className="row">
                          <div className="col-md-4 text-center">
                            <img src="/assets/img/home/pdf.png" alt="" />
                            <br />
                            <br />
                            <p className="airport ">My license</p>
                          </div>
                          <div className="col-md-4 text-center">
                            <img src="/assets/img/home/pdf.png" alt="" />
                            <br />
                            <br />
                            <p className="airport ">Copy1273.jpeg</p>
                          </div>
                          <div className="col-md-4 text-center">
                            <img src="/assets/img/home/pdf.png" alt="" />
                            <br />
                            <br />
                            <p className="airport ">Sub Hauler Agreement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex="-1"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered p-3">
          <div className="modal-content overflow">
            <div className="modal-header">
              <h5
                className="modal-title summary fs-3 text-center mx-auto"
                id="exampleModalLongTitle"
              >
                Maintenance Summary
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="ptb-15">
                <p className="info-label2">Items</p>
              </div>
              <textarea
                className="form-control form-control-lg bg-gray  resize-none fs-6"
                maxLength="225"
                rows="2"
                placeholder="It is a long established fact"
              ></textarea>
              <br />

              <div className="ptb-15">
                <p className="info-label2">Service Description</p>
              </div>
              <textarea
                className="form-control form-control-lg bg-gray resize-none fs-6"
                maxLength="225"
                rows="3"
                placeholder="It is a long established fact that a reader will be distracted..."
              ></textarea>

              <div className="ptb-15">
                <div className="row">
                  <div className="col-md-3 text-center">
                    <img
                      className="w-50"
                      src="/assets/img/home/pdf.png"
                      alt=""
                    />
                    <p className="fs-14 mt-2">1244.jpg</p>
                  </div>
                  <div className="col-md-3 text-center">
                    <img
                      className="w-50"
                      src="/assets/img/home/pdf.png"
                      alt=""
                    />
                    <p className="fs-14 mt-2">1244.jpg</p>
                  </div>
                </div>
              </div>

              <div className="ptb-15">
                <p className="info-label2">Outstanding Reports</p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="job-ticket5 p-2 rounded border mt-2">
                      <div className="d-flex align-items-center gap-2">
                        <input type="checkbox" />
                        <span className="oil">Oil Leak</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="job-ticket6 p-2 rounded border mt-2">
                      <div className="d-flex align-items-center gap-2">
                        <input type="checkbox" />
                        <span className="other">Other Equipment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer w-100 mx-auto">
              <div className="row w-100">
                <div className="col-6 pe-2">
                  <button
                    type="button"
                    className="btn btn-lg bg-transparent w-100 border"
                    data-bs-dismiss="modal"
                  >
                    Back
                  </button>
                </div>
                <div className="col-6 ps-2">
                  <button
                    type="button"
                    className="btn btn-lg btn-success w-100"
                  >
                    Resolved
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetMaintainance;

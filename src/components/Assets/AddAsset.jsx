import React from "react";
import { Link } from "react-router-dom";

const AddAsset = () => {
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
            <span className="bread-text fw-medium">Add Assets</span>
          </div>
        </div>{" "}
        <div className="white_card card_height_100 mb_30">
          <div className="white_card_body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1 className="fw-bold fs-4 mb-0">+ Add Asset </h1>

              <div className="d-flex gap-2">
                <p className="asset-unit">
                  Date Entered <span className="year">: 01-21-2025</span>
                </p>

                <button className="btn_1">Add Asset</button>
              </div>
            </div>

            <div className="ptb-15">
              <div className="line-container"></div>
            </div>

            <div className="">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className=" job-ticket4">
                    <div className="card-body">
                      <div className="row truck-info">
                        <div className="col-md-2">
                          <div className="file-input-container">
                            <label style={{ textAlign: "-webkit-center" }}>
                              <div className="plus-icon">+</div>
                              <span>Select Type</span>
                              <input type="file" />
                            </label>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="info-label2">
                                Truck No. :
                                <input
                                  type="text"
                                  className="form-control form-control2"
                                  name="inputText"
                                  id="inputText"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="info-label2">
                                Make :
                                <input
                                  type="text"
                                  className="form-control form-control2"
                                  name="inputText"
                                  id="inputText"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="info-label2">
                                Model :
                                <input
                                  type="text"
                                  className="form-control form-control2"
                                  name="inputText"
                                  id="inputText"
                                />
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="row">
                            <div className="col-md-4">
                              <div className="info-label2">
                                Year :
                                <input
                                  type="text"
                                  className="form-control form-control2"
                                  name="inputText"
                                  id="inputText"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="info-label2">
                                Odometer :
                                <input
                                  type="text"
                                  className="form-control form-control2"
                                  name="inputText"
                                  id="inputText"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <img src="/assets/img/home/upload-doc.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <h1 className="fw-bold fs-4 mb-0">+ Trailer </h1>
                <br />
                <br />
                <div className="col-md-12 mb-4">
                  <div className=" job-ticket4">
                    <div className="card-body">
                      <div className="row truck-info">
                        <div className="col-md-2">
                          <img src="/assets/img/home/trailer.png" alt="" />
                        </div>
                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="info-label2">
                                Truck No. :
                                <input
                                  type="text"
                                  className="form-control form-control2 "
                                  name="inputText"
                                  id="inputText"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="info-label2">
                                Make :
                                <input
                                  type="text"
                                  className="form-control form-control2 "
                                  name="inputText"
                                  id="inputText"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="info-label2">
                                Model :
                                <input
                                  type="text"
                                  className="form-control form-control2 "
                                  name="inputText"
                                  id="inputText"
                                />
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="row">
                            <div className="col-md-4">
                              <div className="info-label2">
                                Year :
                                <input
                                  type="text"
                                  className="form-control form-control2 "
                                  name="inputText"
                                  id="inputText"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="info-label2">
                                Odometer :
                                <input
                                  type="text"
                                  className="form-control form-control2 "
                                  name="inputText"
                                  id="inputText"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <img src="/assets/img/home/upload-doc.png" alt="" />
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
    </>
  );
};

export default AddAsset;

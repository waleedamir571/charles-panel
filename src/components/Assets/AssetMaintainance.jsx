import React from "react";

const AssetMaintainance = () => {
  return (
    <>
      <div className="main_content_iner">
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

                <a
                  className="btn_1 text-decoration-none"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalLong"
                >
                  Update Status
                </a>
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
                        <div className="col-md-2" style={{borderRight: '2px solid #000 !important'}}>
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
                        <div className="col-md-2">
                          <img src="/assets/img/home/view-doc.png" alt="" />
                        </div>
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
    </>
  );
};

export default AssetMaintainance;

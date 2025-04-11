import React from "react";

const Main = () => {
  return (
    <div className="container-fluid p-4">
      {/* Welcome & Weather */}
      <div className="row g-4 align-items-stretch">
        {/* Welcome Card */}
        <div className="col-lg-8">
          <div className="dashboard-card text-white p-4 rounded-4 h-100">
            <h3 className="john">Welcome John Doe,</h3>
            <p className="text pb-30">
              Here’s what’s happening with your logistics today...
            </p>
            <hr style={{ borderColor: "rgba(255,255,255,0.3)" }} />

            <div className="row text-center pt-3">
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <img src="/assets/img/home/ico1.png" alt="" className="me-3" />
                <div>
                  <h2 className="fs-60 mb-0">541+</h2>
                  <p className="mb-0 text-white">Distribution Center</p>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-center mt-3 mt-md-0">
                <img src="/assets/img/home/ico1.png" alt="" className="me-3" />
                <div>
                  <h2 className="fs-60 mb-0">35+</h2>
                  <p className="mb-0 text-white">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Weather Card */}
        <div className="col-lg-4">
          <div className="h-100">
            <img
              src="/assets/img/home/weather.png"
              alt="Weather"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* GPS & Job Progress */}
      <div className="row g-4 mt-3">
        {/* GPS Section */}
        <div className="col-lg-7">
          <div className="white_card mb_30 card_height_100 rounded-4">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0 gps">
                    Gps <span className="track">(Track your fleet)</span>{" "}
                  </h3>
                </div>

                <div className="header_more_tool">
                  <img src="/assets/img/home/map.png" alt="" />
                  {/*  <!-- <div className="dropdown">
                                        <span className="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                        <i className="ti-more-alt"></i>
                                        
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                          <a className="dropdown-item" href="#"> <i className="ti-eye"></i> Action</a>
                                          <a className="dropdown-item" href="#"> <i className="ti-trash"></i> Delete</a>
                                          <a className="dropdown-item" href="#"> <i className="fas fa-edit"></i> Edit</a>
                                          <a className="dropdown-item" href="#"> <i className="ti-printer"></i> Print</a>
                                          <a className="dropdown-item" href="#"> <i className="fa fa-download"></i> Download</a>
                                        </div>
                                      </div> --> */}
                </div>
              </div>
              <hr style={{ color: "#cecaca", marginBottom: "0" }} />
            </div>
            <div className="white_card_body">
              <img className="w-100" src="/assets/img/home/gps.png" alt="" />
            </div>
          </div>
        </div>

        {/* Job Progress Section */}
        <div className="col-lg-5">
          <div className="bg-white p-4 rounded-4 shadow-sm h-100">
            <h5 className="mb-3 fs-3">Jobs Progress</h5>
            <div className="row text-center g-3">
              <div className="col-6">
                <div className="d-flex align-items-center justify-content-start">
                  <div className="progress-circle blue">01</div>
                  <p className="ms-2 mb-0">New Job</p>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center justify-content-start">
                  <div className="progress-circle1 yellow">01</div>
                  <p className="ms-2 mb-0">Jobs Completed</p>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center justify-content-start">
                  <div className="progress-circle3 green">01</div>
                  <p className="ms-2 mb-0">Pending Jobs</p>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center justify-content-start">
                  <div className="progress-circle4 red">01</div>
                  <p className="ms-2 mb-0">Incompleted Jobs</p>
                </div>
              </div>
            </div>
            <div className="text-center pt-30">
              <button type="button" className="mb-3 btn-info1">
                <img src="/assets/img/home/driver.png" alt="" />
                &nbsp;&nbsp;&nbsp; My Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

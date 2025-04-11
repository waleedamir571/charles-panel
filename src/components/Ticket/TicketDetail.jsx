import React from "react";

const TicketDetail = () => {
  return (
    <>
      <div className="main_content_iner">
        <div className="container-fluid p-0 white_card card_height_100 mb_30">
          <div className="mb-4">
            <div className="white_card_header">
              <div className="row align-items-center">
                <div className="col-md-6 col-12 mb-2 mb-md-0">
                  <h1 className="fw-bold fs-4 mb-0">Job Tickets</h1>
                </div>

                <div className="col-md-6 col-12 text-md-end">
                  <div className="d-flex flex-wrap justify-content-md-end align-items-center gap-2">
                    <div className="search-container position-relative">
                      <input
                        type="text"
                        className="form-control form-control1 search-input pe-5"
                        placeholder="Search..."
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search search-icon position-absolute top-50 end-0 translate-middle-y me-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                      </svg>
                    </div>

                    <div className="grid-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 3H3V7H7V3Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M15 3H11V7H15V3Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7 11H3V15H7V11Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M15 11H11V15H15V11Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-6">
                <div className="card p-4 h-100 shadow-sm">

                  <div className="row ">
                    <div className="col-md-4">
                      <div className="bg-gray p-4 text-center rounded-2">
                        <div className="stat-label payslip-text">
                          Total Hours
                        </div>
                        <div className="stat-value job-text pt-3">122h</div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="bg-gray p-4 text-center rounded-2">
                        <div className="stat-label payslip-text">
                          Total Drivers
                        </div>
                        <div className="stat-value job-text pt-3">148</div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="bg-gray p-4 text-center rounded-2">
                        <div className="stat-label payslip-text">
                          Total Trucks
                        </div>
                        <div className="stat-value job-text pt-3">148</div>
                      </div>
                    </div>
                  </div>

                  <div className="row g-3 my-3">
                    <div className="col-md-4">
                      <div className="bg-gray p-4 text-center rounded-2">
                        <div className="stat-label payslip-text">
                          Rate Per Unit
                        </div>
                        <div className="stat-value job-text pt-3">$28/T</div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="bg-gray p-4 text-center rounded-2">
                        <div className="stat-label payslip-text">
                          Total Load Transported
                        </div>
                        <div className="stat-value job-text pt-3">
                          1,680<small className="text-muted">T</small>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="bg-gray p-4 text-center rounded-2">
                        <div className="stat-label payslip-text">
                          Total Distance
                        </div>
                        <div className="stat-value job-text pt-3">
                          200<small className="text-muted ms-1">MILES</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
                    <h5 className=" mb-0 cost">Total Cost :</h5>
                    <h3 className="fw-bold mb-0">$47,040</h3>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card2 p-4 mb-4 shadow-sm job-ticket-card">
                  <div className="">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <div className="d-flex gap-3">
                          <div
                            className="rounded-circle overflow-hidden"
                            style={{ width: "60px", height: "60px" }}
                          >
                            <img
                              src="/assets/img/home/doe.png"
                              alt="Driver"
                              className="driver-avatar"
                            />
                          </div>
                          <div>
                            <h5 className="fw-bold mb-1 dash">Jhon Doe</h5>
                            <p className=" mb-0 payslip-text">
                              Status : <span className="active">Active</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 offset-md-2">
                        <div className="d-flex gap-4 align-items-center">
                          <div className="text-center">
                            <img src="/assets/img/home/time.png" alt="" />
                            <h6 className="fw-bold mb-0 pb-15">47H</h6>
                          </div>

                          <div className="text-center">
                            <img src="/assets/img/home/truck.png" alt="" />
                            <h6 className="fw-bold mb-0 pb-15">No.1234</h6>
                          </div>

                          <div className="text-center">
                            <img src="/assets/img/home/load.png" alt="" />
                            <h6 className="fw-bold mb-0 pb-15">1,700T</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-dark1 w-100 mt-3">
                    View Job Ticket
                  </button>
                </div>
                <div className="card2 p-4 mb-4 shadow-sm job-ticket-card">
                  <div className="">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <div className="d-flex gap-3">
                          <div
                            className="rounded-circle overflow-hidden"
                            style={{ width: "60px", height: "60px" }}
                          >
                            <img
                              src="/assets/img/home/doe.png"
                              alt="Driver"
                              className="driver-avatar"
                            />
                          </div>
                          <div>
                            <h5 className="fw-bold mb-1 dash">Jhon Doe</h5>
                            <p className=" mb-0 payslip-text">
                              Status : <span className="active">Active</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 offset-md-2">
                        <div className="d-flex gap-4 align-items-center">
                          <div className="text-center">
                            <img src="/assets/img/home/time.png" alt="" />
                            <h6 className="fw-bold mb-0 pb-15">47H</h6>
                          </div>

                          <div className="text-center">
                            <img src="/assets/img/home/truck.png" alt="" />
                            <h6 className="fw-bold mb-0 pb-15">No.1234</h6>
                          </div>

                          <div className="text-center">
                            <img src="/assets/img/home/load.png" alt="" />
                            <h6 className="fw-bold mb-0 pb-15">1,700T</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-dark1 w-100 mt-3">
                    View Job Ticket
                  </button>
                </div>
                <div className="card2 p-4 mb-4 shadow-sm job-ticket-card">
                  <div className="">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <div className="d-flex gap-3">
                          <div
                            className="rounded-circle overflow-hidden"
                            style={{ width: "60px", height: "60px" }}
                          >
                            <img
                              src="/assets/img/home/doe.png"
                              alt="Driver"
                              className="driver-avatar"
                            />
                          </div>
                          <div>
                            <h5 className="fw-bold mb-1 dash">Jhon Doe</h5>
                            <p className=" mb-0 payslip-text">
                              Status : <span className="active">Active</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 offset-md-2">
                        <div className="d-flex gap-4 align-items-center job-ticket-heading">
                          <div className="text-center">
                            <img src="/assets/img/home/time.png" alt="" />
                            <h6 className="fw-bold mb-0 pb-15">47H</h6>
                          </div>

                          <div className="text-center">
                            <img src="/assets/img/home/truck.png" alt="" />
                            <h6 className="fw-bold mb-0 pb-15">No.1234</h6>
                          </div>

                          <div className="text-center">
                            <img src="/assets/img/home/load.png" alt="" />
                            <h6 className="fw-bold mb-0 pb-15">1,700T</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="job-ticket-toggle text-center">
                    <button className="btn btn-dark1 w-100 mt-3 view-ticket-btn">
                      View Job Ticket
                    </button>

                    <div
                      className="job-ticket-details mt-3"
                      style={{
                        display: "none",
                        opacity: "0",
                        transition: "opacity 0.6s ease",
                      }}
                    >
                      <div className="d-flex gap-4 align-items-center justify-content-center">
                        <div className="text-center">
                          <img src="/assets/img/home/time.png" alt="" />
                          <h6 className="fw-bold mb-0 pb-15">47H</h6>
                        </div>
                        <div className="text-center">
                          <img src="/assets/img/home/truck.png" alt="" />
                          <h6 className="fw-bold mb-0 pb-15">No.1234</h6>
                        </div>
                        <div className="text-center">
                          <img src="/assets/img/home/load.png" alt="" />
                          <h6 className="fw-bold mb-0 pb-15">1,700T</h6>
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

export default TicketDetail;

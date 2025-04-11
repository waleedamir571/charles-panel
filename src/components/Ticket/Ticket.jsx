import React from "react";
import { Link } from "react-router-dom";

const Ticket = () => {
  
  return (
    <>
      <div className="main_content_iner">
        <div className="container-fluid p-0 white_card card_height_100 rounded-4">
          <div className="">
            <div className="white_card_header mb-0 pb-0">
              <div className="row align-items-center">
                <div className="col-md-6 col-12 mb-2 mb-md-0">
                  <h1 className="fw-medium fs-3 mb-0">Job Tickets</h1>
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

                    <div className="tabs-bg">
                      <ul
                        className="nav nav-tabs custom-tabs border-0"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link  px-3 py-1"
                            id="index-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#index"
                            type="button"
                            role="tab"
                            aria-controls="index"
                            aria-selected="true"
                          >
                            Index
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active px-3 py-1"
                            id="jobs-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#jobs"
                            type="button"
                            role="tab"
                            aria-controls="jobs"
                            aria-selected="false"
                          >
                            Jobs
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr style={{ color: "#cecaca" }} />
            </div>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade"
              id="index"
              role="tabpanel"
              aria-labelledby="index-tab"
            >
              <div className="white_card_body">
                <div className="mt-4">
                  <Link
                    to="ticket-index"
                    className="job-ticket text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="airport">(LAX) Airport,</span>
                      <span className="location">Los Angeles</span>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <span className="airport">2JB872HB</span>
                      <span className="airport">12-21-24</span>
                    </div>
                  </Link>

                  <Link
                    to="ticket-index"
                    className="job-ticket text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="airport">(LAX) Airport,</span>
                      <span className="location">Los Angeles</span>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <span className="airport">2JB872HB</span>
                      <span className="airport">12-21-24</span>
                    </div>
                  </Link>

                  <Link
                    to="ticket-index"
                    className="job-ticket text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="airport">(LAX) Airport,</span>
                      <span className="location">Los Angeles</span>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <span className="airport">2JB872HB</span>
                      <span className="airport">12-21-24</span>
                    </div>
                  </Link>

                  <Link
                    to="ticket-index"
                    className="job-ticket text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="airport">(LAX) Airport,</span>
                      <span className="location">Los Angeles</span>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <span className="airport">2JB872HB</span>
                      <span className="airport">12-21-24</span>
                    </div>
                  </Link>

                  <Link
                    to="ticket-index"
                    className="job-ticket text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="airport">(LAX) Airport,</span>
                      <span className="location">Los Angeles</span>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <span className="airport">2JB872HB</span>
                      <span className="airport">12-21-24</span>
                    </div>
                  </Link>

                  <Link
                    to="ticket-index"
                    className="job-ticket text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="airport">(LAX) Airport,</span>
                      <span className="location">Los Angeles</span>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <span className="airport">2JB872HB</span>
                      <span className="airport">12-21-24</span>
                    </div>
                  </Link>

                  <Link
                    to="ticket-index"
                    className="job-ticket text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="airport">(LAX) Airport,</span>
                      <span className="location">Los Angeles</span>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <span className="airport">2JB872HB</span>
                      <span className="airport">12-21-24</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade show active"
              id="jobs"
              role="tabpanel"
              aria-labelledby="jobs-tab"
            >
              <div className="white_card_body">
                <div className="row g-4">
                  <div className="col-md-6">
                    <Link
                      to="ticket-detail"
                      className="card job-card1 text-decoration-none border-none bg-gray rounded-4 p-3"
                    >
                      <div className="card-body">
                        <div className="mb-3">
                          <h3 className="card-title mb-0 job-text">
                            (LAX) Airport,{" "}
                            <span className="fw-normal">Los Angeles, CA</span>
                          </h3>
                        </div>

                        <div className="mb-3">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <span className="text-muted">Status</span>
                            </div>
                            <div className="col-md-10">
                              <div className="progress h-30">
                                <div
                                  className="progress-bar bg-lime-400 fs-5 text-black"
                                  role="progressbar"
                                  style={{ width: "60%" }}
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  60%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row text-center">
                          <div className="col-4 border-end">
                            <p className="text-muted mb-1">Trucks</p>
                            <div className="icon-container">
                              <img src="/assets/img/home/truck.png" alt="" />
                            </div>
                            <p className="fw-bold fs-4 mb-0 job-text">27</p>
                          </div>
                          <div className="col-4 border-end">
                            <p className="text-muted mb-1">Drivers</p>
                            <div className="icon-container">
                              <img
                                src="/assets/img/home/user-blue.png"
                                alt=""
                              />
                            </div>
                            <p className="fw-bold fs-4 mb-0 job-text">27</p>
                          </div>
                          <div className="col-4">
                            <p className="text-muted mb-1">Load</p>
                            <div className="icon-container">
                              <img src="/assets/img/home/load.png" alt="" />
                            </div>
                            <p className="fw-bold fs-4 mb-0 job-text">1,700T</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link
                      to="ticket-detail"
                      className="card job-card1 text-decoration-none border-none bg-gray rounded-4 p-3"
                    >
                      <div className="card-body">
                        <div className="mb-3">
                          <h3 className="card-title mb-0 job-text">
                            (LAX) Airport,{" "}
                            <span className="fw-normal">Los Angeles, CA</span>
                          </h3>
                        </div>

                        <div className="mb-3">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <span className="text-muted">Status</span>
                            </div>
                            <div className="col-md-10">
                              <div className="progress  h-30">
                                <div
                                  className="progress-bar bg-green-300 fs-5 text-black"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                  aria-valuenow="80"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  80%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row text-center">
                          <div className="col-4 border-end">
                            <p className="text-muted mb-1">Trucks</p>
                            <div className="icon-container">
                              <img src="/assets/img/home/truck.png" alt="" />
                            </div>
                            <p className="fw-bold fs-4 mb-0 job-text">27</p>
                          </div>
                          <div className="col-4 border-end">
                            <p className="text-muted mb-1">Drivers</p>
                            <div className="icon-container">
                              <img
                                src="/assets/img/home/user-blue.png"
                                alt=""
                              />
                            </div>
                            <p className="fw-bold fs-4 mb-0 job-text">27</p>
                          </div>
                          <div className="col-4">
                            <p className="text-muted mb-1">Load</p>
                            <div className="icon-container">
                              <img src="/assets/img/home/load.png" alt="" />
                            </div>
                            <p className="fw-bold fs-4 mb-0 job-text">1,700T</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link
                      to="ticket-detail"
                      className="card job-card1 text-decoration-none border-none bg-gray rounded-4 p-3"
                    >
                      <div className="card-body">
                        <div className="mb-3">
                          <h3 className="card-title mb-0 job-text">
                            (LAX) Airport,{" "}
                            <span className="fw-normal">Los Angeles, CA</span>
                          </h3>
                        </div>

                        <div className="mb-3">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <span className="text-muted">Status</span>
                            </div>
                            <div className="col-md-10">
                              <div className="progress  h-30">
                                <div
                                  className="progress-bar bg-yellow-400 fs-5 text-black"
                                  role="progressbar"
                                  style={{ width: "30%" }}
                                  aria-valuenow="30"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  30%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row text-center">
                          <div className="col-4 border-end">
                            <p className="text-muted mb-1">Trucks</p>
                            <div className="icon-container">
                              <img src="/assets/img/home/truck.png" alt="" />
                            </div>
                            <p className="fw-bold fs-4 mb-0 job-text">27</p>
                          </div>
                          <div className="col-4 border-end">
                            <p className="text-muted mb-1">Drivers</p>
                            <div className="icon-container">
                              <img
                                src="/assets/img/home/user-blue.png"
                                alt=""
                              />
                            </div>
                            <p className="fw-bold fs-4 mb-0 job-text">27</p>
                          </div>
                          <div className="col-4">
                            <p className="text-muted mb-1">Load</p>
                            <div className="icon-container">
                              <img src="/assets/img/home/load.png" alt="" />
                            </div>
                            <p className="fw-bold fs-4 mb-0 job-text">1,700T</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link
                      to="ticket-detail"
                      className="card job-card1 text-decoration-none border-none bg-gray rounded-4 p-3"
                    >
                      <div className="card-body">
                        <div className="mb-3">
                          <h3 className="card-title mb-0 job-text">
                            (LAX) Airport,{" "}
                            <span className="fw-normal">Los Angeles, CA</span>
                          </h3>
                        </div>

                        <div className="mb-3">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <span className="text-muted">Status</span>
                            </div>
                            <div className="col-md-10">
                              <div className="progress  h-30">
                                <div
                                  className="progress-bar bg-green-500 fs-5 text-black"
                                  role="progressbar"
                                  style={{ width: "100%" }}
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  100%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row text-center">
                          <div className="col-4 border-end">
                            <p className="text-muted mb-1">Trucks</p>
                            <div className="icon-container">
                              <img src="/assets/img/home/truck.png" alt="" />
                            </div>
                            <p className="fw-bold fs-4 mb-0 job-text">27</p>
                          </div>
                          <div className="col-4 border-end">
                            <p className="text-muted mb-1">Drivers</p>
                            <div className="icon-container">
                              <img
                                src="/assets/img/home/user-blue.png"
                                alt=""
                              />
                            </div>
                            <p className="fw-bold fs-4 mb-0 job-text">27</p>
                          </div>
                          <div className="col-4">
                            <p className="text-muted mb-1">Load</p>
                            <div className="icon-container">
                              <img src="/assets/img/home/load.png" alt="" />
                            </div>
                            <p className="fw-bold fs-4 mb-0 job-text">1,700T</p>
                          </div>
                        </div>
                      </div>
                    </Link>
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

export default Ticket;

import React from "react";

const DriverTickets = () => {
  return (
    <>
      <div className="main_content_iner">
        <div className="container-fluid p-0 white_card card_height_100">
          <div className="">
            <div className="white_card_header">
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
                            className="nav-link active px-3 py-1"
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
                            className="nav-link px-3 py-1"
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
              <hr style={{ color: "#cecaca", marginBottom: '0' }} />
            </div>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade"
              id="jobs"
              role="tabpanel"
              aria-labelledby="jobs-tab"
            >
              <div className="white_card_body">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="card job-card1 bg-gray border-none p-2 rounded-4 mt-0">
                      <div className="card-body mt-0">
                        <div className="mb-3">
                          <h3 className="card-title mb-0 job-text">
                            (LAX) Airport,{" "}
                            <span className="fw-normal">Los Angeles, CA</span>
                          </h3>
                        </div>

                        <div className="mb-3 mt-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <span className="text-muted">Status</span>
                            </div>
                            <div className="col-md-10">
                              <div className="progress h-30">
                                <div
                                  className="progress-bar bg-green fs-5 text-black rounded-pill"
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
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card job-card1 bg-gray border-none p-2 rounded-4">
                      <div className="card-body">
                        <div className="mb-3">
                          <h3 className="card-title mb-0 job-text">
                            (LAX) Airport,{" "}
                            <span className="fw-normal">Los Angeles, CA</span>
                          </h3>
                        </div>

                        <div className="mb-3 mt-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <span className="text-muted">Status</span>
                            </div>
                            <div className="col-md-10">
                              <div className="progress h-30">
                                <div
                                  className="progress-bar bg-green fs-5 text-black rounded-pill"
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
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card job-card1 bg-gray border-none p-2 rounded-4">
                      <div className="card-body">
                        <div className="mb-3">
                          <h3 className="card-title mb-0 job-text">
                            (LAX) Airport,{" "}
                            <span className="fw-normal">Los Angeles, CA</span>
                          </h3>
                        </div>

                        <div className="mb-3 mt-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <span className="text-muted">Status</span>
                            </div>
                            <div className="col-md-10">
                              <div className="progress h-30">
                                <div
                                  className="progress-bar bg-green fs-5 text-black rounded-pill"
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
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card job-card1 bg-gray border-none p-2 rounded-4">
                      <div className="card-body">
                        <div className="mb-3">
                          <h3 className="card-title mb-0 job-text">
                            (LAX) Airport,{" "}
                            <span className="fw-normal">Los Angeles, CA</span>
                          </h3>
                        </div>

                        <div className="mb-3 mt-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <span className="text-muted">Status</span>
                            </div>
                            <div className="col-md-10">
                              <div className="progress h-30">
                                <div
                                  className="progress-bar bg-green fs-5 text-black rounded-pill"
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
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card job-card1 bg-gray border-none p-2 rounded-4">
                      <div className="card-body">
                        <div className="mb-3">
                          <h3 className="card-title mb-0 job-text">
                            (LAX) Airport,{" "}
                            <span className="fw-normal">Los Angeles, CA</span>
                          </h3>
                        </div>

                        <div className="mb-3 mt-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <span className="text-muted">Status</span>
                            </div>
                            <div className="col-md-10">
                              <div className="progress h-30">
                                <div
                                  className="progress-bar bg-green fs-5 text-black rounded-pill"
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
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card job-card1 bg-gray border-none p-2 rounded-4">
                      <div className="card-body">
                        <div className="mb-3">
                          <h3 className="card-title mb-0 job-text">
                            (LAX) Airport,{" "}
                            <span className="fw-normal">Los Angeles, CA</span>
                          </h3>
                        </div>

                        <div className="mb-3 mt-4">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <span className="text-muted">Status</span>
                            </div>
                            <div className="col-md-10">
                              <div className="progress h-30">
                                <div
                                  className="progress-bar bg-green fs-5 text-black rounded-pill"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade show active"
              id="index"
              role="tabpanel"
              aria-labelledby="index-tab"
            >
              <div className="white_card_body">
                <div className="mt-2">
                  <div className="job-ticket">
                    <div className="d-flex align-items-center gap-2">
                      <span className="airport">(LAX) Airport,</span>
                      <span className="location">Los Angeles</span>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <span className="airport">2JB872HB</span>
                      <span className="airport">12-21-24</span>
                    </div>
                  </div>

                  <div className="job-ticket">
                    <div className="d-flex align-items-center gap-2">
                      <span className="airport">(LAX) Airport,</span>
                      <span className="location">Los Angeles</span>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <span className="airport">2JB872HB</span>
                      <span className="airport">12-21-24</span>
                    </div>
                  </div>

                  <div className="job-ticket">
                    <div className="d-flex align-items-center gap-2">
                      <span className="airport">(LAX) Airport,</span>
                      <span className="location">Los Angeles</span>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <span className="airport">2JB872HB</span>
                      <span className="airport">12-21-24</span>
                    </div>
                  </div>

                  <div className="job-ticket">
                    <div className="d-flex align-items-center gap-2">
                      <span className="airport">(LAX) Airport,</span>
                      <span className="location">Los Angeles</span>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <span className="airport">2JB872HB</span>
                      <span className="airport">12-21-24</span>
                    </div>
                  </div>

                  <div className="job-ticket">
                    <div className="d-flex align-items-center gap-2">
                      <span className="airport">(LAX) Airport,</span>
                      <span className="location">Los Angeles</span>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <span className="airport">2JB872HB</span>
                      <span className="airport">12-21-24</span>
                    </div>
                  </div>

                  <div className="job-ticket">
                    <div className="d-flex align-items-center gap-2">
                      <span className="airport">(LAX) Airport,</span>
                      <span className="location">Los Angeles</span>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <span className="airport">2JB872HB</span>
                      <span className="airport">12-21-24</span>
                    </div>
                  </div>

                  <div className="job-ticket">
                    <div className="d-flex align-items-center gap-2">
                      <span className="airport">(LAX) Airport,</span>
                      <span className="location">Los Angeles</span>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <span className="airport">2JB872HB</span>
                      <span className="airport">12-21-24</span>
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

export default DriverTickets;

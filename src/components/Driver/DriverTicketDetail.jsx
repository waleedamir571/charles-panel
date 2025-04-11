import React from "react";
import { Link } from "react-router-dom";

const DriverTicketDetail = () => {
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
            <Link to="/driver/job-tickets" className="text-dark fw-medium text-decoration-none ">Tickets</Link>
            <img
              src="/images/bread-arrow.svg"
              alt="arrow"
              style={{ margin: "0 10px" }}
            />
            <span className="bread-text fw-medium">Ticket Detail</span>
          </div>
        </div>
        <div className="container-fluid p-0 white_card card_height_100 mb_30">
          <div className="mb-4">
            <div className="white_card_header">
              <div className="row align-items-center">
                <div className="col-md-6 col-12 mb-2 mb-md-0">
                  <h1 className="fw-medium fs-3 mb-0">John Doe</h1>
                  <br />
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
                <div className=" p-4 h-100 shadow-sm">
                  <p className="text-muted">(LAX) Airport, Los Angeles, CA</p>

                  <div className="row g-3 my-3 job-card1">
                    <div className="col-md-4"></div>

                    <div className="col-md-4">
                      <div className="stat-card">
                        <div className="stat-label payslip-text">
                          Total Drivers
                        </div>
                        <div className="stat-value pt-30 fs-148">148</div>
                      </div>
                    </div>

                    <div className="col-md-4"></div>
                  </div>

                  <div className="row g-3 my-3  job-card1">
                    <div className="col-md-6">
                      <div className="stat-card">
                        <div className="stat-label payslip-text">
                          Total Load <br />
                          Transported
                        </div>
                        <div className="stat-value summary pt-30">
                          1,680 <small className="text-muted">T</small>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="stat-card">
                        <div className="stat-label payslip-text">
                          Total Distance
                        </div>
                        <div className="stat-value summary pt-30">
                          200<small className="text-muted ms-1">MILES</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="container mt-5">
                  <div className="date-section">
                    <div className="date-title">
                      Today <div className="line"></div>
                    </div>
                    <br />
                    <div className="preview-box">
                      <span>25TH - November - 2024</span>
                      <button>Preview</button>
                    </div>
                    <div className="preview-box">
                      <span>24TH - November - 2024</span>
                      <button>Preview</button>
                    </div>
                  </div>

                  <div className="date-section">
                    <div className="date-title">
                      This Week <div className="line"></div>
                    </div>
                    <br />
                    <div className="preview-box">
                      <span>23TH - November - 2024</span>
                      <button>Preview</button>
                    </div>
                    <div className="preview-box">
                      <span>22TH - November - 2024</span>
                      <button>Preview</button>
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

export default DriverTicketDetail;

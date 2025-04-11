import React from "react";
import { Link } from "react-router-dom";

const JobTickets = () => {
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
              to="/network"
              className="text-dark fw-medium text-decoration-none "
            >
              <span className="text-dark fw-medium">Network</span>
            </Link>
            <img
              src="/images/bread-arrow.svg"
              alt="arrow"
              style={{ margin: "0 10px" }}
            />
            <Link
              to="/network/details"
              className="text-dark fw-medium text-decoration-none "
            >
              <span className=" fw-medium">Knotty Logistic LLC</span>
            </Link>
            <img
              src="/images/bread-arrow.svg"
              alt="arrow"
              style={{ margin: "0 10px" }}
            />
            <span className="bread-text fw-medium">Job Tickets</span>
          </div>
        </div>{" "}
        <div className="white_card card_height_100 rounded-4 p-4">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="fw-medium fs-3 mb-0">Job Tickets</h1>
            <div className="d-flex gap-2">
              <div className="search-container">
                <input
                  type="text"
                  className="form-control form-control1 search-input"
                  placeholder="Search..."
                  style={{ width: "256px" }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search search-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
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
                  />
                  <path
                    d="M15 3H11V7H15V3Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 11H3V15H7V11Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 11H11V15H15V11Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <button className="btn_1 text-decoration-none">
                + &nbsp;&nbsp;Add
              </button>
            </div>
          </div>
          <hr style={{ color: "#cecaca", marginTop: "10px" }} />

          <div className="mt-4">
            <Link
              to="/network/details/job-tickets/details"
              className="text-decoration-none"
            >
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
            </Link>

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
    </>
  );
};

export default JobTickets;

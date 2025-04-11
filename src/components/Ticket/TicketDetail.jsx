import React, { useState } from "react";
import JobTicketCard from "./JobTicketCard";
import { Link } from "react-router-dom";

const TicketDetail = () => {
  const [viewTicket, setViewTicket] = useState(false);
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
              style={{ margin: "0 8px" }}
            />
            <span className="bread-text fw-medium">Ticket</span>
          </div>
        </div>
        <div className="container-fluid p-0 white_card card_height_100 mb_30 bg-gray">
          <div className="mb-4">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="white_card_header p-0">
                  <div className="card p-4 h-100 shadow-sm  rounded-4 border-none">
                    <div className="col-md-6 col-12 mb-2 mb-md-0">
                      <h1 className="fw-medium fs-3 mb-0">Job Tickets</h1>
                      <hr style={{ color: "#cecaca" }} />
                    </div>

                    <div className="row ">
                      <div className="col-md-4">
                        <div className="bg-gray p-3 text-center rounded-2">
                          <div className="stat-label payslip-text fs-6">
                            Total Hours
                          </div>
                          <div className="stat-value job-text pt-3">122h</div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="bg-gray p-3 text-center rounded-2">
                          <div className="stat-label payslip-text fs-6">
                            Total Drivers
                          </div>
                          <div className="stat-value job-text pt-3">148</div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="bg-gray p-3 text-center rounded-2">
                          <div className="stat-label payslip-text fs-6">
                            Total Trucks
                          </div>
                          <div className="stat-value job-text pt-3">148</div>
                        </div>
                      </div>
                    </div>

                    <div className="row g-3 my-3">
                      <div className="col-md-4">
                        <div className="bg-gray p-3 text-center rounded-2">
                          <div className="stat-label payslip-text fs-6">
                            Rate Per Unit
                          </div>
                          <div className="stat-value job-text pt-3">$28/T</div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="bg-gray p-3 text-center rounded-2">
                          <div className="stat-label payslip-text fs-6">
                            Total Load Transported
                          </div>
                          <div className="stat-value job-text pt-3">
                            1,680 <small style={{ fontSize: "14px" }}>T</small>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="bg-gray p-3 text-center rounded-2">
                          <div className="stat-label payslip-text fs-6">
                            Total Distance
                          </div>
                          <div className="stat-value job-text pt-3">
                            200<small style={{ fontSize: "14px" }}>MILES</small>
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
              </div>

              <div className="col-lg-6">
                <div className="white_card_header p-0">
                  <div className="card p-4 h-100 shadow-sm  rounded-4 border-none">
                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
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
                          width="22"
                          height="21"
                          viewBox="0 0 22 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.821 10.4355H7.71554M3.08963 10.4355H1.19727M3.08963 10.4355C3.08963 9.82221 3.33326 9.23404 3.76693 8.80037C4.20059 8.36671 4.78876 8.12308 5.40206 8.12308C6.01535 8.12308 6.60352 8.36671 7.03718 8.80037C7.47085 9.23404 7.71448 9.82221 7.71448 10.4355C7.71448 11.0488 7.47085 11.637 7.03718 12.0706C6.60352 12.5043 6.01535 12.7479 5.40206 12.7479C4.78876 12.7479 4.20059 12.5043 3.76693 12.0706C3.33326 11.637 3.08963 11.0488 3.08963 10.4355ZM20.821 17.4438H14.7239M14.7239 17.4438C14.7239 18.0573 14.4797 18.6461 14.0459 19.0799C13.6121 19.5136 13.0238 19.7573 12.4104 19.7573C11.7971 19.7573 11.2089 19.5126 10.7753 19.079C10.3416 18.6453 10.098 18.0571 10.098 17.4438M14.7239 17.4438C14.7239 16.8304 14.4797 16.2426 14.0459 15.8089C13.6121 15.3751 13.0238 15.1314 12.4104 15.1314C11.7971 15.1314 11.2089 15.375 10.7753 15.8087C10.3416 16.2424 10.098 16.8305 10.098 17.4438M10.098 17.4438H1.19727M20.821 3.42717H17.5274M12.9015 3.42717H1.19727M12.9015 3.42717C12.9015 2.81388 13.1451 2.2257 13.5788 1.79204C14.0125 1.35838 14.6006 1.11475 15.2139 1.11475C15.5176 1.11475 15.8183 1.17456 16.0989 1.29077C16.3794 1.40698 16.6343 1.57731 16.8491 1.79204C17.0638 2.00677 17.2341 2.26169 17.3503 2.54224C17.4665 2.8228 17.5264 3.1235 17.5264 3.42717C17.5264 3.73084 17.4665 4.03154 17.3503 4.31209C17.2341 4.59265 17.0638 4.84757 16.8491 5.0623C16.6343 5.27703 16.3794 5.44736 16.0989 5.56357C15.8183 5.67978 15.5176 5.73959 15.2139 5.73959C14.6006 5.73959 14.0125 5.49596 13.5788 5.0623C13.1451 4.62863 12.9015 4.04046 12.9015 3.42717Z"
                            stroke="#7E7E7E"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <hr style={{ color: "#cecaca", marginTop: "0" }} />

                    <JobTicketCard />
                    <JobTicketCard />
                    <JobTicketCard />
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

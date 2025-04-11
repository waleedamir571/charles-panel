import React from "react";
import { Link } from "react-router-dom";

const Network = () => {
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
            <span className="bread-text fw-medium">Network</span>
          </div>
        </div>
        <div className="white_card card_height_100 mb_30 rounded-4">
          <div className="white_card_body">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="fw-medium fs-3 mb-0">Network</h1>

              <div className="d-flex gap-2">
                <div className="search-container">
                  <input
                    type="text"
                    className="form-control search-input"
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
                <button className="filter-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-sliders"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                    />
                  </svg>
                </button>
                <button
                  className="btn_1 text-decoration-none"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalLong1"
                >
                  + Send Invite
                </button>
              </div>
            </div>
            <hr style={{ color: "#cecaca", marginBottom: "0" }} />

            <div className="mt-4">
              <div className="overflow">
                <Link to="/network/details" className="text-decoration-none">
                  <div className="job-ticket4">
                    <div className="  gap-2">
                      <div className="row align-items-center">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                        </div>
                        <div className="col-md-9">
                          <div className="job">Knotty Logistic LLC</div>
                        </div>
                        <div className="col-md-2 text-center">
                          <span className="asset-unit">PREVIEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="/network/details" className="text-decoration-none">
                  <div className="job-ticket4">
                    <div className="  gap-2">
                      <div className="row align-items-center">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                        </div>
                        <div className="col-md-9">
                          <div className="job">Knotty Logistic LLC</div>
                        </div>
                        <div className="col-md-2 text-center">
                          <span className="asset-unit">PREVIEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/network/details" className="text-decoration-none">
                  <div className="job-ticket4">
                    <div className="  gap-2">
                      <div className="row align-items-center">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                        </div>
                        <div className="col-md-9">
                          <div className="job">Knotty Logistic LLC</div>
                        </div>
                        <div className="col-md-2 text-center">
                          <span className="asset-unit">PREVIEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/network/details" className="text-decoration-none">
                  <div className="job-ticket4">
                    <div className="  gap-2">
                      <div className="row align-items-center">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                        </div>
                        <div className="col-md-9">
                          <div className="job">Knotty Logistic LLC</div>
                        </div>
                        <div className="col-md-2 text-center">
                          <span className="asset-unit">PREVIEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/network/details" className="text-decoration-none">
                  <div className="job-ticket4">
                    <div className="  gap-2">
                      <div className="row align-items-center">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                        </div>
                        <div className="col-md-9">
                          <div className="job">Knotty Logistic LLC</div>
                        </div>
                        <div className="col-md-2 text-center">
                          <span className="asset-unit">PREVIEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/network/details" className="text-decoration-none">
                  <div className="job-ticket4">
                    <div className="  gap-2">
                      <div className="row align-items-center">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                        </div>
                        <div className="col-md-9">
                          <div className="job">Knotty Logistic LLC</div>
                        </div>
                        <div className="col-md-2 text-center">
                          <span className="asset-unit">PREVIEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/network/details" className="text-decoration-none">
                  <div className="job-ticket4">
                    <div className="  gap-2">
                      <div className="row align-items-center">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                        </div>
                        <div className="col-md-9">
                          <div className="job">Knotty Logistic LLC</div>
                        </div>
                        <div className="col-md-2 text-center">
                          <span className="asset-unit">PREVIEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/network/details" className="text-decoration-none">
                  <div className="job-ticket4">
                    <div className="  gap-2">
                      <div className="row align-items-center">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                        </div>
                        <div className="col-md-9">
                          <div className="job">Knotty Logistic LLC</div>
                        </div>
                        <div className="col-md-2 text-center">
                          <span className="asset-unit">PREVIEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/network/details" className="text-decoration-none">
                  <div className="job-ticket4">
                    <div className="  gap-2">
                      <div className="row align-items-center">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                        </div>
                        <div className="col-md-9">
                          <div className="job">Knotty Logistic LLC</div>
                        </div>
                        <div className="col-md-2 text-center">
                          <span className="asset-unit">PREVIEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/network/details" className="text-decoration-none">
                  <div className="job-ticket4">
                    <div className="  gap-2">
                      <div className="row align-items-center">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                        </div>
                        <div className="col-md-9">
                          <div className="job">Knotty Logistic LLC</div>
                        </div>
                        <div className="col-md-2 text-center">
                          <span className="asset-unit">PREVIEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/network/details" className="text-decoration-none">
                  <div className="job-ticket4">
                    <div className="  gap-2">
                      <div className="row align-items-center">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                        </div>
                        <div className="col-md-9">
                          <div className="job">Knotty Logistic LLC</div>
                        </div>
                        <div className="col-md-2 text-center">
                          <span className="asset-unit">PREVIEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/network/details" className="text-decoration-none">
                  <div className="job-ticket4">
                    <div className="  gap-2">
                      <div className="row align-items-center">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                        </div>
                        <div className="col-md-9">
                          <div className="job">Knotty Logistic LLC</div>
                        </div>
                        <div className="col-md-2 text-center">
                          <span className="asset-unit">PREVIEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/network/details" className="text-decoration-none">
                  <div className="job-ticket4">
                    <div className="  gap-2">
                      <div className="row align-items-center">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                        </div>
                        <div className="col-md-9">
                          <div className="job">Knotty Logistic LLC</div>
                        </div>
                        <div className="col-md-2 text-center">
                          <span className="asset-unit">PREVIEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalLong1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content p-3 border-none">
            <div className="modal-body">
              <div className="search-container">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search..."
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search search-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
              </div>
              <div className="mt-3">
                <div className="Notification_body">
                  <div className="overflow">
                    <div className="single_notify ptb-15 ">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <div className="notify_thumb">
                            <a href="#" className="text-decoration-none">
                              <img
                                className="w-100"
                                src="/assets/img/home/noti-user.png"
                                alt=""
                              />{" "}
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="notify_content">
                            <a href="#" className="text-decoration-none">
                              <h5>
                                Diane Guzman{" "}
                                <span>
                                  <p>(LAX) Airport, Los Angeles, CA</p>
                                </span>
                              </h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <a href="#" className="btn_13 text-decoration-none">
                            Send Req
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="single_notify ptb-15 ">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <div className="notify_thumb">
                            <a href="#" className="text-decoration-none">
                              <img
                                className="w-100"
                                src="/assets/img/home/noti-user.png"
                                alt=""
                              />{" "}
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="notify_content">
                            <a href="#" className="text-decoration-none">
                              <h5>
                                Diane Guzman{" "}
                                <span>
                                  <p>(LAX) Airport, Los Angeles, CA</p>
                                </span>
                              </h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <a href="#" className="btn_13 text-decoration-none">
                            Send Req
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="single_notify ptb-15 ">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <div className="notify_thumb">
                            <a href="#" className="text-decoration-none">
                              <img
                                className="w-100"
                                src="/assets/img/home/noti-user.png"
                                alt=""
                              />{" "}
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="notify_content">
                            <a href="#" className="text-decoration-none">
                              <h5>
                                Diane Guzman{" "}
                                <span>
                                  <p>(LAX) Airport, Los Angeles, CA</p>
                                </span>
                              </h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <a href="#" className="btn_13 text-decoration-none">
                            Send Req
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single_notify ptb-15 ">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <div className="notify_thumb">
                            <a href="#" className="text-decoration-none">
                              <img
                                className="w-100"
                                src="/assets/img/home/noti-user.png"
                                alt=""
                              />{" "}
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="notify_content">
                            <a href="#" className="text-decoration-none">
                              <h5>
                                Diane Guzman{" "}
                                <span>
                                  <p>(LAX) Airport, Los Angeles, CA</p>
                                </span>
                              </h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <a href="#" className="btn_13 text-decoration-none">
                            Send Req
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single_notify ptb-15 ">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <div className="notify_thumb">
                            <a href="#" className="text-decoration-none">
                              <img
                                className="w-100"
                                src="/assets/img/home/noti-user.png"
                                alt=""
                              />{" "}
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="notify_content">
                            <a href="#" className="text-decoration-none">
                              <h5>
                                Diane Guzman{" "}
                                <span>
                                  <p>(LAX) Airport, Los Angeles, CA</p>
                                </span>
                              </h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <a href="#" className="btn_13 text-decoration-none">
                            Send Req
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single_notify ptb-15 ">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <div className="notify_thumb">
                            <a href="#" className="text-decoration-none">
                              <img
                                className="w-100"
                                src="/assets/img/home/noti-user.png"
                                alt=""
                              />{" "}
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="notify_content">
                            <a href="#" className="text-decoration-none">
                              <h5>
                                Diane Guzman{" "}
                                <span>
                                  <p>(LAX) Airport, Los Angeles, CA</p>
                                </span>
                              </h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <a href="#" className="btn_13 text-decoration-none">
                            Send Req
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single_notify ptb-15 ">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <div className="notify_thumb">
                            <a href="#" className="text-decoration-none">
                              <img
                                className="w-100"
                                src="/assets/img/home/noti-user.png"
                                alt=""
                              />{" "}
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="notify_content">
                            <a href="#" className="text-decoration-none">
                              <h5>
                                Diane Guzman{" "}
                                <span>
                                  <p>(LAX) Airport, Los Angeles, CA</p>
                                </span>
                              </h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <a href="#" className="btn_13 text-decoration-none">
                            Send Req
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single_notify ptb-15 ">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <div className="notify_thumb">
                            <a href="#" className="text-decoration-none">
                              <img
                                className="w-100"
                                src="/assets/img/home/noti-user.png"
                                alt=""
                              />{" "}
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="notify_content">
                            <a href="#" className="text-decoration-none">
                              <h5>
                                Diane Guzman{" "}
                                <span>
                                  <p>(LAX) Airport, Los Angeles, CA</p>
                                </span>
                              </h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <a href="#" className="btn_13 text-decoration-none">
                            Send Req
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single_notify ptb-15 ">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <div className="notify_thumb">
                            <a href="#" className="text-decoration-none">
                              <img
                                className="w-100"
                                src="/assets/img/home/noti-user.png"
                                alt=""
                              />{" "}
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="notify_content">
                            <a href="#" className="text-decoration-none">
                              <h5>
                                Diane Guzman{" "}
                                <span>
                                  <p>(LAX) Airport, Los Angeles, CA</p>
                                </span>
                              </h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <a href="#" className="btn_13 text-decoration-none">
                            Send Req
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single_notify ptb-15 ">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <div className="notify_thumb">
                            <a href="#" className="text-decoration-none">
                              <img
                                className="w-100"
                                src="/assets/img/home/noti-user.png"
                                alt=""
                              />{" "}
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="notify_content">
                            <a href="#" className="text-decoration-none">
                              <h5>
                                Diane Guzman{" "}
                                <span>
                                  <p>(LAX) Airport, Los Angeles, CA</p>
                                </span>
                              </h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <a href="#" className="btn_13 text-decoration-none">
                            Send Req
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ptb-15">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <button
                    className="btn_12"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalLong2"
                  >
                    <img
                      className="w-20"
                      src="/assets/img/home/people.png"
                      alt=""
                    />{" "}
                    Send Invite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalLong2"
        tabIndex="-1"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content p-4 border-none roudned-4">
            <h2 className="fs-3 fw-medium mb-4 text-center mx-auto">
              Enter Details
            </h2>

            <div className="modal-body">
              <div className="row">
                <div className="col-md-12 mb-3 gap-3">
                  <label className="info-label2 mb-3">Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg bg-gray border-none"
                    placeholder="Diane Guzman"
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <label className="info-label2 mb-3">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg bg-gray border-none"
                    placeholder="Dianeguzman1212@gmail.com"
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <label className="info-label2 mb-3">Phone</label>
                  <input
                    type="tel"
                    className="form-control form-control-lg bg-gray border-none"
                    placeholder="+1 425 365 6686"
                  />
                </div>
              </div>
            </div>

            <div className="ptb-15">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <button className="btn_12 w-100">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Network;

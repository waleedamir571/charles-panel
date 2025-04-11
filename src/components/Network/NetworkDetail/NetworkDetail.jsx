import React from "react";
import styles from "./NetworkDetail.module.css";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";

const NetworkDetail = () => {
  const RatingStars = ({ rating }) => {
    // Create an array of 5 elements for the stars (full or empty based on the rating)
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <FaStar
            key={i}
            style={{ color: "#FFB600", marginRight: "5px", fontSize: "20px" }}
          />
        );
      } else {
        stars.push(
          <FaStar
            key={i}
            style={{ color: "#5A6466", marginRight: "5px", fontSize: "20px" }}
          />
        );
      }
    }

    return <div>{stars}</div>;
  };
  return (
    <>
      <div className={styles.dashboard}>
        <div className="white_card_body bg-white px-4 py-3 mb-3 rounded-4">
          <div className="d-flex align-items-center mb-2 fs-3">
            <Link
              to="/"
              className="text-dark fw-medium text-decoration-none "
            >
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
            <span className="bread-text fw-medium">Knotty Logistic LLC</span>
          </div>
        </div>{" "}
        {/* <!-- Header Section --> */}
        <div className={styles.header}>
          <img src="/assets/img/home/logo.png" alt="" />{" "}
          <img
            src="/assets/img/home/star.png"
            alt=""
            style={{ width: "12vw" }}
          />
          <div className={styles.rating}></div>
          <div className={styles["top-buttons"]}>
            <Link to="job-tickets" className="text-white fs-5">
              <button type="button" className="btn mb-3 btn-info1">
                <i className="fas fa-file-alt"></i>&nbsp;&nbsp;&nbsp; Job
                Tickets
              </button>
            </Link>
            <Link to="invoices" className="text-white">
              <button type="button" className="btn mb-3 btn-info1">
                <i className="fas fa-file-invoice"></i>&nbsp;&nbsp;&nbsp;
                Invoices
              </button>
            </Link>
            <Link to="documents" className="text-white">
              <button type="button" className="btn mb-3 btn-info1">
                <i className="fas fa-folder"></i>&nbsp;&nbsp;&nbsp; Documents
              </button>
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          {/* <!-- Left Column --> */}
          <div className="col-md-7">
            <div className={`${styles.card}`}>
              <p className="gps">Knotty Logistic LLC</p>
              <hr style={{ color: "#cecaca" }} />

              <table className="table table-borderless text-center">
                <thead>
                  <tr>
                    <th className="profile" style={{ color: "#4E5456" }}>
                      Profile
                    </th>
                    <th className="profile" style={{ color: "#4E5456" }}>
                      Name
                    </th>
                    <th className="profile" style={{ color: "#4E5456" }}>
                      Contact
                    </th>
                    <th className="profile" style={{ color: "#4E5456" }}>
                      Rating
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={`${styles.tableRow}`}>
                    <td>
                      <img
                        src="/assets/img/home/usernone.png"
                        className={styles["profile-img"]}
                      />
                    </td>
                    <td className="job">Ben Anderson</td>
                    <td>(123) 465-789</td>
                    <td>
                      <RatingStars rating={4} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="/assets/img/home/usernone.png"
                        className={styles["profile-img"]}
                      />
                    </td>
                    <td className="job">Ben Anderson</td>
                    <td>(123) 465-789</td>
                    <td>
                      <RatingStars rating={3} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="/assets/img/home/usernone.png"
                        className={styles["profile-img"]}
                      />
                    </td>
                    <td className="job">Ben Anderson</td>
                    <td>(123) 465-789</td>
                    <td>
                      <RatingStars rating={5} />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <p className="gps">Address</p>
                <hr style={{ color: "#cecaca", marginBottom: "0" }} />

                <br />
                <div className="box">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="ptext">
                        <strong>Office:</strong>
                        <br />
                        6730 Fairdale Dr, San Antonio TX
                      </p>
                    </div>
                    <div className="col-md-3 offset-md-3">
                      <img src="/assets/img/home/office.png" alt="" />
                    </div>
                  </div>
                </div>

                <br />
                <br />
                <div className="box">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="ptext">
                        <strong>Region:</strong>
                        <br />
                        San Antonio, TX 78218
                      </p>
                    </div>
                    <div className="col-md-3 offset-md-3">
                      <img src="/assets/img/home/region.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}
          <div className="col-md-5">
            {/* <!-- <div className="card">
                <p className="gps">Assets</p>
                <p>Trucks</p>
                <div className="progress">
                    <div className="progress-bar bg-primary" style="width: 75%;"></div>
                </div>
                <p>Belly</p>
                <div className="progress">
                    <div className="progress-bar bg-info" style="width: 35%;"></div>
                </div>
                <p>Side</p>
                <div className="progress">
                    <div className="progress-bar bg-dark" style="width: 45%;"></div>
                </div>
                <p>End</p>
                <div className="progress">
                    <div className="progress-bar bg-danger" style="width: 12%;"></div>
                </div>
            </div> --> */}
            <div className={styles.card}>
              <p className="gps">Assets</p>
              <div className="chart-container">
                <div className="y-axis">
                  <div className="label">Trucks</div>
                  <div className="label">Belly</div>
                  <div className="label">Side</div>
                  <div className="label">End</div>
                </div>

                <div className="grid">
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                </div>

                <div className="bars">
                  <div className="bar-row">
                    <div
                      className="bar highlight"
                      style={{ width: "90%" }}
                    ></div>
                    <div className="bar-label">75</div>
                  </div>
                  <div className="bar-row">
                    <div className="bar bar2" style={{ width: "30%" }}></div>
                    <div className="bar-label">35</div>
                  </div>
                  <div className="bar-row">
                    <div className="bar bar3" style={{ width: "36%" }}></div>
                    <div className="bar-label">45</div>
                  </div>
                  <div className="bar-row">
                    <div className="bar bar4" style={{ width: "15%" }}></div>
                    <div className="bar-label">12</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <p className="gps">Jobs</p>
              <br />
              <div className="job-card">
                <span>
                  <strong>LAX Airport</strong>, Los Angeles, CA
                </span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="job-card">
                <span>
                  <strong>LAX Airport</strong>, Los Angeles, CA
                </span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="job-card">
                <span>
                  <strong>LAX Airport</strong>, Los Angeles, CA
                </span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="job-card">
                <span>
                  <strong>LAX Airport</strong>, Los Angeles, CA
                </span>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NetworkDetail;

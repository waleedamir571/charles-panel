import React from "react";
import { Link } from "react-router-dom";
const Assets = () => {
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
            <span className="bread-text fw-medium">Assets</span>
          </div>
        </div>
        <div className="white_card card_height_100 mb_30">
          <div className="white_card_body pt-1">
            <div className="d-flex justify-content-between align-items-center mb-1 mt-3">
              <h1 className="fs-2 mb-0 fw-medium">My Assets</h1>

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
                <Link to="/assets/add" className="btn_1 text-decoration-none">
                  + Add Assets
                </Link>
              </div>
            </div>
            <hr />

            <div className="mt-4">
              <div className="job-ticket2">
                <div className="">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <span className="heading ">Type</span>
                    </div>
                    <div className="col-md-3 ">
                      <span className="heading">Unit No</span>
                    </div>
                    <div className="col-md-3 text-center">
                      <span className="heading">Alerts</span>
                    </div>
                    <div className="col-md-3 text-end">
                      <span className="heading">Status</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow">
                <div className="job-ticket4">
                  <Link to={"detail"} className="gap-2 text-decoration-none">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <img src="/assets/img/home/assettruck.png" alt="" />
                      </div>
                      <div className="col-md-3">
                        <span className="asset-unit">36548</span>
                      </div>
                      <div className="col-md-3 text-center">
                        <span className="asset-unit">-</span>
                      </div>
                      <div className="col-md-3 ">
                        <div className="good text-end">Good</div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="job-ticket4">
                  <Link to={"detail"} className="gap-2 text-decoration-none">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <img src="/assets/img/home/car-asset.png" alt="" />
                      </div>
                      <div className="col-md-3">
                        <span className="asset-unit">36548</span>
                      </div>
                      <div className="col-md-3 text-center">
                        <span className="asset-unit">2</span>
                      </div>
                      <div className="col-md-3 ">
                        <div className="pending text-end">Pending</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="job-ticket4">
                  <Link to={"detail"} className="gap-2 text-decoration-none">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <img src="/assets/img/home/goodasset.png" alt="" />
                      </div>
                      <div className="col-md-3">
                        <span className="asset-unit">36548</span>
                      </div>
                      <div className="col-md-3 text-center">
                        <span className="asset-unit">1</span>
                      </div>
                      <div className="col-md-3 ">
                        <div className="overdue text-end">Overdue</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="job-ticket4">
                  <Link to={"detail"} className="gap-2 text-decoration-none">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <img src="/assets/img/home/trailerasset.png" alt="" />
                      </div>
                      <div className="col-md-3">
                        <span className="asset-unit">36548</span>
                      </div>
                      <div className="col-md-3 text-center">
                        <span className="asset-unit">-</span>
                      </div>
                      <div className="col-md-3 ">
                        <div className="good text-end">Good</div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="job-ticket4">
                  <Link to={"detail"} className="gap-2 text-decoration-none">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <img src="/assets/img/home/assettruck.png" alt="" />
                      </div>
                      <div className="col-md-3">
                        <span className="asset-unit">36548</span>
                      </div>
                      <div className="col-md-3 text-center">
                        <span className="asset-unit">2</span>
                      </div>
                      <div className="col-md-3 ">
                        <div className="pending text-end">Pending</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="job-ticket4">
                  <Link to={"detail"} className="gap-2 text-decoration-none">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <img src="/assets/img/home/assettruck.png" alt="" />
                      </div>
                      <div className="col-md-3">
                        <span className="asset-unit">36548</span>
                      </div>
                      <div className="col-md-3 text-center">
                        <span className="asset-unit">1</span>
                      </div>
                      <div className="col-md-3 ">
                        <div className="overdue text-end">Overdue</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="job-ticket4">
                  <Link to={"detail"} className="gap-2 text-decoration-none">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <img src="/assets/img/home/assettruck.png" alt="" />
                      </div>
                      <div className="col-md-3">
                        <span className="asset-unit">36548</span>
                      </div>
                      <div className="col-md-3 text-center">
                        <span className="asset-unit">-</span>
                      </div>
                      <div className="col-md-3 ">
                        <div className="good text-end">Good</div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="job-ticket4">
                  <Link to={"detail"} className="gap-2 text-decoration-none">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <img src="/assets/img/home/assettruck.png" alt="" />
                      </div>
                      <div className="col-md-3">
                        <span className="asset-unit">36548</span>
                      </div>
                      <div className="col-md-3 text-center">
                        <span className="asset-unit">2</span>
                      </div>
                      <div className="col-md-3 ">
                        <div className="pending text-end">Pending</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="job-ticket4">
                  <Link to={"detail"} className="gap-2 text-decoration-none">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <img src="/assets/img/home/assettruck.png" alt="" />
                      </div>
                      <div className="col-md-3">
                        <span className="asset-unit">36548</span>
                      </div>
                      <div className="col-md-3 text-center">
                        <span className="asset-unit">1</span>
                      </div>
                      <div className="col-md-3 ">
                        <div className="overdue text-end">Overdue</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assets;

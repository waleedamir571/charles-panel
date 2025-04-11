import React from "react";
import { Link } from "react-router-dom";

const AssetDetail = () => {
  return (
    <>
      <div className="main_content_iner">
        <div className="white_card card_height_100 mb_30">
          <div className="white_card_body">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="fw-bold fs-4 mb-0">
                Details <span className="year">(2007 Peterbilt 389)</span>
              </h1>

              <div className="d-flex gap-2">
                <p className="asset-unit mb-0 me-3" style={{ marginBottom: "0" }}>
                  Date Entered <span className="year">: 01-21-2025</span>
                </p>
                <Link to="/assets/detail/maintainance" className="btn_1 text-decoration-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1113_3608)">
                      <path
                        d="M1.29125 0.810547L0.28125 1.82055L2.06048 4.89747L3.21433 4.72824L10.2574 11.7721L9.65663 12.349C9.34894 12.6567 9.34894 13.1229 9.65663 13.4305L9.96894 13.7436C10.2766 14.0513 10.7474 14.0513 10.9782 13.7436L11.892 14.6567C11.8151 15.1182 11.892 15.6667 12.2766 16.0513L16.4351 20.1859C17.2812 21.0321 18.6659 21.0321 19.512 20.1859C20.512 19.2629 20.5028 17.8829 19.6566 17.0367L15.522 12.8775C15.1374 12.4929 14.5889 12.339 14.1274 12.4929L13.1174 11.5798C13.3482 11.2721 13.3482 10.8013 13.1174 10.5698L12.8289 10.2821C12.759 10.2092 12.6751 10.1511 12.5821 10.1115C12.4892 10.0719 12.3892 10.0514 12.2882 10.0514C12.1871 10.0514 12.0872 10.0719 11.9942 10.1115C11.9013 10.1511 11.8173 10.2092 11.7474 10.2821L11.2428 10.7867L4.19971 3.74362L4.3674 2.58978L1.29125 0.810547ZM16.2912 0.834393C14.7736 0.708239 12.7612 1.71439 11.8197 2.58901C10.6612 3.74747 10.8505 5.26209 11.7712 6.72439L10.1374 8.35901L11.2912 9.6567C11.9066 9.11824 12.8143 9.11824 13.4297 9.6567L13.7428 9.96901L13.8151 10.0413L14.4882 9.36824C15.8789 10.1859 17.3266 10.3036 18.4305 9.19978C19.5074 8.19978 20.6751 5.73362 20.1366 4.27209L17.9736 6.50747C17.6659 6.81516 17.1997 6.81516 16.892 6.50747L14.6559 4.27209C14.5829 4.20216 14.5249 4.1182 14.4853 4.02527C14.4456 3.93234 14.4252 3.83235 14.4252 3.73132C14.4252 3.63028 14.4456 3.53029 14.4853 3.43736C14.5249 3.34443 14.5829 3.26048 14.6559 3.19055L16.8928 0.955162C16.7005 0.88747 16.5082 0.852855 16.2912 0.834393ZM7.82971 10.4259L5.04048 13.2144C4.74071 13.1481 4.43441 13.1158 4.1274 13.1182C1.97356 13.1182 0.28125 14.8105 0.28125 16.9644C0.28125 19.1182 1.97356 20.8105 4.1274 20.8105C6.28125 20.8105 7.97356 19.1182 7.97356 16.9644C7.97356 16.5698 7.91125 16.1905 7.8051 15.8344L9.43971 14.1998L9.19971 13.8875C8.58433 13.2721 8.58894 12.3398 9.1274 11.7236L7.82971 10.4259ZM13.7912 13.9359C13.8874 13.9359 13.9782 13.9544 14.0551 14.0321L18.5989 18.5752C18.7528 18.729 18.7528 18.9736 18.5989 19.1275C18.4451 19.2813 18.1989 19.2813 18.0451 19.1275L13.5028 14.5844C13.3489 14.4305 13.3489 14.1859 13.5028 14.0321C13.5797 13.9552 13.6951 13.9359 13.7912 13.9359ZM4.65663 14.9682L6.12279 16.4352L5.59356 18.4298L3.59894 18.959L2.13202 17.4921L2.66125 15.4975L4.65663 14.9682Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1113_3608">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.28125 0.810547)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  &nbsp; Maintenance
                </Link>
                <Link
                  to="trip-inspection"
                  className="btn_1 text-decoration-none"
                >
                  Inspect
                </Link>
              </div>
            </div>

            <div className="ptb-15">
              <div className="line-container"></div>
            </div>

            <div className="">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className=" job-ticket4">
                    <div className="card-body mt-3">
                      <div className="row truck-info">
                        <div className="col-md-2">
                          <img
                            className="w-100"
                            src="/assets/img/home/truck3.png"
                            alt=""
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="info-label2 d-flex flex-column justify-content-start align-items-start">
                                Truck No :
                                <span className="year fw-normal">2345332</span>
                              </div>
                            </div>
                            <div className="col-md-4 ">
                              <div className="info-label2 d-flex flex-column justify-content-start align-items-start">
                                Make :
                                <span className="year fw-normal">
                                  Peterbilt
                                </span>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="info-label2 d-flex flex-column justify-content-start align-items-start">
                                Model :
                                <span className="year fw-normal">359</span>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="row">
                            <div className="col-md-4">
                              <div className="info-label2 d-flex flex-column justify-content-start align-items-start">
                                Year :
                                <span className="year fw-normal">2007</span>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="info-label2 d-flex flex-column justify-content-start align-items-start">
                                Odometer :
                                <span className="year fw-normal">
                                  230,332 Miles
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <img src="/assets/img/home/view-doc.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="">
                        <div className="gps">Maintenance</div>
                        <div className="ptb-15">
                          <div className="line-container"></div>
                        </div>
                        <div className="">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="job-ticket5">
                                <div className="  gap-2">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="">
                                      <div className="asset-unit">Oil Leak</div>
                                    </div>

                                    <div className=" ">
                                      <div className="pending">4 Pending</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="row">
                            <div className="col-md-12">
                              <div className="job-ticket6">
                                <div className="  gap-2">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="">
                                      <div className="asset-unit">
                                        Other Equipment
                                      </div>
                                    </div>

                                    <div className=" ">
                                      <div className="overdue">2 Pending</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="">
                        <div className="gps">Inspection History</div>
                        <div className="ptb-15"></div>
                        <div className="line-container"></div>
                      </div>

                      <div className="row">
                        <div className="job-ticket2">
                          <div className="">
                            <div className="row align-items-center">
                              <div className="col-md-4">
                                <span className="heading ">Type</span>
                              </div>
                              <div className="col-md-4 text-center">
                                <span className="heading">Unit No</span>
                              </div>
                              <div className="col-md-4 "></div>
                            </div>
                          </div>
                        </div>

                        <Link to="/assets/report" className="job-ticket7">
                          <div className="  gap-2 px-2">
                            <div className="row align-items-center">
                              <div className="col-md-4 pt-1">
                                <span className="dotpink me-2"></span>
                                <span className="dotyellow me-2"></span>
                                <span className="dot me-2"></span>
                                <span className="dot me-2"></span>
                                <span className="dot me-2"></span>
                                <span className="dot"></span>
                              </div>

                              <div className="col-md-4 text-center">
                                <span className="asset-unit">01-21-2025</span>
                              </div>
                              <div className="col-md-4 ">
                                <div className="report text-end">
                                  View Report
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="job-ticket7">
                          <div className="  gap-2 px-2">
                            <div className="row align-items-center">
                              <div className="col-md-4 pt-1">
                                <span className="dotpink me-2"></span>
                                <span className="dotyellow me-2"></span>
                                <span className="dot me-2"></span>
                                <span className="dot me-2"></span>
                                <span className="dot me-2"></span>
                                <span className="dot me-2"></span>
                              </div>

                              <div className="col-md-4 text-center">
                                <span className="asset-unit">01-21-2025</span>
                              </div>
                              <div className="col-md-4 ">
                                <div className="report text-end">
                                  View Report
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="job-ticket7">
                          <div className="  gap-2 px-2">
                            <div className="row align-items-center">
                              <div className="col-md-4 pt-1">
                                <span className="dotgreen me-2"></span>
                                <span className="dotgreen me-2"></span>
                                <span className="dotgreen me-2"></span>
                                <span className="dotgreen me-2"></span>
                                <span className="dotgreen me-2"></span>
                                <span className="dotgreen"></span>
                              </div>

                              <div className="col-md-4 text-center">
                                <span className="asset-unit">01-21-2025</span>
                              </div>
                              <div className="col-md-4 ">
                                <div className="report text-end">
                                  View Report
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="job-ticket7">
                          <div className="  gap-2 px-2">
                            <div className="row align-items-center">
                              <div className="col-md-4 pt-1">
                                <span className="dotgreen me-2"></span>
                                <span className="dotgreen me-2"></span>
                                <span className="dotgreen me-2"></span>
                                <span className="dotgreen me-2"></span>
                                <span className="dotgreen me-2"></span>
                                <span className="dotgreen "></span>
                              </div>

                              <div className="col-md-4 text-center">
                                <span className="asset-unit">01-21-2025</span>
                              </div>
                              <div className="col-md-4 ">
                                <div className="report text-end">
                                  View Report
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetDetail;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <!-- menu  --> */}
      <div className="container-fluid g-0">
        <div className="row">
          <div className="col-lg-12 p-0 mx-3">
            <div className="header_iner d-flex justify-content-between align-items-center">
              <div className="sidebar_icon d-lg-none">
                <i className="ti-menu"></i>
              </div>
              <div className="line_icon d-none d-lg-block">
                <span className="dash position-relative">
                  {" "}
                  <img
                    className="position-absolute pt-2"
                    src="/assets/img/home/Vector.png"
                  />{" "}
                  <span className="ps-6 pt-3">Dashboard </span>
                </span>
              </div>
              <div className="header_right d-flex justify-content-between align-items-center">
                <div className="header_notification_warp d-flex align-items-center">
                  {/* <!-- <li>
                                <a className="CHATBOX_open nav-link-notify" href="#"> <img src="/assets/img/icon/msg.svg" alt="" />   </a>
                            </li> --> */}
                  <li>
                    <div className="d-flex gap-4">
                      <img src="/images/language-icon.svg" alt="" />
                      <img src="/images/moon-icon.svg" alt="" />
                      <img src="/images/bell-icon.svg" alt="" />
                    </div>
                    {/* <a
                      className="bell_notification_clicker nav-link-notify"
                      href="#"
                    >
                      {" "}
                    </a> */}
                    {/* <!-- Menu_NOtification_Wrap  --> */}
                    <div className="Menu_NOtification_Wrap">
                      <div className="notification_Header">
                        <h4>Notifications</h4>
                      </div>
                      <div className="Notification_body">
                        {/* <!-- single_notify  --> */}
                        <div className="single_notify d-flex align-items-center">
                          <div className="notify_thumb">
                            <a href="#">
                              <img src="/assets/img/staf/2.png" alt="" />
                            </a>
                          </div>
                          <div className="notify_content">
                            <a href="#">
                              <h5>Cool Marketing </h5>
                            </a>
                            <p>Lorem ipsum dolor sit amet</p>
                          </div>
                        </div>
                        {/* <!-- single_notify  --> */}
                        <div className="single_notify d-flex align-items-center">
                          <div className="notify_thumb">
                            <a href="#">
                              <img src="/assets/img/staf/4.png" alt="" />
                            </a>
                          </div>
                          <div className="notify_content">
                            <a href="#">
                              <h5>Awesome packages</h5>
                            </a>
                            <p>Lorem ipsum dolor sit amet</p>
                          </div>
                        </div>
                        {/* <!-- single_notify  --> */}
                        <div className="single_notify d-flex align-items-center">
                          <div className="notify_thumb">
                            <a href="#">
                              <img src="/assets/img/staf/3.png" alt="" />
                            </a>
                          </div>
                          <div className="notify_content">
                            <a href="#">
                              <h5>what a packages</h5>
                            </a>
                            <p>Lorem ipsum dolor sit amet</p>
                          </div>
                        </div>
                        {/* <!-- single_notify  --> */}
                        <div className="single_notify d-flex align-items-center">
                          <div className="notify_thumb">
                            <a href="#">
                              <img src="/assets/img/staf/2.png" alt="" />
                            </a>
                          </div>
                          <div className="notify_content">
                            <a href="#">
                              <h5>Cool Marketing </h5>
                            </a>
                            <p>Lorem ipsum dolor sit amet</p>
                          </div>
                        </div>
                        {/* <!-- single_notify  --> */}
                        <div className="single_notify d-flex align-items-center">
                          <div className="notify_thumb">
                            <a href="#">
                              <img src="/assets/img/staf/4.png" alt="" />
                            </a>
                          </div>
                          <div className="notify_content">
                            <a href="#">
                              <h5>Awesome packages</h5>
                            </a>
                            <p>Lorem ipsum dolor sit amet</p>
                          </div>
                        </div>
                        {/* <!-- single_notify  --> */}
                        <div className="single_notify d-flex align-items-center">
                          <div className="notify_thumb">
                            <a href="#">
                              <img src="/assets/img/staf/3.png" alt="" />
                            </a>
                          </div>
                          <div className="notify_content">
                            <a href="#">
                              <h5>what a packages</h5>
                            </a>
                            <p>Lorem ipsum dolor sit amet</p>
                          </div>
                        </div>
                      </div>
                      <div className="nofity_footer">
                        <div className="submit_button text-center pt_20">
                          <a href="#" className="btn_1 green">
                            See More
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!--/ Menu_NOtification_Wrap  --> */}
                  </li>
                </div>
                <div className="profile_info d-flex align-items-center">
                  <div className="profile_thumb mr_20">
                    <img src="/assets/img/home/user.png" alt="" />
                  </div>
                  <div className="author_name">
                    <h4 className="f_s_15 f_w_500 mb-0">Jiue Anderson</h4>
                    {/* <!-- <p className="f_s_12 f_w_400">Manager</p> --> */}
                  </div>
                  <div className="profile_info_iner">
                    <div className="profile_author_name">
                      <p>Manager</p>
                      <h5>Jiue Anderson</h5>
                    </div>
                    <div className="profile_info_details">
                      <Link to="/profile" className="text-decoration-none">
                        My Profile{" "}
                      </Link>
                      <a href="#" className="text-decoration-none">
                        Settings
                      </a>
                      <a href="#" className="text-decoration-none">
                        Log Out{" "}
                      </a>
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

export default Header;

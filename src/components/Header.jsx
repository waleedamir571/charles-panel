import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);
  const location = useLocation();
  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(e.target)
    ) {
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    if (showNotifications) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotifications]);
  return (
    <>
      {/* <!-- menu  --> */}
      <div className="container-fluid g-0">
        <div className="row">
          <div className="col-lg-12 w-100">
            <div className="header_iner d-flex justify-content-between align-items-center rounded-4">
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
                      <img src="/images/language-icon.svg" alt="" className="cursor-pointer" />
                      <img src="/images/moon-icon.svg" alt="" className="cursor-pointer" />
                      <img
                        src="/images/bell-icon.svg"
                        alt=""
                        onClick={toggleNotifications}
                        className="cursor-pointer"
                      />
                    </div>
                    {/* <a
                      className="bell_notification_clicker nav-link-notify"
                      href="#"
                    >
                      {" "}
                    </a> */}
                    {/* <!-- Menu_NOtification_Wrap  --> */}
                    <div
                      className={`Menu_NOtification_Wrap ${
                        showNotifications ? "active" : ""
                      }`}
                    >
                      <div className="notification_Header">
                        <h4>Notifications</h4>
                      </div>
                      <div className="Notification_body overflow">
                        {/* <!-- single_notify  --> */}
                        <div className="single_notify d-flex align-items-center justify-content-center">
                          <div className="notify_thumb mb-2">
                            <Link to="/" className="text-decoration-none">
                              <img
                                src="/assets/img/home/noti-user.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="notify_content">
                            <Link to="/" className="text-decoration-none">
                              <h5>
                                Landstar System{" "}
                                <span className="fs-light">
                                  is interested in your projects
                                </span>{" "}
                              </h5>
                            </Link>

                            <p>8 mins ago</p>
                          </div>
                        </div>
                        {/* <!-- single_notify  --> */}
                        <div className="single_notify d-flex align-items-center">
                          <div className="notify_thumb mb-2">
                            <Link to="/" className="text-decoration-none">
                              <img
                                src="/assets/img/home/noti-user.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="notify_content">
                            <Link to="/" className="text-decoration-none">
                              <h5>
                                Landstar System{" "}
                                <span className="fs-light">
                                  is interested in your projects
                                </span>{" "}
                              </h5>
                            </Link>

                            <p>8 mins ago</p>
                          </div>
                        </div>
                        {/* <!-- single_notify  --> */}
                        <div className="single_notify d-flex align-items-center">
                          <div className="notify_thumb mb-2">
                            <Link to="/" className="text-decoration-none">
                              <img
                                src="/assets/img/home/noti-user.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="notify_content">
                            <Link to="/" className="text-decoration-none">
                              <h5>
                                Landstar System{" "}
                                <span className="fs-light">
                                  is interested in your projects
                                </span>{" "}
                              </h5>
                            </Link>

                            <p>8 mins ago</p>
                          </div>
                        </div>
                        <div className="single_notify d-flex align-items-center">
                          <div className="notify_thumb mb-2">
                            <Link to="/" className="text-decoration-none">
                              <img
                                src="/assets/img/home/noti-user.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="notify_content">
                            <Link to="/" className="text-decoration-none">
                              <h5>
                                Landstar System{" "}
                                <span className="fs-light">
                                  is interested in your projects
                                </span>{" "}
                              </h5>
                            </Link>

                            <p>8 mins ago</p>
                          </div>
                        </div>
                        <div className="single_notify d-flex align-items-center">
                          <div className="notify_thumb mb-2">
                            <Link to="/" className="text-decoration-none">
                              <img
                                src="/assets/img/home/noti-user.png"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="notify_content">
                            <Link to="/" className="text-decoration-none">
                              <h5>
                                Landstar System{" "}
                                <span className="fs-light">
                                  is interested in your projects
                                </span>{" "}
                              </h5>
                            </Link>

                            <p>8 mins ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--/ Menu_NOtification_Wrap  --> */}
                  </li>
                </div>
                <div className="profile_info d-flex align-items-center cursor-pointer">
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
                      <Link
                        to="/profile"
                        className={`text-decoration-none ${
                          location.pathname === "profile"
                            ? "profile-active"
                            : ""
                        }`}
                      >
                        My Profile{" "}
                      </Link>
                      <a href="#" className="text-decoration-none">
                        Settings
                      </a>
                      <Link to="/login" className="text-decoration-none">
                        Log Out{" "}
                      </Link>
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

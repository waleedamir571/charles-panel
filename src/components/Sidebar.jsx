import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import MetisMenu from "metismenujs";

const Sidebar = () => {
  const [isSidebarMini, setIsSidebarMini] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(true); // To track if Dashboard is open
  const [activeTab, setActiveTab] = useState(null);
  const dropdownRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const metisMenu = new MetisMenu("#sidebar_menu");

    const miniSidebarToggle = document.querySelector(".open_miniSide");
    const handleSidebarToggle = () => {
      document.querySelector(".sidebar").classList.toggle("mini_sidebar");
      document
        .querySelector(".main_content")
        .classList.toggle("full_main_content");
      document.querySelector(".footer_part").classList.toggle("full_footer");
    };

    if (miniSidebarToggle) {
      miniSidebarToggle.addEventListener("click", handleSidebarToggle);
    }

    return () => {
      miniSidebarToggle?.removeEventListener("click", handleSidebarToggle);
      metisMenu.dispose();
    };
  }, []);

  // Determine if the current link is active
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveTab(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [activeTab]);

  useEffect(() => {
    // Make sure Dashboard remains open if the current location is inside the dashboard section
    if (
      location.pathname.includes("/network") ||
      location.pathname.includes("/jobs") ||
      location.pathname.includes("/ticket") ||
      location.pathname.includes("/assets") ||
      location.pathname.includes("/schedule") ||
      location.pathname.includes("/billing") ||
      location.pathname.includes("/manage")
    ) {
      setIsDashboardOpen(true);
    }
  }, [location]);

  return (
    <nav className="sidebar dark_sidebar">
      <div className="logo d-flex justify-content-between">
        <Link className="large_logo" to="/">
          <img src="/assets/img/home/logo.png" alt="Logo" />
        </Link>
        <div
          className="sidebar_close_icon d-lg-none"
          onClick={() => setIsSidebarMini(!isSidebarMini)}
        >
          <i className="ti-close"></i>
        </div>
      </div>

      <ul id="sidebar_menu">
        <li
          className={
            location.pathname.includes("/network") ||
            location.pathname.includes("/jobs") ||
            location.pathname.includes("/ticket")
              ? "mm-active"
              : ""
          }
        >
          <a
            className="has-arrow text-decoration-none"
            href="#"
            aria-expanded="false"
          >
            <div className="nav_icon_small">
              <img src="/assets/img/menu-icon/1.svg" alt="" />
            </div>
            <div className="nav_title fs-5-5 mt-1">
              <span>Dashboard</span>
            </div>
          </a>
          <ul>
            <li>
              <Link
                to="/network"
                className={`${isActive("/network") ? "active" : ""} fs-5-5`}
              >
                <img src="/assets/img/home/network.png" alt="" /> Network
              </Link>
            </li>
            <li>
              <Link to="/jobs" className={isActive("/jobs") ? "active" : ""}>
                <img src="/assets/img/home/job.png" alt="" /> Job
              </Link>
            </li>
            <li>
              <Link
                to="/ticket"
                className={`${isActive("/ticket") ? "active" : ""} fs-5-5`}
              >
                <img src="/assets/img/home/ticket.png" alt="" /> Ticket
              </Link>
            </li>
            <li>
              <Link
                to="/assets"
                className={`${isActive("/assets") ? "active" : ""} fs-5-5`}
              >
                <img src="/assets/img/home/assets.png" alt="" /> Assets
              </Link>
            </li>
            <li>
              <Link
                to="/schedule"
                className={`${isActive("/schedule") ? "active" : ""} fs-5-5`}
              >
                <img src="/assets/img/home/schedule.png" alt="" /> Schedule
              </Link>
            </li>
            <li>
              <Link
                to="/billing"
                className={`${isActive("/billing") ? "active" : ""} fs-5-5`}
              >
                <img src="/assets/img/home/billing.png" alt="" /> Billing
              </Link>
            </li>
            <li>
              <Link
                to="/manage"
                className={`${isActive("/manage") ? "active" : ""} fs-5-5`}
              >
                <img src="/assets/img/home/manage.png" alt="" /> Manage Co.
              </Link>
            </li>
          </ul>
        </li>
        <div className="menu-container mt-4 mx-auto">
          <div className="top-tabs">
            <div
              className={`tab-item ${
                activeTab === "driverTab" ? "active" : ""
              }`}
              onClick={() =>
                setActiveTab(activeTab === "driverTab" ? null : "driverTab")
              }
            >
              <img
                src={
                  activeTab === "driverTab"
                    ? "/assets/img/home/driver-nav-white.png"
                    : "/assets/img/home/drivernav.png"
                }
                alt="Driver Icon"
              />
              <div>Driver</div>
            </div>
            <div
              className={`tab-item ${
                activeTab === "calendarTab" ? "active" : ""
              }`}
              onClick={() =>
                setActiveTab(activeTab === "calendarTab" ? null : "calendarTab")
              }
            >
              <img
                src={
                  activeTab === "calendarTab"
                    ? "/assets/img/home/calendernava-white.png"
                    : "/assets/img/home/calendernav.png"
                }
                alt="Calendar Icon"
              />
              <div>Calendar</div>
            </div>
          </div>

          {/** Driver Dropdown */}
          <div
            ref={dropdownRef}
            className="dropdown-menu-items"
            style={{
              display: activeTab === "driverTab" ? "block" : "none",
              zIndex: "9999",
            }}
          >
            <a href="#" className="menu-link">
              <img src="/assets/img/home/inspect.png" alt="" /> Inspect
            </a>
            <a href="#" className="menu-link">
              <img src="/assets/img/home/tickets.png" alt="" /> Tickets
            </a>
            <a href="#" className="menu-link">
              <img src="/assets/img/home/docs.png" alt="" /> Docs
            </a>
            <a href="#" className="menu-link">
              <img src="/assets/img/home/alarms.png" alt="" /> Alarms
            </a>
          </div>

          {/** Calendar Dropdown */}
          <div
            className="dropdown-menu-items"
            style={{ display: activeTab === "calendarTab" ? "block" : "none" }}
          >
            <a href="#" className="menu-link">
              <img src="/assets/img/home/schedule.png" alt="" /> Schedule
            </a>
            <a href="#" className="menu-link">
              <img src="/assets/img/home/events.png" alt="" /> Events
            </a>
            <a href="#" className="menu-link">
              <img src="/assets/img/home/meetings.png" alt="" /> Meetings
            </a>
          </div>
        </div>
      </ul>
      <div className="btn-fixed z-2">
        <Link to={"/"} className="btn mt-4 btn-info2 pt-3 fs-5">
          Back to Site &nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
          >
            <path
              d="M1.52295 1.68262L9.03418 9.19385L1.52295 16.7051"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;

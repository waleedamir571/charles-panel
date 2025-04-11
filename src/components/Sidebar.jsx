import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MetisMenu from "metismenujs";

const Sidebar = () => {
  const [isSidebarMini, setIsSidebarMini] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(true); // Track dashboard open state
  const [activeTab, setActiveTab] = useState(null);
  const location = useLocation();

  // Initialize MetisMenu only once
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

  // Update active state based on URL
  const isActive = (basePath) => location.pathname.startsWith(basePath);

  // Track if we are inside a dashboard-related route
  useEffect(() => {
    const dashboardPaths = [
      "/network",
      "/jobs",
      "/ticket",
      "/assets",
      "/schedule",
      "/billing",
      "/manage",
    ];
    const isDashboardPath = dashboardPaths.some((path) =>
      location.pathname.startsWith(path)
    );

    // Ensure the dashboard remains open unless manually toggled
    if (isDashboardPath && !isSidebarMini) {
      setIsDashboardOpen(true);
    }
  }, [location, isSidebarMini]); // Ensure that the dashboard status is updated only when needed

  useEffect(() => {
    // If the current URL is within driver-related paths, open the Driver tab
    if (location.pathname.includes("/driver/")) {
      setActiveTab("driverTab");
    }

    // If the current URL is within calendar-related paths, open the Calendar tab
    if (
      location.pathname.includes("/calendar") ||
      location.pathname.includes("/events") ||
      location.pathname.includes("/meetings")
    ) {
      setActiveTab("calendarTab");
    }
  }, [location]);

  const getLinkClass = (path) => {
    if (location.pathname.startsWith(path)) {
      return "menu-link menu-link-active";
    }
    return "menu-link";
  };

  const toggleTab = (tab) => {
    // Toggle between opening and closing the tab
    setActiveTab(activeTab === tab ? null : tab);
  };

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
            location.pathname.includes("/ticket") ||
            location.pathname.includes("/assets")
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
            <div className="nav_title mt-1">
              <span>Dashboard</span>
            </div>
          </a>
          <ul>
            <li>
              <Link
                to="/network"
                className={`${
                  isActive("/network") ? "active" : ""
                } text-decoration-none`}
              >
                <img src="/assets/img/home/network.png" alt="" /> Network
              </Link>
            </li>
            <li>
              <Link
                to="/jobs"
                className={`${
                  isActive("/jobs") ? "active" : ""
                } text-decoration-none`}
              >
                <img src="/assets/img/home/job.png" alt="" /> Job
              </Link>
            </li>
            <li>
              <Link
                to="/ticket"
                className={`${
                  isActive("/ticket") ? "active" : ""
                } text-decoration-none`}
              >
                <img src="/assets/img/home/ticket.png" alt="" /> Ticket
              </Link>
            </li>
            <li>
              <Link
                to="/assets"
                className={`${
                  isActive("/assets") ? "active" : ""
                } text-decoration-none`}
              >
                <img src="/assets/img/home/assets.png" alt="" /> Assets
              </Link>
            </li>
            <li>
              <Link
                to="/schedule"
                className={`${
                  isActive("/schedule") ? "active" : ""
                } text-decoration-none`}
              >
                <img src="/assets/img/home/schedule.png" alt="" /> Schedule
              </Link>
            </li>
            <li>
              <Link
                to="/billing"
                className={`${
                  isActive("/billing") ? "active" : ""
                } text-decoration-none`}
              >
                <img src="/assets/img/home/billing.png" alt="" /> Billing
              </Link>
            </li>
            <li>
              <Link
                to="/manage"
                className={`${
                  isActive("/manage") ? "active" : ""
                } text-decoration-none`}
              >
                <img src="/assets/img/home/manage.png" alt="" /> Manage Co.
              </Link>
            </li>
          </ul>
        </li>

        {/* Driver and Calendar Tabs */}
        <div className="menu-container mt-4 mx-auto">
          <div className="top-tabs">
            <div
              className={`tab-item ${
                activeTab === "driverTab" ? "active" : ""
              }`}
              onClick={() => toggleTab("driverTab")}
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
              onClick={() => toggleTab("calendarTab")}
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
            className="dropdown-menu-items p-0 pt-2"
            style={{
              display: activeTab === "driverTab" ? "block" : "none",
              zIndex: "9999",
            }}
          >
            <Link
              to="/driver/inspect"
              className={getLinkClass("/driver/inspect")}
            >
              <img src="/assets/img/home/inspect.png" alt="" /> Inspect
            </Link>
            <Link
              to="/driver/job-tickets"
              className={getLinkClass("/driver/job-tickets")}
            >
              <img src="/assets/img/home/tickets.png" alt="" /> Tickets
            </Link>
            <Link
              to="/driver/documents"
              className={getLinkClass("/driver/documents")}
            >
              <img src="/assets/img/home/docs.png" alt="" /> Docs
            </Link>
            <Link
              to="/driver/reminder"
              className={`${getLinkClass("/driver/reminder")} ${getLinkClass(
                "/driver/set-reminder"
              )}`}
            >
              <img src="/assets/img/home/alarms.png" alt="" /> Alarms
            </Link>
          </div>

          {/** Calendar Dropdown */}
          <div
            className="dropdown-menu-items p-0 pt-2"
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

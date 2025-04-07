import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

// Sample data
const jobData = {
  pending: [
    {
      company: "Knotty Logistic LLC",
      dateRange: ["2025-04-07", "2025-04-15"],
      color: "success",
      status: "accepted", // 👈 NEW
    },
    {
      company: "James Logistic",
      dateRange: ["2025-04-07", "2025-04-10"],
      color: "success",
      status: "created", // 👈 NEW
    },
    {
      company: "Knotty Logistic LLC",
      dateRange: ["2025-04-08", "2025-04-15"],
      color: "warning",
      status: "accepted",
    },
    {
      company: "James Logistic",
      dateRange: ["2025-04-05", "2025-04-10"],
      color: "danger",
      status: "created",
    },
  ],
  current: [],
  complete: [],
  denied: [],
  public: [],
};

// Utility functions using JS Date
const isToday = (dateStr) => {
  const today = new Date();
  const date = new Date(dateStr);
  return (
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear()
  );
};

const isThisWeek = (dateStr) => {
  const now = new Date();
  const date = new Date(dateStr);

  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay()); // Sunday

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); // Saturday

  return date >= startOfWeek && date <= endOfWeek;
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });
};

function JobList({ tab }) {
  const jobs = jobData[tab] || [];
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredJobs = jobs.filter((job) =>
    statusFilter === "all" ? true : job.status === statusFilter
  );

  const todayJobs = filteredJobs.filter((job) => isToday(job.dateRange[0]));
  const weekJobs = filteredJobs.filter((job) => isThisWeek(job.dateRange[0]));

  const renderJobCard = (job, idx) => (
    <div
      key={idx}
      className="d-flex justify-content-between align-items-center flex-wrap p-3 mb-2 rounded text-black job-hover cursor-pointer gap-2"
      style={{ backgroundColor: "#E8F2FC" }}
    >
      <div className="d-flex align-items-center justify-content-center">
        <div
          className="me-3 bg-white rounded-circle"
          style={{ width: 35, height: 35 }}
        ></div>
        <h3 className="fs-5 pt-2">{job.company}</h3>
      </div>
      <div className="d-flex align-items-center justify-content-end text-muted job-date">
        <FaCalendarAlt className={`me-2 text-${job.color}`} />
        {formatDate(job.dateRange[0])} - {formatDate(job.dateRange[1])}
      </div>
      <button className="btn btn-lg job-preview">PREVIEW</button>
    </div>
  );

  return (
    <div className="p-4 bg-white rounded shadow-sm ">
      <div className="box_right d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-3">
        <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3 w-100">
          {/* Search box */}
          <div className="position-relative">
            <input
              type="text"
              className="form-control"
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
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>

          {/* Grid icon */}
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

        {/* Create button */}
        <div className="add_button ms-2">
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#addcategory"
            className="btn_1 btn btn-primary"
          >
            + Create Invite
          </a>
        </div>
      </div>

      <hr className="text-gray fs-2" />
      <div className="d-flex justify-content-between flex-wrap align-items-center mb-3">
        <h5 className="text-capitalize text-black fs-3">{tab} Jobs</h5>
        <div className="d-flex gap-3">
          <button
            className={`btn btn-md border-none btn-hover ${
              statusFilter === "accepted" ? "btn-gray" : "btn-outline-secondary"
            }`}
            onClick={() => setStatusFilter("accepted")}
          >
            Accepted
          </button>
          <button
            className={`btn btn-md border-none btn-hover ${
              statusFilter === "created" ? "btn-gray" : "btn-outline-secondary"
            }`}
            onClick={() => setStatusFilter("created")}
          >
            Created
          </button>
          <button
            className={`btn btn-md border-none btn-hover ${
              statusFilter === "all" ? "btn-gray" : "btn-outline-secondary"
            }`}
            onClick={() => setStatusFilter("all")}
          >
            All
          </button>
        </div>
      </div>

      {todayJobs.length > 0 && (
        <>
          <h6 className="mb-2 text-muted">Today</h6>
          {todayJobs.map((job, i) => renderJobCard(job, `today-${i}`))}
        </>
      )}

      {weekJobs.length > 0 && (
        <>
          <hr />
          <h6 className="mb-2 text-muted">This Week</h6>
          {weekJobs.map((job, i) => renderJobCard(job, `week-${i}`))}
        </>
      )}

      {todayJobs.length === 0 && weekJobs.length === 0 && (
        <p className="text-muted">No jobs this week.</p>
      )}
    </div>
  );
}

export default JobList;

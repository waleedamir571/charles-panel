import React, { useState, useEffect, useRef } from "react";
import DriversAndCompaniesModal from "./DriversAndCompaniesModal";
import NetworkModal from "./NetworkModal";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const CurrentJobModal = ({ job, onClose }) => {
  const [activeTab, setActiveTab] = useState("summary"); // Track which tab is active
  const [isBottomModalOpen, setIsBottomModalOpen] = useState(false);
  const [showNetworkModal, setShowNetworkModal] = useState(false);
  const modalRef = useRef(null);
  const bottomModalRef = useRef(null);
  const details = job;

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const handleInviteClick = () => {
    setShowNetworkModal(true); // Show the Network Modal
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        bottomModalRef.current &&
        !bottomModalRef.current.contains(e.target)
      ) {
        setIsBottomModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isBottomModalOpen]);

  useEffect(() => {
    // Disable scrolling inside the modal content when the bottom modal is open
    if (isBottomModalOpen) {
      modalRef.current.style.overflow = "hidden"; // Disable scrolling
    } else {
      modalRef.current.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup when component unmounts or modal is closed
  }, [isBottomModalOpen]);

  return (
    <div className={`job-modal-overlay ${showNetworkModal ? "fade-out" : ""}`}>
      {showNetworkModal ? (
        <NetworkModal onClose={() => setShowNetworkModal(false)} />
      ) : (
        <div className="job-modal-content text-black" ref={modalRef}>
          <div className="d-flex justify-content-between">
            <h5 className="fw-medium mb-3 text-black fs-3 px-4">
              Specific Job
            </h5>
          </div>

          <div className="sticky-top px-4">
            <div className="tabs-container cursor-pointer rounded-4">
              <button
                className={`btn tab-btn ${
                  activeTab === "summary" ? "bg-purple" : ""
                } border-none text-white fs-5 rounded-4`}
                onClick={() => toggleTab("summary")}
              >
                Job Summary
              </button>
              <button
                className={`btn tab-btn ${
                  activeTab === "status" ? "bg-purple" : ""
                } border-none text-white fs-5 rounded-4`}
                onClick={() => toggleTab("status")}
              >
                Job Status
              </button>
            </div>
          </div>

          {activeTab === "summary" ? (
            <>
              <div className="mt-4 text-black project-summary px-4">
                <h6 className="fw-bold mb-4 fs-4">Project Summary</h6>

                <div className="row mb-3 fs-5">
                  <div className="col">
                    <div className="label-title mb-2">Project Name</div>
                    <div className="text-muted">{details.project}</div>
                  </div>
                  <div className="col">
                    <div className="label-title mb-2">
                      No. of Trucks Required
                    </div>
                    <div className="text-muted">{details.trucksRequired}</div>
                  </div>
                </div>

                <div className="date-range-box-2 p-3 px-4 mb-4 rounded ">
                  <div className="d-flex justify-content-between align-items-center fs-5">
                    <div className="text-start">
                      <div className="label-title mb-2">Start Date</div>
                      <div className="text-muted">
                        {formatDate(details.startDate)}
                      </div>
                    </div>
                    <div className="text-primary fw-bold fs-4">--------</div>
                    <div className="text-start">
                      <div className="label-title mb-2">End Date</div>
                      <div className="text-muted">
                        {formatDate(details.endDate)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mb-3 fs-5">
                  <div className="col">
                    <div className="label-title">Bill To</div>
                    <div className="text-muted">{details.billTo}</div>
                  </div>
                  <div className="col">
                    <div className="label-title">Hauled For</div>
                    <div className="text-muted">{details.hauledFor}</div>
                  </div>
                </div>

                <div className="row mb-3 fs-5">
                  <div className="col">
                    <div className="label-title">Material Type</div>
                    <div className="text-muted">{details.billTo}</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-black project-summary px-4">
                <h6 className="fw-bold mb-4 fs-4">Project Summary</h6>

                <div className="row mb-3 fs-5">
                  <div className="col">
                    <div className="label-title mb-2">Location Name</div>
                    <div className="text-muted">{details.project}</div>
                  </div>
                </div>

                <div className="row mb-3 fs-5">
                  <div className="col">
                    <div className="label-title mb-2">Directions</div>
                    <div className="text-muted">{details.project}</div>
                  </div>
                </div>

                <div className="row mb-3 fs-5">
                  <div className="col">
                    <div className="label-title">Latitude</div>
                    <div className="text-muted">{details.billTo}</div>
                  </div>
                  <div className="col">
                    <div className="label-title">Longitude</div>
                    <div className="text-muted">{details.hauledFor}</div>
                  </div>
                </div>

                <div className="row mb-3 fs-5">
                  <div className="col">
                    <div className="label-title">CB Channel</div>
                    <div className="text-muted">{details.billTo}</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-black project-summary px-4">
                <h6 className="fw-bold mb-4 fs-4">Drop Information</h6>

                <div className="row mb-3 fs-5">
                  <div className="col">
                    <div className="label-title mb-2">Supervisor Name</div>
                    <div className="text-muted">{details.project}</div>
                  </div>
                  <div className="col">
                    <div className="label-title mb-2">Supervisor Email</div>
                    <div className="text-muted">{details.project}</div>
                  </div>
                </div>

                <div className="row mb-3 fs-5">
                  <div className="col">
                    <div className="label-title">Location Name</div>
                    <div className="text-muted">{details.billTo}</div>
                  </div>
                </div>

                <div className="row mb-3 fs-5">
                  <div className="col">
                    <div className="label-title">Directions</div>
                    <div className="text-muted">{details.billTo}</div>
                  </div>
                </div>

                <div className="row mb-3 fs-5">
                  <div className="col">
                    <div className="label-title mb-2">Choose a Job Type</div>
                    <div className="text-muted">{details.project}</div>
                  </div>
                  <div className="col">
                    <div className="label-title mb-2">
                      Estimated Round Trip Time
                    </div>
                    <div className="text-muted">{details.project}</div>
                  </div>
                </div>
              </div>

              <div
                className="position-sticky mx-4"
                style={{
                  bottom: 70,
                  zIndex: 100,
                  backgroundColor: "transparent",
                }}
              >
                <div
                  className="location-box p-3 rounded d-flex justify-content-between align-items-center"
                  style={{ backgroundColor: "#4E5456" }}
                >
                  <div>
                    <div className="fw-bold text-white fs-5">Location:</div>
                    <div className="text-white fs-5">{details.location}</div>
                  </div>
                  <img src="/images/icons/map.svg" alt="map" width={70} />
                </div>
              </div>

              <div
                className="position-sticky"
                style={{
                  bottom: 0,
                  zIndex: 100,
                  backgroundColor: "transparent",
                }}
              >
                <div className="d-flex justify-content-between align-items-center w-100 px-4 pb-2">
                  <button
                    className="btn btn-lg bg-purple p-2 rounded-3"
                    onClick={() => setIsBottomModalOpen(!isBottomModalOpen)}
                  >
                    <img
                      src="/images/icons/invitation.svg"
                      alt="Invitation"
                      width={35}
                    />
                  </button>

                  <button
                    className="btn btn-lg bg-purple text-white mx-2 flex-grow-1"
                    style={{ padding: "0.67rem 0" }}
                    onClick={handleInviteClick} // Trigger the Network Modal
                  >
                    Invite
                  </button>

                  <button className="btn btn-lg bg-purple p-2 rounded-3">
                    <img
                      src="/images/icons/calendar.svg"
                      alt="Calendar"
                      width={35}
                    />
                  </button>
                </div>
                {isBottomModalOpen && (
                  <div
                    className={`second-modal ${
                      isBottomModalOpen ? "open" : ""
                    }`}
                    ref={bottomModalRef}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: "white",
                      borderRadius: "10px 10px 0 0",
                      zIndex: 110,
                      overflowY: "auto",
                      padding: "0", // Ensure no padding inside second modal
                      margin: "0", // Ensure no margin
                    }}
                  >
                    <DriversAndCompaniesModal />{" "}
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="p-4">
              <div className="my-4 p-3 bg-d-blue rounded-3 text-white">
                <h6 className="fw-semibold fs-3">Route</h6>
                <div>
                  <img
                    src="/images/map.svg"
                    alt="Route Map"
                    className="img-fluid rounded-3"
                  />
                </div>
              </div>
              <div>
                <h6 className="fw-bold fs-3">Progress</h6>
                <div
                  className="mb-3 p-3 rounded-3"
                  style={{ border: "2px solid #244761" }}
                >
                  <div className="label-title">Steel Bars</div>
                  <div className="text-gray fs-6 fw-semibold fs-3">1,700T</div>
                  <div className="fs-6 mb-2" style={{ color: "#1F75C6" }}>
                    50%
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar rounded-pill"
                      role="progressbar"
                      style={{
                        width: "50%", // Dynamically change this value based on job progress
                        backgroundColor: "#234964", // Set the progress bar color to #1F75C6
                      }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div>
                  <h1 className="fw-bold mb-1 fs-3">Driver Update</h1>

                  <p className="text-black mb-2 fs-6">
                    Total trucks needed: 24
                  </p>

                  <div
                    className="progress rounded-pill mb-4"
                    style={{ height: "48px", backgroundColor: "#e9ecef" }}
                  >
                    <div
                      className="progress-bar rounded-pill d-flex align-items-center ps-3 text-start justify-content-center"
                      role="progressbar"
                      style={{
                        width: `${75}%`,
                        backgroundColor: "#234964",
                        transition: "width 1s ease-in-out",
                        paddingLeft: "2rem",
                      }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div className="d-flex gap-3 align-items-center justify-content-center text-white fs-6">
                        <span>Active</span>
                        <span>|</span>
                        <span>Trucks</span>
                        <span>|</span>
                        <span>Today</span>
                        <span>|</span>
                        <span>
                          {20}/{23}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple text-white rounded mb-3 p-3 mx-auto text-center">
                  <h6 className="fw-bold fs-4">On-boarded Companies</h6>
                </div>

                <div className="bg-purple text-white rounded mb-4 p-3 mx-auto text-center">
                  <h6 className="fw-bold fs-4">Invites</h6>
                </div>

                <div
                  className={"card p-4 rounded-lg"}
                  style={{ backgroundColor: "#E8F2FC" }}
                >
                  <div className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center fs-6">
                      <span className="text-gray-500">Trucks on site</span>
                      <span className="ms-2"></span>
                    </div>
                    <span className="fw-medium text-gray-500">07</span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center fs-6">
                      <span className="text-gray-500">Loaded Trucks</span>
                      <span className="ms-2"></span>
                    </div>
                    <span className="fw-medium text-gray-500">13</span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center fs-6">
                      <span className="text-gray-500">Load Delivered</span>
                      <span className="ms-2"></span>
                    </div>
                    <span className="fw-medium text-gray-500">05</span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center fs-6">
                      <span className="color-blue">Active Drivers</span>
                      <span className="ms-2"></span>
                    </div>
                    <span className="fw-medium color-blue">18</span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center fs-6">
                      <span className="text-red">Non Active</span>
                      <span className="ms-2"></span>
                    </div>
                    <span className="fw-medium text-red">02</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CurrentJobModal;

import React, { useEffect, useRef } from "react";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const ReviewJobModal = ({ job, onClose }) => {
  const modalRef = useRef(null);

  const details = job; // The job prop will contain all details passed from the parent

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  return (
    <div className="job-modal-overlay">
      <div
        className="job-modal-content text-black d-flex flex-column p-3"
        ref={modalRef}
      >
        <div className="job-modal-scrollable">
          <h5 className="fw-medium mb-3 text-black fs-3">Specific Job</h5>
          <hr style={{ color: "#c6c4c4" }} />

          {/* Project Summary */}
          <div className="mt-4 text-black project-summary">
            <h6 className="fw-bold mb-4 fs-4">Project Summary</h6>

            {/* Project Name and Truck Info */}
            <div className="row mb-3 fs-5">
              <div className="col">
                <div className="label-title mb-2">Project Name</div>
                <div className="text-muted">{details.projectName || "N/A"}</div>
              </div>
              <div className="col">
                <div className="label-title mb-2">No. of Trucks Required</div>
                <div className="text-muted">{details.truckCount || "N/A"}</div>
              </div>
            </div>

            {/* Start and End Date */}
            <div className="date-range-box-2 p-3 px-4 mb-4 rounded ">
              <div className="d-flex justify-content-between align-items-center fs-5">
                <div className="text-start">
                  <div className="label-title mb-2">Start Date</div>
                  <div className="text-muted">
                    {formatDate(details.startDate) || "N/A"}
                  </div>
                </div>
                <div className="text-primary fw-bold fs-4">--------</div>
                <div className="text-start">
                  <div className="label-title mb-2">End Date</div>
                  <div className="text-muted">
                    {formatDate(details.endDate) || "N/A"}
                  </div>
                </div>
              </div>
            </div>

            {/* Bill To and Hauled For */}
            <div className="row mb-3 fs-5">
              <div className="col">
                <div className="label-title">Bill To</div>
                <div className="text-muted">{details.billTo || "N/A"}</div>
              </div>
              <div className="col">
                <div className="label-title">Hauled For</div>
                <div className="text-muted">{details.hauledFor || "N/A"}</div>
              </div>
            </div>

            {/* Material Type */}
            <div className="row mb-3 fs-5">
              <div className="col">
                <div className="label-title">Material Type</div>
                <div className="text-muted">
                  {details.materialType || "N/A"}
                </div>
              </div>
            </div>
          </div>

          {/* PIT Information */}
          <div className="mt-4 text-black project-summary">
            <h6 className="fw-bold mb-4 fs-4">PIT Information</h6>
            {/* Location Name, Directions, Latitude, Longitude */}
            <div className="row mb-3 fs-5">
              <div className="col">
                <div className="label-title mb-2">Location Name</div>
                <div className="text-muted">
                  {details.locationName || "N/A"}
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="row mb-3 fs-5">
              <div className="col">
                <div className="label-title mb-2">Directions</div>
                <div className="text-muted">
                  {details.loadLocationDirections || "N/A"}
                </div>
              </div>
            </div>

            {/* Latitude and Longitude */}
            <div className="row mb-3 fs-5">
              <div className="col">
                <div className="label-title">Latitude</div>
                <div className="text-muted">{details.latitude || "N/A"}</div>
              </div>
              <div className="col">
                <div className="label-title">Longitude</div>
                <div className="text-muted">{details.longitude || "N/A"}</div>
              </div>
            </div>

            {/* CB Channel */}
            <div className="row mb-3 fs-5">
              <div className="col">
                <div className="label-title">CB Channel</div>
                <div className="text-muted">{details.cbChannel || "N/A"}</div>
              </div>
            </div>
          </div>

          {/* Drop Information */}
          <div className="mt-4 text-black project-summary">
            <h6 className="fw-bold mb-4 fs-4">Drop Information</h6>
            {/* Supervisor Name, Supervisor Email */}
            <div className="row mb-3 fs-5">
              <div className="col">
                <div className="label-title mb-2">Supervisor Name</div>
                <div className="text-muted">
                  {details.supervisorName || "N/A"}
                </div>
              </div>
              <div className="col">
                <div className="label-title mb-2">Supervisor Email</div>
                <div className="text-muted">
                  {details.supervisorEmail || "N/A"}
                </div>
              </div>
            </div>

            {/* Location and Directions */}
            <div className="row mb-3 fs-5">
              <div className="col">
                <div className="label-title">Location Name</div>
                <div className="text-muted">
                  {details.dropLocationName || "N/A"}
                </div>
              </div>
            </div>

            <div className="row mb-3 fs-5">
              <div className="col">
                <div className="label-title">Directions</div>
                <div className="text-muted">
                  {details.dropLocationDirections || "N/A"}
                </div>
              </div>
            </div>

            {/* Job Type and Round Trip */}
            <div className="row mb-3 fs-5">
              <div className="col">
                <div className="label-title mb-2">Choose a Job Type</div>
                <div className="text-muted">{details.jobType || "N/A"}</div>
              </div>
              <div className="col">
                <div className="label-title mb-2">
                  Estimated Round Trip Time
                </div>
                <div className="text-muted">
                  {details.roundTripTime || "N/A"}
                </div>
              </div>
            </div>
          </div>

          {/* Footer (Location and Map Icon) */}
          <div
            className="position-sticky"
            style={{
              bottom: 55,
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
                <div className="text-white fs-5">
                  {details.location || "6730 Fairdale Dr, San Antonio TX"}
                </div>
              </div>
              <img src="/images/icons/map.svg" alt="map" width={70} />
            </div>
          </div>

          {/* Buttons */}

          <div
            className="position-sticky"
            style={{
              bottom: 0,
              zIndex: 100,
              backgroundColor: "transparent",
            }}
          >
            <div className="d-flex justify-content-between">
              <button className="btn btn-lg bg-purple text-white mx-2 w-100">
                Create Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewJobModal;

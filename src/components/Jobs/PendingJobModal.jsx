import React, { useEffect, useState, useRef } from "react";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const PendingJobModal = ({ job, onClose }) => {
  const [jobStatus, setJobStatus] = useState(null);
  const modalRef = useRef(null);

  const details = job;

  useEffect(() => {
    if (jobStatus) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }

    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [jobStatus, onClose]);
  return (
    <div className="job-modal-overlay">
      {jobStatus ? (
        <div
          className="text-center text-black p-5 rounded-5"
          style={{ backgroundColor: "#E8F2FC", border: "1px solid #C0C2C2" }}
        >
          <img
            src={`/images/icons/job-${jobStatus}.svg`}
            alt={jobStatus}
            className="mb-3"
            style={{ width: 80 }}
          />
          <h4>Job {jobStatus.charAt(0).toUpperCase() + jobStatus.slice(1)}</h4>
        </div>
      ) : (
        <div
          className="job-modal-content text-black d-flex flex-column p-3"
          ref={modalRef}
        >
          <div className="job-modal-scrollable">
            <h5 className="fw-medium mb-3 text-black fs-3">Specific Job</h5>
            <hr style={{ color: "#c6c4c4" }} />
            <div className="job-contact-card d-flex align-items-center justify-content-between gap-3 rounded p-3 mb-4">
              <div className="d-flex align-items-center">
                <img
                  src="/images/dummy-user.svg"
                  alt="avatar"
                  className="rounded-circle me-3"
                  style={{ width: 70, height: 70, objectFit: "cover" }}
                />
                <div className="text-white">
                  <div className="fw-semibold fs-5 large">
                    {details.contact.name}
                  </div>
                  <div className="text-white fs-5 fw-normal">
                    {details.contact.phone}
                  </div>
                </div>
              </div>

              <div className="job-rate-pill d-flex flex-row justify-content-center align-items-center px-3 py-2 text-white rounded-3 gap-3">
                <div>
                  <div className="fw-semibold medium">Job Rate</div>
                  <div className="fs-4 fw-bold">
                    ${details.jobRate.toFixed(2)}
                  </div>
                </div>
                <img
                  src="/images/icons/location-to-location.svg"
                  alt="route icon"
                  width={40}
                />
              </div>
            </div>

            <div className="mt-4 text-black project-summary">
              <h6 className="fw-bold mb-4 fs-4">Project Summary</h6>

              <div className="row mb-3 fs-5">
                <div className="col">
                  <div className="label-title mb-2">Project Name</div>
                  <div className="text-muted">{details.project}</div>
                </div>
                <div className="col">
                  <div className="label-title mb-2">No. of Trucks Required</div>
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

            <div className="mt-4 text-black project-summary">
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

            <div className="mt-4 text-black project-summary">
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
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-lg btn-danger w-50 me-2"
                  onClick={() => setJobStatus("denied")}
                >
                  Deny Job
                </button>
                <button
                  className="btn btn-lg btn-success w-50"
                  onClick={() => setJobStatus("accepted")}
                >
                  Accept Job
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingJobModal;

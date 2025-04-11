import React, { useState } from "react";

const JobTicketCard = () => {
  const [viewTicket, setViewTicket] = useState(false);

  return (
    <div className="card2 p-4 mb-4 shadow-sm job-ticket-card">
      <div className="row align-items-center gy-3 d-flex justify-content-between">
        {/* Avatar + Name */}
        <div className={`col-12 ${viewTicket ? "col-md-5" : "col-md-4"}`}>
          <div className="d-flex align-items-center gap-3">
            <div
              className="rounded-circle overflow-hidden"
              style={{ width: "60px", height: "60px", flexShrink: 0 }}
            >
              <img
                src="/assets/img/home/doe.png"
                alt="Driver"
                className="img-fluid"
              />
            </div>
            <div>
              <h5 className="fw-medium mb-1 dash fs-4">Jhon Doe</h5>
              <p className="mb-0 payslip-text fs-6">
                Status : <span className="active fs-6">Active</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right section */}
        {!viewTicket ? (
          <div className="col-12 col-md-8">
            <div className="d-flex flex-wrap justify-content-md-end justify-content-start gap-4">
              <div className="text-center">
                <img src="/assets/img/home/time.png" alt="time" className="mb-1" />
                <h6 className="fw-bold mb-0">47H</h6>
              </div>
              <div className="text-center">
                <img src="/assets/img/home/truck.png" alt="truck" className="mb-1" />
                <h6 className="fw-bold mb-0">No.1234</h6>
              </div>
              <div className="text-center">
                <img src="/assets/img/home/load.png" alt="load" className="mb-1" />
                <h6 className="fw-bold mb-0">1,700T</h6>
              </div>
            </div>
          </div>
        ) : (
          <div className={`col-12 ${viewTicket ? "col-md-7" : "col-md-8"} text-md-end text-start`}>
            <button className="btn btn-primary">Contact Info</button>
          </div>
        )}
      </div>

      {/* Button */}
      {!viewTicket && (
        <button className="btn btn-dark1 w-100 mt-4" onClick={() => setViewTicket(true)}>
          View Job Ticket
        </button>
      )}

      {/* Detail row */}
      {viewTicket && (
        <div className="col-12 mt-3">
          <div className="d-flex flex-wrap justify-content-between gap-4">
            <div className="text-center flex-fill">
              <img src="/assets/img/home/time.png" alt="time" className="mb-2" />
              <h6 className="fw-bold mb-0">47H</h6>
            </div>
            <div className="text-center flex-fill">
              <img src="/assets/img/home/truck.png" alt="truck" className="mb-2" />
              <h6 className="fw-bold mb-0">No.1234</h6>
            </div>
            <div className="text-center flex-fill">
              <img src="/assets/img/home/load.png" alt="load" className="mb-2" />
              <h6 className="fw-bold mb-0">1,700T</h6>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobTicketCard;

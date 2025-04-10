import React from "react";

const Documents = () => {
  return (
    <>
      <div className="main_content_iner">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fw-bold fs-4 mb-0">My Documents</h1>
          <div className="d-flex gap-2">
            <div className="search-container">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search..."
                style={{ width: "256px" }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search search-icon"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <button className="filter-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-sliders"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center gap-2">
            <p className="job">Knotty Logistic</p>
          </div>
        </div>

        <div className="mt-3">
          <div className="row">
            <div className="col-md-2 text-center">
              <img src="/assets/img/home/pdf.png" alt="" />
              <br />
              <br />
              <p className="airport ">My license</p>
            </div>
            <div className="col-md-2 text-center">
              <img src="/assets/img/home/pdf.png" alt="" />
              <br />
              <br />
              <p className="airport ">Copy1273.jpeg</p>
            </div>
            <div className="col-md-2 text-center">
              <img src="/assets/img/home/pdf.png" alt="" />
              <br />
              <br />
              <p className="airport ">Sub Hauler Agreement</p>
            </div>
            <div className="col-md-2 text-center">
              <img src="/assets/img/home/pdf.png" alt="" />
              <br />
              <br />
              <p className="airport ">Copy6563.txt</p>
            </div>
            <div className="col-md-2 text-center">
              <img src="/assets/img/home/pdf.png" alt="" />
              <br />
              <br />
              <p className="airport ">My license</p>
            </div>
            <div className="col-md-2 text-center">
              <img src="/assets/img/home/pdf.png" alt="" />
              <br />
              <br />
              <p className="airport ">Copy6543.txt</p>
            </div>
            <div className="pb-30"></div>
            <div className="col-md-2 text-center">
              <img src="/assets/img/home/pdf.png" alt="" />
              <br />
              <br />
              <p className="airport ">James Logistics Contract (Signed)</p>
            </div>
            <div className="col-md-2 text-center">
              <img src="/assets/img/home/pdf.png" alt="" />
              <br />
              <br />
              <p className="airport ">Copy6543.jpeg</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documents;

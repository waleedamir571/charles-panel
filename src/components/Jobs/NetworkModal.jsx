import React, { useEffect, useRef, useState } from "react";

// Sample data for Network modal
const networkData = [
  { company: "Knotty Logistic LLC", status: "PREVIEW", selected: false },
  { company: "James Logistic", status: "PREVIEW", selected: false },
  { company: "North Star Logistic", status: "PREVIEW", selected: false },
  { company: "Dirt Logistic", status: "PREVIEW", selected: false },
  { company: "Hentley Logistic", status: "PREVIEW", selected: false },
];

const NetworkModal = ({ onClose }) => {
  const [networkItems, setNetworkItems] = useState(networkData); // State to track selected items
  const [activeTab, setActiveTab] = useState("public"); // Track which tab is active
  const modalRef = useRef(null);
  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  // Handle the checkbox toggle
  const toggleSelection = (index) => {
    const updatedItems = [...networkItems];
    updatedItems[index].selected = !updatedItems[index].selected; // Toggle the selection state
    setNetworkItems(updatedItems); // Update state
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

  return (
    <div className="network-modal-overlay">
      <div className="network-modal-content p-4" ref={modalRef}>
        <div className="d-flex justify-content-between">
          <h5 className="fw-medium text-black fs-3">Network</h5>
        </div>
        <hr style={{ color: "#c6c4c4" }} />

        <div className="sticky-top">
          <div className="tabs-container cursor-pointer rounded-4">
            <button
              className={`btn tab-btn ${
                activeTab === "public" ? "bg-purple" : ""
              } border-none text-white fs-5 rounded-4`}
              onClick={() => toggleTab("public")}
            >
              Public
            </button>
            <button
              className={`btn tab-btn ${
                activeTab === "private" ? "bg-purple" : ""
              } border-none text-white fs-5 rounded-4`}
              onClick={() => toggleTab("private")}
            >
              Private
            </button>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between gap-2 w-100 my-3">
          {/* Search box */}
          <div className="position-relative w-100">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              style={{ height: "50px" }}
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
          <div className="grid-icon p-2" style={{ height: "50px" }}>
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
          <div className="d-flex align-items-center justify-content-between w-100 my-3">
            {/* Rate and Current Rate Section */}
            <div
              className="d-flex align-items-center w-100 bg-dark text-light rounded-3 gap-2"
              style={{ height: "50px" }}
            >
              {/* Rate Button */}
              <button
                className="btn bg-d-blue text-light rounded-3"
                style={{ height: "50px", width: "80px" }}
              >
                <span className="text-success">
                  $ <span className="text-white">RATE</span>
                </span>
              </button>

              {/* Current Rate Text */}
              <div
                className="text-white d-flex flex-column align-items-center justify-content-start"
                style={{ fontSize: "15px" }}
              >
                <span>Current Rate :</span>
                <span className="text-success ms-2 fw-semibold">
                  $<span className="text-white">20/T</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {networkItems.length > 0 &&
          networkItems.map((data, idx) => (
            <div
              key={idx}
              className={`d-flex justify-content-between align-items-center flex-wrap p-3 mb-2 rounded text-black job-hover cursor-pointer gap-2 ${
                data.selected ? "bg-d-blue text-white" : "bg-light"
              }`}
              style={
                data.selected
                  ? { backgroundColor: "#244761", color: "white" }
                  : { backgroundColor: "#E8F2FC" }
              }
            >
              <div className="d-flex align-items-center justify-content-center">
                <div onClick={() => toggleSelection(idx)}></div>
                <div
                  className="circle-icon"
                  onClick={() => toggleSelection(idx)}
                >
                  {data.selected ? (
                    <img
                      src="/images/icons/blue-tick.svg"
                      alt="blue-tick"
                      className="me-3"
                    />
                  ) : (
                    <span
                      className="me-3 bg-white rounded-circle"
                      style={{ width: 40, height: 40 }}
                    ></span>
                  )}
                </div>
                <h3
                  className={`fs-5 pt-2 ${
                    data.selected ? "text-white" : "text-black"
                  }`}
                >
                  {data.company}
                </h3>
              </div>

              <button
                className={`btn btn-lg job-preview ${
                  data.selected ? "text-white" : "text-black"
                }`}
              >
                PREVIEW
              </button>
            </div>
          ))}

        <div
          className="position-sticky"
          style={{
            bottom: 0,
            zIndex: 100,
            backgroundColor: "transparent",
          }}
        >
          <div className="d-flex justify-content-between align-items-center w-100 px-4">
            <button
              className="btn btn-lg bg-purple text-white mx-2 flex-grow-1"
              style={{ padding: "0.67rem 0" }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkModal;

import React, { useState, useEffect, useRef } from "react";
import MyDocuments from "./Docs/MyDocuments";
import Inspection from "./Docs/Inspection";
import Logs from "./Docs/Logs";
import AllDocs from "./Docs/AllDocs";

const DriverDocs = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("myDocuments");

  const renderTabContent = () => {
    switch (activeTab) {
      case "myDocuments":
        return <MyDocuments />;
      case "inspection":
        return <Inspection />;
      case "logs":
        return <Logs />;
      case "all":
        return <AllDocs />;
      default:
        return <MyDocuments />;
    }
  };

  const [isOpen, setIsOpen] = useState(false); // state to track if dropdown is open
  const dropdownRef = useRef(null); // reference to the dropdown to detect outside clicks

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if user clicks outside of it
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  // Add event listener on mount and clean up on unmount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="main_content_iner">
        <div className="white_card card_height_100 mb_30 rounded-4">
          <div className="white_card_header">
            <div className="row align-items-center mb-4">
              <div className="col-md-3">
                <h1 className="fw-medium fs-3 mb-0">My Documents</h1>
              </div>

              {/* Tabs for switching */}
              <div className="col-md-4 offset-md-1">
                <ul className="d-content p-0">
                  <li>
                    <a
                      className={`menu-item ${
                        activeTab === "myDocuments" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("myDocuments")}
                      href="#"
                    >
                      <p className="invoice-date pb-10">My Documents</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className={`menu-item ${
                        activeTab === "inspection" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("inspection")}
                      href="#"
                    >
                      <p className="invoice-date pb-10">Inspection</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className={`menu-item ${
                        activeTab === "logs" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("logs")}
                      href="#"
                    >
                      <p className="invoice-date pb-10">Logs</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className={`menu-item ${
                        activeTab === "all" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("all")}
                      href="#"
                    >
                      <p className="invoice-date pb-10">All</p>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Other Header Content (Search, Add button) */}
              <div className="col-md-3 offset-md-1 d-flex gap-2">
                <div className="search-container">
                  <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search..."
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
                      fillRule="evenodd"
                      d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                    />
                  </svg>
                </button>

                {/* Dropdown for "Add" button */}
                <div className="dropdown" ref={dropdownRef}>
                  <button
                    className="btn_1 text-decoration-none"
                    onClick={toggleDropdown}
                  >
                    + Add
                  </button>

                  {/* Dropdown menu items */}
                  {isOpen && (
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <a className="dropdown-item" href="#">
                        <img src="/assets/img/home/camera.png" alt="" />{" "}
                        &nbsp;&nbsp; Capture
                      </a>
                      <a className="dropdown-item" href="#">
                        <img src="/assets/img/home/upload.png" alt="" />{" "}
                        &nbsp;&nbsp; Upload
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-3">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverDocs;

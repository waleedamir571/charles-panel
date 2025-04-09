import React, { useState } from "react";

// Sample data for drivers and companies
const driversData = [
  { company: "Knotty Logistic LLC", trucks: "12/20", offer: "$24/T" },
  { company: "James Logistic", trucks: "18/26", offer: "$56/T" },
  { company: "North Star Logistic", trucks: "20/30", offer: "$32/T" },
  { company: "Dirt Logistic", trucks: "22/26", offer: "$45/T" },
  { company: "Hentley Logistic", trucks: "18/30", offer: "$61/T" },
];

const companiesData = [
  { company: "Knotty Logistic LLC", trucks: "12/20", offer: "$24/T" },
  { company: "James Logistic", trucks: "18/26", offer: "$56/T" },
  { company: "North Star Logistic", trucks: "20/30", offer: "$32/T" },
  { company: "North Star Logistic", trucks: "20/30", offer: "$32/T" },
  { company: "North Star Logistic", trucks: "20/30", offer: "$32/T" },
  { company: "Dirt Logistic", trucks: "22/26", offer: "$45/T" },
  { company: "Hentley Logistic", trucks: "18/30", offer: "$61/T" },
];

const DriversAndCompaniesModal = () => {
  const [activeTab, setActiveTab] = useState("drivers");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="second-modal-content" style={{ backgroundColor: '#D4D7E3' }}>
      <div className="tabs-container2 rounded-pill">
        <button
          className={`btn tab-btn2 ${activeTab === "drivers" ? "active" : ""} text-d-blue border-none rounded-pill p-3 fw-semibold`}
          onClick={() => toggleTab("drivers")}
        >
          Drivers
        </button>
        <button
          className={`btn tab-btn2 ${activeTab === "companies" ? "active" : ""} text-d-blue border-none rounded-pill p-3 fw-semibold`}
          onClick={() => toggleTab("companies")}
        >
          Companies
        </button>
      </div>

      <div className="tab-content2">
        {activeTab === "drivers" ? (
          <div className="scrollable-content-wrapper">
            {/* Add headings for Drivers */}
            <div className="row text-center mb-2 mt-3" style={{ color: '#4E5456'}}>
              <div className="col">Company</div>
              <div className="col">No. of Trucks</div>
              <div className="col">Offer</div>
            </div>
            {driversData.map((driver, index) => (
              <div key={index} className="row driver-row rounded-3 text-center">
                <div className="col">{driver.company}</div>
                <div className="col">{driver.trucks}</div>
                <div className="col">{driver.offer}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="scrollable-content-wrapper">
            {/* Add headings for Companies */}
            <div className="row text-center mb-2 mt-3" style={{ color: '#4E5456'}}>
              <div className="col">Company</div>
              <div className="col">No. of Trucks</div>
              <div className="col">Offer</div>
            </div>
            {companiesData.map((company, index) => (
              <div key={index} className="row company-row rounded-3 text-center">
                <div className="col">{company.company}</div>
                <div className="col">{company.trucks}</div>
                <div className="col">{company.offer}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DriversAndCompaniesModal;

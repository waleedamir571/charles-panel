import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JobTabs from "../../components/Jobs/JobsTab";
import JobList from "../../components/Jobs/JobsList";
import { Link } from "react-router-dom";

const JobsPage = () => {
  const [activeTab, setActiveTab] = useState("pending");
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <div className="main_content_iner">
          <div className="white_card_body bg-white px-4 py-3 mb-3 rounded-4">
            <div className="d-flex align-items-center mb-2 fs-3">
              <Link
                to="/"
                className="text-dark fw-medium text-decoration-none "
              >
                Dashboard
              </Link>
              <img
                src="/images/bread-arrow.svg"
                alt="arrow"
                style={{ margin: "0 8px" }}
              />
              <span className="bread-text fw-medium">Job</span>
            </div>
          </div>
          <div className="bg-light mt-2">
            <div className="row">
              <div className="col-md-4">
                <JobTabs activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>
              <div className="col-md-8 ">
                <JobList tab={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default JobsPage;

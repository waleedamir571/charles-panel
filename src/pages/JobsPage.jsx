import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JobTabs from "../components/Jobs/JobsTab";
import JobList from "../components/Jobs/JobsList";

const JobsPage = () => {
  const [activeTab, setActiveTab] = useState("pending");
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <div className="container-fluid bg-light p-4">
          <div className="row">
            <div className="col-md-4">
              <JobTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="col-md-8 ">
              <JobList tab={activeTab} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default JobsPage;

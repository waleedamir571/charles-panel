import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JobInvite from "../../components/Jobs/JobInvite";

const JobInvitePage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <JobInvite />
      </section>
      <Footer />
    </>
  );
};

export default JobInvitePage;

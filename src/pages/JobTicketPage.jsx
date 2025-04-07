import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JobTickets from "../components/Jobs/JobTickets";

const JobTicketPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <JobTickets />
      </section>
      <Footer />
    </>
  );
};

export default JobTicketPage;

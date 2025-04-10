import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JobTickets from "../../components/Network/NetworkDetail/JobTickets";

const JobTicketsPage = () => {
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

export default JobTicketsPage;

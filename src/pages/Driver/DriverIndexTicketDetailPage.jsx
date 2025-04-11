import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DriverJobTicket from "../../components/Driver/DriverJobTicket";

const DriverIndexTicketDetailPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <DriverJobTicket />
      </section>
      <Footer />
    </>
  );
};

export default DriverIndexTicketDetailPage;

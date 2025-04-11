import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DriverTicketDetail from "../../components/Driver/DriverTicketDetail";

const DriverJobTicketDetailPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <DriverTicketDetail />
      </section>
      <Footer />
    </>
  );
};

export default DriverJobTicketDetailPage;

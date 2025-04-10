import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DriverTickets from "../../components/Driver/DriverTickets";

const DriverTicketsPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <DriverTickets />
      </section>
      <Footer />
    </>
  );
};

export default DriverTicketsPage;

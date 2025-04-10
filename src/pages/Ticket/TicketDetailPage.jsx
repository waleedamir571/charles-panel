import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TicketDetail from "../../components/Ticket/TicketDetail";

const TicketDetailPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <TicketDetail />
      </section>
      <Footer />
    </>
  );
};

export default TicketDetailPage;

import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TicketIndexDetail from "../../components/Ticket/TicketIndexDetail";

const TicketIndexDetailPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <TicketIndexDetail />
      </section>
      <Footer />
    </>
  );
};

export default TicketIndexDetailPage;

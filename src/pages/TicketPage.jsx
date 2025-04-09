import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Ticket from "../components/Ticket";
import Footer from "../components/Footer";

const TicketPage = () => {
  return (
    <>
      <>
        <Sidebar />
        <section className="main_content dashboard_part large_header_bg">
          <Header />
          <Ticket />
        </section>
        <Footer />
      </>
    </>
  );
};

export default TicketPage;

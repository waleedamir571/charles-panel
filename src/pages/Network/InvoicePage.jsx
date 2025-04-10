import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Invoice from "../../components/Network/NetworkDetail/Invoice";

const InvoicePage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <Invoice />
      </section>
      <Footer />
    </>
  );
};

export default InvoicePage;

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import NetworkDetail from "../../components/Network/NetworkDetail/NetworkDetail";

const NetworkDetailPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <NetworkDetail />
      </section>
      <Footer />
    </>
  );
};

export default NetworkDetailPage;

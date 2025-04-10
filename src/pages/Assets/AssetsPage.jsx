import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Assets from "../../components/Assets/Assets";

const AssetsPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <Assets />
      </section>
      <Footer />
    </>
  );
};

export default AssetsPage;

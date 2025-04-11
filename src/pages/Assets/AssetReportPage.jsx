import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AssetReport from "../../components/Assets/AssetReport";

const AssetReportPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <AssetReport />
      </section>
      <Footer />
    </>
  );
};

export default AssetReportPage;

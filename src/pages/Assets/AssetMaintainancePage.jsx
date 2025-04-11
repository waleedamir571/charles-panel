import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AssetMaintainance from "../../components/Assets/AssetMaintainance";

const AssetMaintainancePage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <AssetMaintainance />
      </section>
      <Footer />
    </>
  );
};

export default AssetMaintainancePage;

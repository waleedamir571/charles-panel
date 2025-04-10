import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AssetDetail from "../../components/Assets/AssetDetail";

const AssetDetailPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <AssetDetail />
      </section>
      <Footer />
    </>
  );
};

export default AssetDetailPage;

import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AssetDocs from "../../components/Assets/AssetDocs";

const AssetDocsPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <AssetDocs />
      </section>
      <Footer />
    </>
  );
};

export default AssetDocsPage;

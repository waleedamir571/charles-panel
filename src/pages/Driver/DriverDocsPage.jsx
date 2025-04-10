import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DriverDocs from "../../components/Driver/DriverDocs";

const DriverDocsPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <DriverDocs />
      </section>
      <Footer />
    </>
  );
};

export default DriverDocsPage;

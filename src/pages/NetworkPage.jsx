import React from "react";
import Header from "../components/Header";
import Network from "../components/Network";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const NetworkPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <Network />
      </section>
      <Footer />
    </>
  );
};

export default NetworkPage;

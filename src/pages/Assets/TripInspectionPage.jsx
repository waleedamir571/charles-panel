import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TripInspection from "../../components/Assets/TripInspection";

const TripInspectionPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <TripInspection />
      </section>
      <Footer />
    </>
  );
};

export default TripInspectionPage;

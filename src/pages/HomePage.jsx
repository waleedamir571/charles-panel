import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <Main />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;

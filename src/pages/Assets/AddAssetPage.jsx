import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AddAsset from "../../components/Assets/AddAsset";

const AddAssetPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <AddAsset />
      </section>
      <Footer />
    </>
  );
};

export default AddAssetPage;

import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

const ProfilePage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <Profile />
      </section>
      <Footer />
    </>
  );
};

export default ProfilePage;

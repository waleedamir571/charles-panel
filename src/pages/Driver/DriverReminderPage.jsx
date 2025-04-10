import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DriverReminder from "../../components/Driver/Reminder/DriverReminder";

const DriverReminderPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <DriverReminder />
      </section>
      <Footer />
    </>
  );
};

export default DriverReminderPage;

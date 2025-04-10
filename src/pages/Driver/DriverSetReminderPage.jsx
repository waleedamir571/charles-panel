import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import SetReminder from "../../components/Driver/Reminder/SetReminder";
import Footer from "../../components/Footer";

const DriverSetReminderPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <SetReminder />
      </section>
      <Footer />
    </>
  );
};

export default DriverSetReminderPage;

import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import NetworkPage from "../pages/NetworkPage";
import JobsPage from "../pages/JobsPage";
import JobTicketPage from "../pages/JobTicketPage";
import JobInvitePage from "../pages/JobInvitePage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/job-ticket" element={<JobTicketPage />} />
        <Route path="/job-invite" element={<JobInvitePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes> 
    </>
  );
};

export default AppRouter;

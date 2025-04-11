import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "../pages/Auth/SignUpPage";
import LoginPage from "../pages/Auth/LoginPage";
import HomePage from "../pages/HomePage";
import NetworkPage from "../pages/Network/NetworkPage";
import JobsPage from "../pages/Jobs/JobsPage";
import JobInvitePage from "../pages/Jobs/JobInvitePage";
import TicketPage from "../pages/Ticket/TicketPage";
import TicketDetailPage from "../pages/Ticket/TicketDetailPage";
import TicketIndexDetailPage from "../pages/Ticket/TicketIndexDetailPage";
import NetworkDetailPage from "../pages/Network/NetworkDetailPage";
import JobTicketsPage from "../pages/Network/JobTicketsPage";
import InvoicePage from "../pages/Network/InvoicePage";
import DocumentPage from "../pages/Network/DocumentPage";
import AssetsPage from "../pages/Assets/AssetsPage";
import AssetDetailPage from "../pages/Assets/AssetDetailPage";
import TripInspectionPage from "../pages/Assets/TripInspectionPage";
import DriverTicketsPage from "../pages/Driver/DriverTicketsPage";
import DriverDocsPage from "../pages/Driver/DriverDocsPage";
import DriverReminderPage from "../pages/Driver/DriverReminderPage";
import DriverSetReminderPage from "../pages/Driver/DriverSetReminderPage";
import AddAssetPage from "../pages/Assets/AddAssetPage";
import JobTicketDetailPage from "../pages/Network/JobTicketDetailPage";
import AssetMaintainancePage from "../pages/Assets/AssetMaintainancePage";
import AssetReportPage from "../pages/Assets/AssetReportPage";
import DriverInspectPage from "../pages/Driver/DriverInspectPage";
import ProfilePage from "../pages/ProfilePage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/network/details" element={<NetworkDetailPage />} />
        <Route
          path="/network/details/job-tickets"
          element={<JobTicketsPage />}
        />
        <Route
          path="/network/details/job-tickets/details"
          element={<JobTicketDetailPage />}
        />
        <Route path="/network/details/invoices" element={<InvoicePage />} />
        <Route path="/network/details/documents" element={<DocumentPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/invite" element={<JobInvitePage />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/ticket/ticket-detail" element={<TicketDetailPage />} />
        <Route
          path="/ticket/ticket-index"
          element={<TicketIndexDetailPage />}
        />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path="/assets/add" element={<AddAssetPage />} />
        <Route path="/assets/report" element={<AssetReportPage />} />
        <Route path="/assets/detail" element={<AssetDetailPage />} />
        <Route
          path="/assets/detail/maintainance"
          element={<AssetMaintainancePage />}
        />
        <Route
          path="/assets/detail/trip-inspection"
          element={<TripInspectionPage />}
        />
        <Route path="/driver/inspect" element={<DriverInspectPage />} />
        <Route path="/driver/job-tickets" element={<DriverTicketsPage />} />
        <Route path="/driver/documents" element={<DriverDocsPage />} />
        <Route path="/driver/reminder" element={<DriverReminderPage />} />
        <Route
          path="/driver/set-reminder"
          element={<DriverSetReminderPage />}
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;



import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";


import DashboardLayout from "./components/DashboardLayout";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";

import Card from "./components/Card";
import Table from "./components/Table";

const tableColumns = [
  { key: "finding", label: "Finding" },
  { key: "severity", label: "Severity" },
  { key: "resource", label: "Resource" },
  { key: "status", label: "Status" },
  { key: "timestamp", label: "Timestamp" },
];

const tableData = [
  { finding: "Unencrypted S3 Bucket", severity: "Critical", resource: "s3://patient-data", status: "Open", timestamp: "2026-02-05 09:12" },
  { finding: "Outdated Library", severity: "High", resource: "backend/api", status: "Open", timestamp: "2026-02-05 08:55" },
  { finding: "Weak Password", severity: "Medium", resource: "user:admin", status: "Resolved", timestamp: "2026-02-05 08:40" },
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={
        <DashboardLayout>
          <DashboardPage />
        </DashboardLayout>
      } />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

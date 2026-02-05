import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";

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

// Create a reusable HeaderNav component for a healthcare AI dashboard.
// It should contain a horizontal top navigation bar with dropdown menus.
// Menu items:
// Dashboard
// Patients (dropdown)
// AI Agents (dropdown)
// Clinical Decision (dropdown)
// Monitoring (dropdown)
// Compliance (dropdown)
// Administration (dropdown)
// This header must be independent from the sidebar navigation.
// Use a separate component file.

import React, { useState } from "react";

const HEADER_MENUS = [
  { label: "AI Med Agent" },
  { label: "Patients", dropdown: true, items: [
    "Patient List", "New Patient Intake", "Patient Timeline", "Risk Scores", "Care Plans", "Documents"
  ] },
  { label: "AI Agents", dropdown: true, items: [
    "Agent Registry", "Active Agents", "Create Agent", "Agent Workflows", "Agent Sandbox", "Agent Memory", "Agent Logs"
  ] },
  { label: "Clinical Decision", dropdown: true, items: [
    "Symptom Analyzer", "Differential Diagnosis", "Treatment Support", "Drug Interaction Check", "Clinical Guidelines", "Evidence Sources"
  ] },
  { label: "Monitoring", dropdown: true, items: [
    "Live Monitoring", "Patient Signals", "AI Alerts", "Escalations", "Task Queue", "Execution Timeline"
  ] },
  { label: "Compliance", dropdown: true, items: [
    "Audit Trail", "AI Explain ability", "Decision Rationale", "Data Lineage", "Policy Controls", "Consent Records"
  ] },
  { label: "Administration", dropdown: true, items: [
    "Users & Roles", "Access Control", "Integrations", "API Keys", "System Settings", "Billing"
  ] },
];

export default function HeaderNav({ activeDomain, onDomainChange, onSubpageSelect }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMenuClick = (label) => {
    if (HEADER_MENUS.find(m => m.label === label && m.dropdown)) {
      setOpenDropdown(openDropdown === label ? null : label);
    } else {
      setOpenDropdown(null);
      onDomainChange && onDomainChange(label);
    }
  };

  const handleSubpageClick = (domain, subpage) => {
    setOpenDropdown(null);
    onDomainChange && onDomainChange(domain);
    onSubpageSelect && onSubpageSelect(subpage);
  };

  return (
    <header className="w-full h-16 flex items-center px-4 bg-surface border-b border-border shadow-sm z-40">
      <div className="flex flex-1 items-center">
        <nav className="flex space-x-2 relative flex-1">
          {HEADER_MENUS.map((menu) => (
            <div key={menu.label} className="relative">
              <button
                className={`px-4 py-2 rounded font-semibold text-text transition-colors duration-150 focus:outline-none ${
                  activeDomain === menu.label ? "bg-background text-accent" : "hover:bg-background/80"
                }`}
                onClick={() => handleMenuClick(menu.label)}
                onMouseEnter={() => menu.dropdown && setOpenDropdown(menu.label)}
                onMouseLeave={() => menu.dropdown && setOpenDropdown(null)}
              >
                {menu.label}
                {menu.dropdown && (
                  <svg className="ml-2 w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                )}
              </button>
              {menu.dropdown && openDropdown === menu.label && (
                <div
                  className="absolute left-0 mt-2 w-56 bg-surface border border-border rounded shadow-lg z-50"
                  onMouseEnter={() => setOpenDropdown(menu.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {menu.items.map((item) => (
                    <button
                      key={item}
                      className="block w-full text-left px-4 py-2 text-text hover:bg-background/80"
                      onClick={() => handleSubpageClick(menu.label, item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        {/* Search box */}
        <div className="flex items-center ml-4">
          <input
            type="text"
            placeholder="Search..."
            className="rounded px-2 py-1 text-sm bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
            style={{ width: 140 }}
          />
        </div>
        {/* Profile icon */}
        <div className="ml-4 flex items-center">
          <button className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white text-lg focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75V19.5z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

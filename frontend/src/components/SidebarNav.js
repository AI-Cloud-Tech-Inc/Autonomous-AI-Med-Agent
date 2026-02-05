// Create a SidebarNav component separate from HeaderNav.
// This is a vertical left sidebar menu for AI Med Agent dashboard.
// Include collapsible dropdown sections.
// Sidebar items:
// Overview
// Active Cases
// Critical Alerts
// Today's Tasks
// System Health
// Usage Metrics
// Must support expand/collapse per section.
// Should not affect header menu behavior.

import React, { useState } from "react";

const SIDEBAR_SECTIONS = [
  {
    label: "Dashboard",
    icon: "📊",
    items: [
      "Overview",
      "Active Cases",
      "Critical Alerts",
      "Today's Tasks",
      "System Health",
      "Usage Metrics"
    ]
  },
  {
    label: "Patients",
    icon: "👥",
    items: [
      "Patient List",
      "New Intake",
      "Timeline",
      "Risk Scores",
      "Care Plans",
      "Documents"
    ]
  },
  {
    label: "AI Agents",
    icon: "🤖",
    items: [
      "Agent Registry",
      "Active Agents",
      "Create Agent",
      "Workflows",
      "Sandbox",
      "Memory Store",
      "Agent Logs"
    ]
  },
  {
    label: "Clinical Decision",
    icon: "🧠",
    items: [
      "Symptom Analyzer",
      "Diagnosis Support",
      "Treatment Support",
      "Drug Check",
      "Guidelines",
      "Evidence Sources"
    ]
  },
  {
    label: "Monitoring",
    icon: "📡",
    items: [
      "Live Monitor",
      "Signals",
      "Alerts",
      "Escalations",
      "Task Queue",
      "Timeline"
    ]
  },
  {
    label: "Compliance",
    icon: "🔐",
    items: [
      "Audit Trail",
      "AI Explainability",
      "Decision Rationale",
      "Data Lineage",
      "Consent Records",
      "Policies"
    ]
  },
  {
    label: "Administration",
    icon: "⚙️",
    items: [
      "Users & Roles",
      "Access Control",
      "Integrations",
      "API Keys",
      "Settings",
      "Billing"
    ]
  }
];

export default function SidebarNav({ activeSection = "Dashboard", activeItem, onItemSelect, collapsed }) {
  // By default, open Dashboard, and open all other sections if desired
  const defaultOpen = { Dashboard: true };
  SIDEBAR_SECTIONS.forEach(s => { if (s.items) defaultOpen[s.label] = false; });
  const [openSections, setOpenSections] = useState(defaultOpen);

  const handleSectionToggle = (label, hasDropdown) => {
    if (!hasDropdown) return;
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className={`h-screen bg-surface border-r border-border flex flex-col transition-all duration-200 ${collapsed ? 'w-20' : 'w-72'}`}>
      <nav className="flex-1 overflow-y-auto py-2">
        {SIDEBAR_SECTIONS.map((section) => (
          <div key={section.label}>
            <button
              className={`w-full flex items-center px-4 py-2 text-left rounded font-bold transition-colors duration-150 text-text hover:bg-background/80 focus:outline-none ${collapsed ? 'justify-center' : ''}`}
              onClick={() => handleSectionToggle(section.label, !!section.items)}
            >
              <span className="mr-2">{section.icon}</span>
              <span>{section.label}</span>
              {!collapsed && section.items && (
                <svg className={`w-4 h-4 ml-2 transition-transform ${openSections[section.label] ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
              )}
            </button>
            {section.items && openSections[section.label] && !collapsed && (
              <div className="ml-6 mt-1 space-y-1">
                {section.items.map((item) => (
                  <button
                    key={item}
                    className={`block w-full text-left text-text-secondary hover:text-accent px-2 py-1 rounded ${activeItem === item ? "bg-background/60 text-accent" : ""}`}
                    onClick={() => onItemSelect && onItemSelect(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}

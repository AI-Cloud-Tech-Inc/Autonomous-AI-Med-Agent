import React from "react";

// Header domain definitions with subpages
export const HOSPITAL_HEADER_DOMAINS = [
  {
    label: "Dashboard",
    subpages: [
      "Overview",
      "Active Cases",
      "Critical Alerts",
      "Today’s Tasks",
      "System Health",
      "Usage Metrics",
    ],
  },
  {
    label: "Patients",
    subpages: [
      "Patient List",
      "New Patient Intake",
      "Patient Timeline",
      "Risk Scores",
      "Care Plans",
      "Documents",
    ],
  },
  {
    label: "AI Agents",
    subpages: [
      "Agent Registry",
      "Active Agents",
      "Create Agent",
      "Agent Workflows",
      "Agent Sandbox",
      "Agent Memory",
      "Agent Logs",
    ],
  },
  {
    label: "Clinical Decision",
    subpages: [
      "Symptom Analyzer",
      "Differential Diagnosis",
      "Treatment Support",
      "Drug Interaction Check",
      "Clinical Guidelines",
      "Evidence Sources",
    ],
  },
  {
    label: "Monitoring",
    subpages: [
      "Live Monitoring",
      "Patient Signals",
      "AI Alerts",
      "Escalations",
      "Task Queue",
      "Execution Timeline",
    ],
  },
  {
    label: "Compliance",
    subpages: [
      "Audit Trail",
      "AI Explain ability",
      "Decision Rationale",
      "Data Lineage",
      "Policy Controls",
      "Consent Records",
    ],
  },
  {
    label: "Administration",
    subpages: [
      "Users & Roles",
      "Access Control",
      "Integrations",
      "API Keys",
      "System Settings",
      "Billing",
    ],
  },
];

export const PATIENT_HEADER_DOMAINS = [
  {
    label: "Home",
    subpages: [
      "Health Summary",
      "Latest Alerts",
      "Care Tasks",
      "Upcoming Visits",
    ],
  },
  {
    label: "My Health",
    subpages: [
      "Vitals",
      "Symptoms",
      "Conditions",
      "Medications",
      "Care Plan",
      "Devices",
    ],
  },
  {
    label: "AI Assistant",
    subpages: [
      "Symptom Check",
      "Ask AI",
      "Daily Check-In",
      "Recommendations",
      "Health Guidance",
    ],
  },
  {
    label: "Reports",
    subpages: [
      "Lab Results",
      "AI Assessments",
      "Visit Reports",
      "Downloads",
    ],
  },
  {
    label: "Messages",
    subpages: [
      "Care Team",
      "AI Messages",
      "Notifications",
      "Support",
    ],
  },
  {
    label: "Profile",
    subpages: [
      "Personal Info",
      "Insurance",
      "Privacy Settings",
      "Consent",
      "Security",
    ],
  },
];

// Header component with dropdowns for domains with >3 subpages
export default function Header({ domains, activeDomain, onDomainChange, activeSubpage, onSubpageChange }) {
  return (
    <header className="w-full h-16 flex items-center px-4 bg-white border-b border-blue-900 shadow-sm z-40">
      <nav className="flex space-x-2">
        {domains.map((domain) => (
          <button
            key={domain.label}
            className={`px-4 py-2 rounded font-semibold text-text transition-colors duration-150 focus:outline-none ${
              activeDomain === domain.label ? "bg-background text-accent" : "hover:bg-background/80"
            }`}
            onClick={() => onDomainChange(domain.label)}
          >
            {domain.label}
            {domain.subpages.length > 3 && (
              <svg className="ml-2 w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
            )}
          </button>
        ))}
      </nav>
    </header>
  );
}

// Sidebar menu definitions for each domain and role, with dropdown groups
export const HOSPITAL_SIDEBAR_GROUPS = [
  {
    label: "Dashboard",
    icon: "🏠",
    children: null,
  },
  {
    label: "Patients",
    icon: "👥",
    children: [
      "Patient List",
      "New Intake",
      "Timeline",
      "Risk Scores",
      "Care Plans",
      "Documents",
    ],
  },
  {
    label: "AI Agents",
    icon: "🤖",
    children: [
      "Agent Registry",
      "Active Agents",
      "Create Agent",
      "Workflows",
      "Sandbox",
      "Memory Store",
      "Agent Logs",
    ],
  },
  {
    label: "Clinical Decision",
    icon: "🧠",
    children: [
      "Symptom Analyzer",
      "Diagnosis Support",
      "Treatment Support",
      "Drug Check",
      "Guidelines",
      "Evidence Sources",
    ],
  },
  {
    label: "Monitoring",
    icon: "📡",
    children: [
      "Live Monitor",
      "Signals",
      "Alerts",
      "Escalations",
      "Task Queue",
      "Timeline",
    ],
  },
  {
    label: "Compliance",
    icon: "🔐",
    children: [
      "Audit Trail",
      "AI Explainability",
      "Decision Rationale",
      "Data Lineage",
      "Consent Records",
      "Policies",
    ],
  },
  {
    label: "Administration",
    icon: "⚙️",
    children: [
      "Users & Roles",
      "Access Control",
      "Integrations",
      "API Keys",
      "Settings",
      "Billing",
    ],
  },
];

export const PATIENT_SIDEBAR_GROUPS = [
  {
    label: "Home",
    icon: "🏠",
    children: null,
  },
  {
    label: "My Health",
    icon: "❤️",
    children: [
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
    icon: "🤖",
    children: [
      "Symptom Check",
      "Ask AI",
      "Daily Check-In",
      "Recommendations",
      "Guidance",
    ],
  },
  {
    label: "Reports",
    icon: "📄",
    children: [
      "Lab Results",
      "AI Reports",
      "Visit Reports",
      "Downloads",
    ],
  },
  {
    label: "Messages",
    icon: "💬",
    children: [
      "Care Team",
      "AI Messages",
      "Notifications",
      "Support",
    ],
  },
  {
    label: "Profile",
    icon: "👤",
    children: [
      "Personal Info",
      "Insurance",
      "Privacy",
      "Consent",
      "Security",
    ],
  },
];

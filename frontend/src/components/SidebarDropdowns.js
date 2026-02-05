import React, { useState } from "react";
import { HOSPITAL_HEADER_DOMAINS, PATIENT_HEADER_DOMAINS } from "./HeaderDropdowns";

export default function SidebarDropdowns({ role, activeDomain, activeSubpage, onSubpageChange, collapsed }) {
  const [open, setOpen] = useState(true);
  const domains = role === "hospital" ? HOSPITAL_HEADER_DOMAINS : PATIENT_HEADER_DOMAINS;
  const domain = domains.find((d) => d.label === activeDomain) || domains[0];
  if (!domain.subpages || domain.subpages.length === 0) return null;

  // Special rule: Dashboard is never a dropdown, just a list
  if (domain.label === "Dashboard" || domain.label === "Home") {
    return (
      <nav className="flex-1 overflow-y-auto py-2">
        {domain.subpages.map((sub) => (
          <button
            key={sub}
            className={`w-full flex items-center px-4 py-2 text-left rounded transition-colors duration-150 text-text hover:bg-background/80 focus:outline-none ${
              activeSubpage === sub ? "bg-background/60 text-accent" : ""
            } ${collapsed ? 'justify-center' : ''}`}
            onClick={() => onSubpageChange(sub)}
          >
            <span>{sub}</span>
          </button>
        ))}
      </nav>
    );
  }

  // For other domains: dropdown if >3 subpages, else simple buttons
  if (domain.subpages.length <= 3) {
    return (
      <nav className="flex-1 overflow-y-auto py-2">
        {domain.subpages.map((sub) => (
          <button
            key={sub}
            className={`w-full flex items-center px-4 py-2 text-left rounded transition-colors duration-150 text-text hover:bg-background/80 focus:outline-none ${
              activeSubpage === sub ? "bg-background/60 text-accent" : ""
            } ${collapsed ? 'justify-center' : ''}`}
            onClick={() => onSubpageChange(sub)}
          >
            <span>{sub}</span>
          </button>
        ))}
      </nav>
    );
  }

  // Dropdown group for >3 subpages (not for Dashboard/Home)
  return (
    <nav className="flex-1 overflow-y-auto py-2">
      <button
        className={`w-full flex items-center px-4 py-2 text-left rounded transition-colors duration-150 text-text font-bold hover:bg-background/80 focus:outline-none ${collapsed ? 'justify-center' : ''}`}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{domain.label}</span>
        {!collapsed && (
          <svg className={`w-4 h-4 ml-2 transition-transform ${open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
        )}
      </button>
      {open && !collapsed && (
        <div className="ml-6 mt-1 space-y-1">
          {domain.subpages.map((sub) => (
            <button
              key={sub}
              className={`block w-full text-left text-text-secondary hover:text-accent px-2 py-1 rounded ${activeSubpage === sub ? "bg-background/60 text-accent" : ""}`}
              onClick={() => onSubpageChange(sub)}
            >
              {sub}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

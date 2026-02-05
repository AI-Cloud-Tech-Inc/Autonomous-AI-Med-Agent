

import React, { useState } from "react";
import { HOSPITAL_SIDEBAR_GROUPS, PATIENT_SIDEBAR_GROUPS } from "./sidebarGroups";

function SidebarDropdown({ group, activeSection, onSectionClick, collapsed }) {
  const [open, setOpen] = useState(false);
  if (!group.children) {
    // Single item (e.g., Dashboard/Home)
    return (
      <button
        className={`w-full flex items-center px-4 py-2 text-left rounded transition-colors duration-150 text-white hover:bg-[#001f4d] focus:outline-none ${
          activeSection === group.label ? "bg-[#001f4d] text-blue-300" : ""
        } ${collapsed ? 'justify-center' : ''}`}
        onClick={() => onSectionClick(group.label)}
      >
        <span className="mr-3">{group.icon}</span>
        {!collapsed && <span>{group.label}</span>}
      </button>
    );
  }
  return (
    <div>
      <button
        className={`w-full flex items-center px-4 py-2 text-left rounded transition-colors duration-150 text-white hover:bg-[#001f4d] focus:outline-none ${collapsed ? 'justify-center' : ''}`}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="mr-3">{group.icon}</span>
        {!collapsed && <span className="flex-1">{group.label}</span>}
        {!collapsed && (
          <svg className={`w-4 h-4 ml-2 transition-transform ${open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
        )}
      </button>
      {open && !collapsed && (
        <div className="ml-6 mt-1 space-y-1">
          {group.children.map((child) => (
            <button
              key={child}
              className={`block w-full text-left text-blue-200 hover:text-white px-2 py-1 rounded ${activeSection === child ? "bg-[#001f4d] text-blue-300" : ""}`}
              onClick={() => onSectionClick(child)}
            >
              {child}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


export default function Sidebar({
  role = "hospital", // "hospital" or "patient"
  activeSection,
  onSectionClick,
  collapsed,
  onCollapseToggle,
}) {
  const sidebarGroups = role === "hospital" ? HOSPITAL_SIDEBAR_GROUPS : PATIENT_SIDEBAR_GROUPS;
  return (
    <aside className={`h-screen bg-surface border-r border-border flex flex-col transition-all duration-200 ${collapsed ? 'w-20' : 'w-72'}`}>
      <div className="h-16 flex items-center px-4 border-b border-border">
        <button onClick={onCollapseToggle} className="mr-2 text-accent focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5" /></svg>
        </button>
        <span className={`text-xl font-bold text-text transition-all duration-200 ${collapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}`}>AI-Med-Agent</span>
      </div>
      <nav className="flex-1 overflow-y-auto py-2">
        {sidebarGroups.map((group) => (
          <SidebarDropdown
            key={group.label}
            group={group}
            activeSection={activeSection}
            onSectionClick={onSectionClick}
            collapsed={collapsed}
          />
        ))}
      </nav>
    </aside>
  );
}

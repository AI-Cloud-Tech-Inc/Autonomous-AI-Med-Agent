// Create a DashboardLayout component that composes:
// HeaderNav at top
// SidebarNav on left
// Main content area on right
// Sidebar should be fixed width.
// Header should be fixed top.
// Content scrolls independently.
import React, { useState } from "react";
import HeaderNav from "./HeaderNav";
import SidebarNav from "./SidebarNav";

export default function DashboardLayout({ children }) {
  const [activeDomain, setActiveDomain] = useState("AI Med Agent");
  const [activeSidebarItem, setActiveSidebarItem] = useState(null);

  // Optionally, update sidebar items based on activeDomain
  // For now, SidebarNav always shows Dashboard items for demo

  return (
    <div className="min-h-screen flex flex-col bg-background text-text font-sans">
      <div className="fixed top-0 left-0 right-0 z-50">
        <HeaderNav
          activeDomain={activeDomain}
          onDomainChange={setActiveDomain}
          onSubpageSelect={setActiveSidebarItem}
        />
      </div>
      <div className="flex flex-1 pt-16">
        <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] z-40">
          <SidebarNav
              activeSection={activeDomain}
              activeItem={activeSidebarItem}
              onItemSelect={setActiveSidebarItem}
            />
        </div>
        <main className="flex-1 ml-72 pt-8 px-8 overflow-y-auto" style={{ minHeight: 'calc(100vh - 4rem)' }}>
          {children}
        </main>
      </div>
    </div>
  );
}

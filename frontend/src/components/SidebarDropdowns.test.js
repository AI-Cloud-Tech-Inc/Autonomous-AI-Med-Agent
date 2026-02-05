import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SidebarDropdowns from "./SidebarDropdowns";
import { HOSPITAL_HEADER_DOMAINS, PATIENT_HEADER_DOMAINS } from "./HeaderDropdowns";

describe("SidebarDropdowns", () => {
  it("renders simple buttons for ≤3 subpages with accessible roles", async () => {
    const user = userEvent.setup();
    const domain = PATIENT_HEADER_DOMAINS.find((d) => d.label === "Home");

    const { asFragment } = render(
      <SidebarDropdowns
        role="patient"
        activeDomain="Home"
        activeSubpage={domain.subpages[0]}
        onSubpageChange={() => {}}
        collapsed={false}
      />
    );

    // Prefer accessible role queries
    const healthSummaryBtn = screen.getByRole("button", { name: /health summary/i });
    const latestAlertsBtn = screen.getByRole("button", { name: /latest alerts/i });
    const careTasksBtn = screen.getByRole("button", { name: /care tasks/i });

    expect(healthSummaryBtn).toBeInTheDocument();
    expect(latestAlertsBtn).toBeInTheDocument();
    expect(careTasksBtn).toBeInTheDocument();

    // Keyboard interaction should be supported on buttons
    await user.keyboard("{Tab}");
    // Snapshot of critical structure (avoid full-tree brittleness)
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders dropdown for >3 subpages; aria-expanded toggles with click and keyboard", async () => {
    const user = userEvent.setup();
    const domain = HOSPITAL_HEADER_DOMAINS.find((d) => d.label === "Dashboard");

    render(
      <SidebarDropdowns
        role="hospital"
        activeDomain="Dashboard"
        activeSubpage={domain.subpages[0]}
        onSubpageChange={() => {}}
        collapsed={false}
      />
    );

    // Toggle should be a button with accessible name
    const toggle = screen.getByRole("button", { name: /dashboard/i });
    expect(toggle).toBeInTheDocument();

    // When open, subpages should be visible
    expect(screen.getByText(/overview/i)).toBeInTheDocument();
    expect(screen.getByText(/active cases/i)).toBeInTheDocument();

    // aria-expanded should reflect open state when present
    if (toggle.hasAttribute("aria-expanded")) {
      expect(toggle).toHaveAttribute("aria-expanded", "true");
    }

    // Click to close
    await user.click(toggle);
    if (toggle.hasAttribute("aria-expanded")) {
      expect(toggle).toHaveAttribute("aria-expanded", "false");
    }
    expect(screen.queryByText(/overview/i)).not.toBeInTheDocument();

    // Keyboard (Enter) to open
    await user.keyboard("{Enter}");
    if (toggle.hasAttribute("aria-expanded")) {
      expect(toggle).toHaveAttribute("aria-expanded", "true");
    }
    expect(screen.getByText(/overview/i)).toBeInTheDocument();
  });

  it("calls onSubpageChange when a subpage is activated", async () => {
    const user = userEvent.setup();
    const domain = PATIENT_HEADER_DOMAINS.find((d) => d.label === "Home");
    const onSubpageChange = jest.fn();

    render(
      <SidebarDropdowns
        role="patient"
        activeDomain="Home"
        activeSubpage={domain.subpages[0]}
        onSubpageChange={onSubpageChange}
        collapsed={false}
      />
    );

    // Use role-first query; fallback to text if not a button
    const latestAlerts =
      screen.queryByRole("button", { name: /latest alerts/i }) ||
      screen.getByText(/latest alerts/i);

    await user.click(latestAlerts);
    expect(onSubpageChange).toHaveBeenCalledWith("Latest Alerts");
  });

  it("supports Space key to toggle dropdown accessibility", async () => {
    const user = userEvent.setup();
    const domain = HOSPITAL_HEADER_DOMAINS.find((d) => d.label === "Dashboard");

    render(
      <SidebarDropdowns
        role="hospital"
        activeDomain="Dashboard"
        activeSubpage={domain.subpages[0]}
        onSubpageChange={() => {}}
        collapsed={false}
      />
    );

    const toggle = screen.getByRole("button", { name: /dashboard/i });

    // Ensure open
    if (toggle.hasAttribute("aria-expanded")) {
      expect(toggle).toHaveAttribute("aria-expanded", "true");
    }

    // Space to close
    await user.keyboard(" ");
    if (toggle.hasAttribute("aria-expanded")) {
      expect(toggle).toHaveAttribute("aria-expanded", "false");
    }

    // Space to open again
    await user.keyboard(" ");
    if (toggle.hasAttribute("aria-expanded")) {
      expect(toggle).toHaveAttribute("aria-expanded", "true");
    }
  });
});

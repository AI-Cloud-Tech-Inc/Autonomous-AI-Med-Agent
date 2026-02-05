
// Role-based domain lists
export const HOSPITAL_DOMAINS = [
  "Dashboard",
  "Patients",
  "AI Agents",
  "Clinical Decision",
  "Monitoring",
  "Compliance",
  "Administration",
];

export const PATIENT_DOMAINS = [
  "Home",
  "My Health",
  "AI Assistant",
  "Reports",
  "Messages",
  "Profile",
];

export default function Header({ domains, activeDomain, onDomainChange }) {
  return (
    <header className="w-full h-16 flex items-center px-4 bg-surface border-b border-border shadow-sm z-40">
      <nav className="flex space-x-2">
        {domains.map((domain) => (
          <button
            key={domain}
            className={`px-4 py-2 rounded font-semibold text-text transition-colors duration-150 focus:outline-none ${
              activeDomain === domain ? "bg-background text-accent" : "hover:bg-background/80"
            }`}
            onClick={() => onDomainChange(domain)}
          >
            {domain}
          </button>
        ))}
      </nav>
    </header>
  );
}

import React from "react";
import Header from "../components/HeaderDropdowns";
import { HOSPITAL_HEADER_DOMAINS } from "../components/HeaderDropdowns";
import Sidebar from "../components/Sidebar";
import SidebarDropdowns from "../components/SidebarDropdowns";

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans" style={{background: "linear-gradient(180deg, #0a2a6c 0%, #001f4d 100%)"}}>
      {/* Header Section */}
      <div className="w-full">
        <Header domains={HOSPITAL_HEADER_DOMAINS} activeDomain={HOSPITAL_HEADER_DOMAINS[0].label} onDomainChange={() => {}} />
      </div>
      <div className="flex">
        {/* Sidebar Section */}
        <div className="hidden md:block w-64 bg-[#0a1a2f] text-white min-h-screen border-r border-blue-900">
          <Sidebar />
          <SidebarDropdowns />
        </div>
        {/* Main Content */}
        <div className="flex-1 md:ml-64">
          {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 md:px-0 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-white drop-shadow-lg">
          Autonomous Agentic AI for Safe, Compliant Healthcare Delivery
        </h1>
        <p className="max-w-2xl text-xl md:text-2xl mb-10 text-blue-100">
          An AI-powered healthcare platform that autonomously analyzes medical data, supports symptom assessment, enables patient monitoring, and coordinates care — with secure, compliant, human-in-the-loop controls.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="bg-white text-[#0a2a6c] font-semibold px-8 py-3 rounded-lg shadow text-lg transition hover:bg-blue-100 border border-blue-200">Start Clinical Demo</button>
          <button className="bg-[#0a2a6c] text-white font-semibold px-8 py-3 rounded-lg shadow text-lg transition hover:bg-[#001f4d] border border-blue-900">Request Pilot Access</button>
        </div>
      </section>

          {/* Trust Strip / Compliance Banner */}
      <section className="bg-[#12203a] py-3 px-4 text-blue-200 text-center text-base font-medium tracking-wide border-y border-blue-900">
        Built for Healthcare Environments • Secure by Design • Human-in-the-Loop AI • Audit-Ready Architecture
      </section>

          {/* Problem Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-100">The Healthcare Gap</h2>
        <ul className="list-disc list-inside text-blue-200 mb-4 space-y-1">
          <li>Disconnected patient data sources</li>
          <li>Manual symptom triage and review</li>
          <li>Monitoring gaps between visits</li>
          <li>Heavy documentation burden</li>
          <li>Delayed care coordination</li>
          <li>Risk of oversight in high-volume workflows</li>
        </ul>
        <p className="text-blue-200">Clinicians need intelligent support — without sacrificing safety or compliance.</p>
      </section>

          {/* Solution Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-100">The Agentic AI Layer</h2>
        <p className="text-blue-200 mb-4">Our Autonomous Agentic AI Med Agent platform adds an intelligent clinical support layer that continuously analyzes, assists, and coordinates — while keeping medical professionals in control.</p>
        <p className="text-blue-200">The system augments decision-making, reduces manual workload, and improves patient oversight across the care lifecycle.</p>
      </section>

          {/* Core Capabilities */}
      <section className="py-16 px-4 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-blue-100 mb-2">Autonomous Medical Data Analysis</h3>
          <p className="text-blue-200">AI agents interpret clinical records, reports, and patient inputs to surface insights and risk indicators.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-100 mb-2">AI-Assisted Symptom Assessment</h3>
          <p className="text-blue-200">Structured symptom evaluation support with triage guidance and pattern recognition.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-100 mb-2">Continuous Patient Monitoring</h3>
          <p className="text-blue-200">Trend tracking and anomaly detection across patient metrics and reported signals.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-100 mb-2">Intelligent Care Coordination</h3>
          <p className="text-blue-200">Automated follow-ups, reminders, routing, and task orchestration across care teams.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-100 mb-2">Clinical Workflow Automation</h3>
          <p className="text-blue-200">Reduces repetitive administrative and coordination tasks.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-100 mb-2">Human-in-the-Loop Controls</h3>
          <p className="text-blue-200">Every recommendation is reviewable, explainable, and clinician-approved.</p>
        </div>
      </section>

          {/* How It Works */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-100">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">🔗</div>
            <h4 className="font-semibold text-blue-100 mb-1">Connect</h4>
            <p className="text-blue-200 text-sm">Securely connect patient data sources and clinical systems.</p>
          </div>
          <div>
            <div className="text-3xl mb-2"></div>
            <h4 className="font-semibold text-blue-100 mb-1">Analyze</h4>
            <p className="text-blue-200 text-sm">Agentic AI models continuously evaluate signals and patterns.</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🤝</div>
            <h4 className="font-semibold text-blue-100 mb-1">Assist</h4>
            <p className="text-blue-200 text-sm">The platform generates insights, alerts, and workflow actions.</p>
          </div>
          <div>
            <div className="text-3xl mb-2"></div>
            <h4 className="font-semibold text-blue-100 mb-1">Review & Act</h4>
            <p className="text-blue-200 text-sm">Clinicians validate outputs and make final decisions.</p>
          </div>
        </div>
      </section>

          {/* Doctor Experience */}
      <section className="py-16 px-4 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-blue-100 mb-2">Doctor Experience</h3>
          <ul className="list-disc list-inside text-blue-200 space-y-1">
            <li>Faster chart and case review</li>
            <li>AI-generated clinical summaries</li>
            <li>Decision support signals</li>
            <li>Reduced admin workload</li>
            <li>Transparent reasoning trails</li>
            <li>Alert prioritization</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-100 mb-2">Patient Experience</h3>
          <ul className="list-disc list-inside text-blue-200 space-y-1">
            <li>Continuous support signals</li>
            <li>Smart symptom intake</li>
            <li>Monitoring between visits</li>
            <li>Faster care response</li>
            <li>Better coordination</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-100 mb-2">Care Team & Operations Benefits</h3>
          <ul className="list-disc list-inside text-blue-200 space-y-1">
            <li>Automated workflow routing</li>
            <li>Reduced coordination delays</li>
            <li>Structured task tracking</li>
            <li>Cross-team visibility</li>
            <li>Scalable patient oversight</li>
          </ul>
        </div>
      </section>

          {/* Safety & Compliance Framework */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-100">Safety & Compliance Framework</h2>
        <ul className="list-disc list-inside text-blue-200 mb-4 space-y-1">
          <li>Secure data handling architecture</li>
          <li>Role-based access control</li>
          <li>Full audit trails</li>
          <li>Explainable AI outputs</li>
          <li>Human approval checkpoints</li>
          <li>Configurable clinical guardrails</li>
          <li>Compliance-ready deployment model</li>
        </ul>
      </section>

          {/* Use Cases */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-100">Use Cases</h2>
        <ul className="list-disc list-inside text-blue-200 mb-4 space-y-1">
          <li>Remote patient monitoring support</li>
          <li>Symptom triage assistance</li>
          <li>Chronic care coordination</li>
          <li>Post-discharge follow-up workflows</li>
          <li>Preventive care tracking</li>
          <li>Clinical operations support</li>
        </ul>
      </section>

          {/* Platform Integrations */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-100">Platform Integrations</h2>
        <ul className="list-disc list-inside text-blue-200 mb-4 space-y-1">
          <li>EHR systems</li>
          <li>Patient portals</li>
          <li>Monitoring devices</li>
          <li>Clinical data feeds</li>
          <li>Secure APIs</li>
          <li>Workflow systems</li>
        </ul>
      </section>

          {/* Differentiators */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-100">Differentiators</h2>
        <ul className="list-disc list-inside text-blue-200 mb-4 space-y-1">
          <li>True agentic AI workflow model</li>
          <li>Healthcare-first design</li>
          <li>Human-supervised autonomy</li>
          <li>Clinical transparency layer</li>
          <li>Workflow + intelligence combined</li>
          <li>Compliance-aligned architecture</li>
        </ul>
      </section>

          {/* Deployment Options */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-100">Deployment Options</h2>
        <ul className="list-disc list-inside text-blue-200 mb-4 space-y-1">
          <li>Clinical pilot programs</li>
          <li>Organization rollout</li>
          <li>Secure cloud deployment</li>
          <li>Private environment options</li>
          <li>Configurable governance controls</li>
        </ul>
      </section>

          {/* Metrics & Impact */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-100">Metrics & Impact</h2>
        <ul className="list-disc list-inside text-blue-200 mb-4 space-y-1">
          <li>Reduced manual review time</li>
          <li>Faster symptom triage cycles</li>
          <li>Improved follow-up completion</li>
          <li>Better care coordination speed</li>
          <li>Higher workflow efficiency</li>
        </ul>
      </section>

          {/* Testimonials / Validation Placeholder */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-100">Testimonials / Validation</h2>
        <p className="text-blue-200 italic">For early partners and pilot clinics<br/>“Section reserved for clinical pilot feedback and validation quotes.”</p>
      </section>

          {/* Pricing Preview Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-100">Pricing Preview</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-4">
          <div className="bg-[#12203a] rounded-lg p-6 flex-1 min-w-[220px]">
            <div className="font-bold text-lg text-blue-100 mb-2">Starter Clinical Pilot</div>
            <div className="text-blue-200">Limited scope deployment</div>
          </div>
          <div className="bg-[#12203a] rounded-lg p-6 flex-1 min-w-[220px]">
            <div className="font-bold text-lg text-blue-100 mb-2">Professional</div>
            <div className="text-blue-200">Multi-team clinical workflows</div>
          </div>
          <div className="bg-[#12203a] rounded-lg p-6 flex-1 min-w-[220px]">
            <div className="font-bold text-lg text-blue-100 mb-2">Enterprise Healthcare</div>
            <div className="text-blue-200">Full platform + governance controls</div>
          </div>
        </div>
        <div className="text-blue-200">Contact for healthcare pricing and pilot access.</div>
      </section>

          {/* Final CTA Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-100">Transform Healthcare Workflows with Autonomous Agentic AI</h2>
        <p className="text-blue-200 mb-6">Deploy compliant, human-supervised AI agents that enhance clinical care — not replace clinicians.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg text-lg transition">Request Demo</button>
          <button className="bg-white/10 hover:bg-white/20 text-blue-100 font-semibold px-8 py-3 rounded-lg border border-blue-400 shadow text-lg transition">Start Pilot Program</button>
        </div>
      </section>

          {/* Footer */}
          <footer className="bg-[#0a1a2f] border-t border-blue-900 py-8 px-4 text-blue-200 text-center mt-12">
            <div className="font-bold text-lg mb-2">Autonomous Agentic AI Med Agent Platform</div>
            <div className="mb-4">Secure • Compliant • Human-in-the-Loop</div>
            <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
              <button type="button" className="hover:underline bg-transparent border-0 cursor-pointer text-blue-200">Solutions</button>
              <button type="button" className="hover:underline bg-transparent border-0 cursor-pointer text-blue-200">Capabilities</button>
              <button type="button" className="hover:underline bg-transparent border-0 cursor-pointer text-blue-200">Compliance</button>
              <button type="button" className="hover:underline bg-transparent border-0 cursor-pointer text-blue-200">Integrations</button>
              <button type="button" className="hover:underline bg-transparent border-0 cursor-pointer text-blue-200">Healthcare Partners</button>
              <button type="button" className="hover:underline bg-transparent border-0 cursor-pointer text-blue-200">Pilot Programs</button>
              <button type="button" className="hover:underline bg-transparent border-0 cursor-pointer text-blue-200">Contact</button>
              <button type="button" className="hover:underline bg-transparent border-0 cursor-pointer text-blue-200">Security</button>
              <button type="button" className="hover:underline bg-transparent border-0 cursor-pointer text-blue-200">Privacy</button>
              <button type="button" className="hover:underline bg-transparent border-0 cursor-pointer text-blue-200">Terms</button>
              <button type="button" className="hover:underline bg-transparent border-0 cursor-pointer text-blue-200">Support</button>
            </div>
            <div className="text-xs">© Platform Name — Healthcare AI Systems</div>
          </footer>
        </div>
      </div>
    </div>
  );
}

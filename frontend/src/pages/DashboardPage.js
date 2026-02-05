import React from "react";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 tracking-tight">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-10">
        <div className="bg-surface rounded-lg p-6 shadow">
          <div className="text-3xl font-bold text-accent">3</div>
          <div className="text-text-secondary text-sm mt-1">Critical Findings</div>
        </div>
        <div className="bg-surface rounded-lg p-6 shadow">
          <div className="text-3xl font-bold text-accent">2</div>
          <div className="text-text-secondary text-sm mt-1">Compliance Alerts</div>
        </div>
        <div className="bg-surface rounded-lg p-6 shadow">
          <div className="text-3xl font-bold text-green-400">Operational</div>
          <div className="text-text-secondary text-sm mt-1">System Health</div>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-4 mt-8">Recent Security Findings</h2>
      <div className="bg-surface rounded-lg p-6 shadow">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Finding</th>
              <th>Severity</th>
              <th>Resource</th>
              <th>Status</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Unencrypted S3 Bucket</td>
              <td>Critical</td>
              <td>s3://patient-data</td>
              <td>Open</td>
              <td>2026-02-05 09:12</td>
            </tr>
            <tr>
              <td>Outdated Library</td>
              <td>High</td>
              <td>backend/api</td>
              <td>Open</td>
              <td>2026-02-05 08:55</td>
            </tr>
            <tr>
              <td>Weak Password</td>
              <td>Medium</td>
              <td>user:admin</td>
              <td>Resolved</td>
              <td>2026-02-05 08:40</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

import React from "react";

export default function Table({ columns, data }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-surface">
      <table className="min-w-full divide-y divide-border">
        <thead className="bg-background">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-background/80">
              {columns.map((col) => (
                <td key={col.key} className="px-6 py-4 whitespace-nowrap text-text">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

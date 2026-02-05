import React from "react";

export default function Card({ title, children, className = "" }) {
  return (
    <div className={`bg-surface border border-border rounded-lg shadow-sm p-6 ${className}`}>
      {title && <h2 className="text-lg font-semibold mb-2 text-text">{title}</h2>}
      <div>{children}</div>
    </div>
  );
}

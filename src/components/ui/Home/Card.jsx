// components/Card.jsx
import React from "react";

export default function Card({ title, actions, children, className = "" }) {
  return (
    <div
      className={`bg-[hsl(var(--card))] text-[hsl(var(--text))] p-4 rounded-2xl shadow-md ${className}`}
    >
      {(title || actions) && (
        <div className="flex justify-between items-center mb-3">
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          {actions && <div>{actions}</div>}
        </div>
      )}
      {children}
    </div>
  );
}

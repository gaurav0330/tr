import React from "react";

// ✅ Reusable Card Component
const Card = ({ title, actions, children, className = "" }) => {
  return (
    <div className={`bg-card text-text p-2 rounded-2xl shadow-md max-h-[300px] ${className}`}>
      {(title || actions) && (
        <div className="flex justify-between items-center mb-1">
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          {actions && <div>{actions}</div>}
        </div>
      )}
      {children}
    </div>
  );
};


// ✅ Vendor Overview
export const VendorOverviewCard = () => (
  <Card title="Vendor Overview">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm mb-1">Profile Completion</p>
        <div className="w-28 h-1 bg-gray-700 rounded-full">
          <div className="w-[85%] h-full bg-green-500 rounded-full" />
        </div>
        <p className="text-xs mt-1 text-[hsl(var(--accent))] cursor-pointer">Quick Edit</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-400 text-sm">Active</span>
        <input type="checkbox" defaultChecked className="toggle toggle-success" />
      </div>
    </div>
  </Card>
);

// ✅ Earnings Overview
export const EarningsOverviewCard = () => (
  <Card title="Earnings Overview">
    <div className="flex justify-between mb-4">
      <div>
        <p className="text-sm text-gray-400">Wallet Balance</p>
        <p className="text-xl font-bold">₹45,250</p>
      </div>
      <div>
        <p className="text-sm text-gray-400">Monthly Earnings</p>
        <p className="text-xl font-bold">₹12,800</p>
      </div>
    </div>
    <div className="flex gap-2">
      <button className="bg-[hsl(var(--accent))] text-white px-4 py-1.5 rounded-md transition hover:opacity-90">
        Withdraw
      </button>
      <button className="border border-[hsl(var(--accent))] text-[hsl(var(--accent))] px-4 py-1.5 rounded-md transition hover:bg-[hsl(var(--accent))] hover:text-white">
        History
      </button>
    </div>
  </Card>
);

// ✅ Recent Interactions
export const RecentInteractionsCard = () => (
  <Card title="Recent Interactions">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="https://i.pravatar.cc/40" className="w-10 h-10 rounded-full" alt="user" />
        <div>
          <p className="font-medium">Sarah Mitchell</p>
          <p className="text-sm text-gray-400">Website Design</p>
        </div>
      </div>
      <div className="text-sm text-gray-400">2 hours ago</div>
    </div>
    <div className="mt-3 flex gap-2">
      <button className="bg-[hsl(var(--accent))] text-white px-3 py-1 rounded-md transition hover:opacity-90">
        Chat
      </button>
      <button className="bg-[hsl(var(--secondary))] text-white px-3 py-1 rounded-md transition hover:opacity-90">
        Complete
      </button>
    </div>
  </Card>
);

// ✅ Latest Reviews
export const LatestReviewsCard = () => (
  <Card
    title="Latest Reviews"
    actions={
      <select className="bg-transparent text-sm outline-none">
        <option>All Ratings</option>
      </select>
    }
  >
    <div className="text-yellow-400 text-lg mb-1">★★★★★</div>
    <p className="text-sm">Excellent service! Very professional and timely delivery.</p>
    <p className="text-xs text-gray-400 mt-2">- John D., 2 days ago</p>
  </Card>
);

// ✅ Premium Plan
export const PremiumPlanCard = () => (
  <Card title="Premium Plan">
    <div className="flex justify-between mb-2 text-sm">
      <span className="text-[hsl(var(--accent))]">15 Days Left</span>
    </div>
    <p className="text-sm mb-1">
      Current Plan: <strong>Professional</strong>
    </p>
    <p className="text-sm mb-4">
      Expires On: <strong>May 3, 2025</strong>
    </p>
    <button className="bg-[hsl(var(--accent))] text-white w-full py-1.5 rounded-md transition hover:opacity-90">
      Upgrade Plan
    </button>
  </Card>
);

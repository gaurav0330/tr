import { useState } from "react";
import { User, MessageCircle, Lock } from "lucide-react";

import OverviewCard from "../../components/ui/customer/OverviewCard";
import RecentlyContactedVendors from "../../components/ui/customer/RecentlyContactVendors";
import QuickActions from "../../components/ui/customer/QuickActions";

const recentVendors = [
  {
    id: 1,
    name: "Anita T.",
    profession: "Beautician",
    photo: "/anita.jpg",
    rating: 4.8,
    lastContacted: "2 days ago",
    experience: "3+ years",
    distance: "2.5 km",
  },
  {
    id: 2,
    name: "Rahul M.",
    profession: "Electrician",
    photo: "/rahul.jpg",
    rating: 4.7,
    lastContacted: "5 days ago",
    experience: "5 years",
    distance: "3.8 km",
  },
];

const infoContent = {
  search: "Use the search function to find new vendors near you.",
  tokens: "You can buy tokens here to unlock contact details of more vendors.",
  contacts: "View and manage all vendors you have contacted in one place.",
};

export default function CustomerDashboard() {
  const [tokensLeft, setTokensLeft] = useState(5);
  const [activeAction, setActiveAction] = useState(null);

  const parseDistance = (dist) => parseFloat(dist);
  const isNearYou = (distance) => parseDistance(distance) <= 3;

  const overviewData = [
    {
      icon: <Lock className="text-accent w-7 h-7" />,
      label: "Tokens Left",
      value: tokensLeft,
    },
    {
      icon: <MessageCircle className="text-accent w-7 h-7" />,
      label: "New Messages",
      value: 2,
    },
    {
      icon: <User className="text-accent w-7 h-7" />,
      label: "Vendors Contacted",
      value: 8,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-text px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold mb-2">Welcome back 👋</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            Here's what's happening with your account.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {overviewData.map(({ icon, label, value }) => (
            <OverviewCard key={label} icon={icon} label={label} value={value} />
          ))}
        </div>

        {/* Recently Contacted Vendors */}
        <RecentlyContactedVendors vendors={recentVendors} isNearYou={isNearYou} />

        {/* Quick Actions */}
        <QuickActions
          activeAction={activeAction}
          setActiveAction={setActiveAction}
          infoContent={infoContent}
        />
      </div>
    </div>
  );
}

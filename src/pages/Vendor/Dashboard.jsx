import {
  VendorOverviewCard,
  EarningsOverviewCard,
  RecentInteractionsCard,
  LatestReviewsCard,
  PremiumPlanCard,
} from "../../components/ui/vendor/VendorDashboardCards";

export default function Dashboard() {
  return (
        <div className="min-h-screen bg-background text-text">
          <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <VendorOverviewCard />
            <EarningsOverviewCard />
            <RecentInteractionsCard />
            <LatestReviewsCard />
            <PremiumPlanCard />
          </div>
        </div>
      );
    }

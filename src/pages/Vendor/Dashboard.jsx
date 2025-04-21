import {
    VendorOverviewCard,
    EarningsOverviewCard,
    RecentInteractionsCard,
    LatestReviewsCard,
    PremiumPlanCard,
  } from "../../components/vendor/VendorDashboardCards";
  
  export default function Dashboard() {
    return (
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-background min-h-screen">
        <VendorOverviewCard />
        <EarningsOverviewCard />
        <RecentInteractionsCard />
        <LatestReviewsCard />
        <PremiumPlanCard />
      </div>
    );
  }
  
import VendorCard from "../vendor/VendorCard";

export default function RecentlyContactedVendors({ vendors, isNearYou }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Recently Contacted Vendors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} isNearYou={isNearYou} />
        ))}
      </div>
    </div>
  );
}

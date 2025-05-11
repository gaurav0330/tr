import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { Heart } from "lucide-react";
import VendorCard from "../../components/ui/vendor/VendorCard";
import FilterBar from "../../components/ui/FilterBar";
import Pagination from "../../components/ui/Pagination";

const vendors = [
  {
    id: 1,
    name: "Anita T.",
    profession: "Beautician",
    experience: "3+ years",
    distance: "2.5 km",
    rating: 4.8,
    photo: "/anita.jpg",
  },
  {
    id: 2,
    name: "Rahul M.",
    profession: "Electrician",
    experience: "5 years",
    distance: "3.8 km",
    rating: 4.8,
    photo: "/rahul.jpg",
  },
];

const infoContent = {
  page: (page) => `Showing vendors on page ${page}.`,
  filters: "Use filters above to narrow down your vendor search.",
  nearMe: "Showing only vendors near you (within 3 km).",
};

export default function VendorListingPage() {
  const { category } = useParams(); // Get the category from the URL
  const [selectedPage, setSelectedPage] = useState(1);
  const [search, setSearch] = useState(category || ""); // Set search to the selected category
  const [experienceFilter, setExperienceFilter] = useState("Any");
  const [ratingFilter, setRatingFilter] = useState("Any");
  const [distanceFilter, setDistanceFilter] = useState("Any");
  const [showNearMe, setShowNearMe] = useState(false);
  const [infoMessage, setInfoMessage] = useState(infoContent.page(1));
  const [filteredVendors, setFilteredVendors] = useState(vendors);

  const parseDistance = (dist) => parseFloat(dist);

  const isNearYou = (distance) => parseDistance(distance) <= 3;

  useEffect(() => {
    let filtered = vendors.filter((vendor) => {
      const searchLower = search.toLowerCase();
      const matchesSearch =
        vendor.name.toLowerCase().includes(searchLower) ||
        vendor.profession.toLowerCase().includes(searchLower) ||
        vendor.experience.toLowerCase().includes(searchLower) ||
        vendor.distance.toLowerCase().includes(searchLower) ||
        vendor.rating.toString().includes(searchLower);

      if (!matchesSearch) return false;

      if (experienceFilter !== "Any") {
        const expNumber = parseInt(experienceFilter);
        const vendorExpNumber = parseInt(vendor.experience);
        if (isNaN(vendorExpNumber) || vendorExpNumber < expNumber) return false;
      }

      if (ratingFilter !== "Any") {
        const ratingNumber = parseFloat(ratingFilter);
        if (vendor.rating < ratingNumber) return false;
      }

      if (distanceFilter !== "Any") {
        if (distanceFilter === "Within 3 km" && parseDistance(vendor.distance) > 3)
          return false;
        if (distanceFilter === "Within 5 km" && parseDistance(vendor.distance) > 5)
          return false;
      }

      if (showNearMe && !isNearYou(vendor.distance)) return false;

      return true;
    });

    setFilteredVendors(filtered);

    if (search || experienceFilter !== "Any" || ratingFilter !== "Any" || distanceFilter !== "Any") {
      setInfoMessage(infoContent.filters);
    } else if (showNearMe) {
      setInfoMessage(infoContent.nearMe);
    } else {
      setInfoMessage(infoContent.page(selectedPage));
    }
  }, [search, experienceFilter, ratingFilter, distanceFilter, showNearMe, selectedPage]);

  return (
    <div className="min-h-screen bg-background text-text">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold mb-8">{category} Vendors</h1> {/* Display selected category */}
        <FilterBar
          search={search}
          setSearch={setSearch}
          experienceFilter={experienceFilter}
          setExperienceFilter={setExperienceFilter}
          ratingFilter={ratingFilter}
          setRatingFilter={setRatingFilter}
          distanceFilter={distanceFilter}
          setDistanceFilter={setDistanceFilter}
          showNearMe={showNearMe}
          setShowNearMe={setShowNearMe}
        />

        {/* Vendor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {filteredVendors.length === 0 && (
            <p className="text-center col-span-full text-gray-500 dark:text-gray-400">
              No vendors found matching your criteria.
            </p>
          )}
          {filteredVendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} isNearYou={isNearYou} />
          ))}
        </div>

        <Pagination selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

        <div className="bg-card p-5 rounded-xl shadow-inner border border-accent/30 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-8 text-center">
          <p className="text-lg">{infoMessage}</p>
        </div>
      </div>
    </div>
  );
}

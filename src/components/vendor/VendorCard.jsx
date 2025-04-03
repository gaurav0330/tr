import { useState } from "react";
import { MapPinIcon, PhoneIcon, CheckCircleIcon } from "lucide-react";
import StarRating from "../ui/StarRating";
import { useToast } from "../../contexts/ToastContext";
import { getCategoryColor } from "../../lib/utils";
import VendorMap from "../map/vendorMap";

/**
 * VendorCard - Displays vendor information with an interactive contact button
 * @param {Object} props - Component props
 * @param {Object} props.vendor - Vendor data object
 */
export default function VendorCard({ vendor }) {
  const { addToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Handle contact button click
  const handleContactClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      addToast({
        title: "Contact feature coming soon!",
        description: `We'll let you know when you can contact ${vendor.name}.`,
        variant: "success",
        icon: <CheckCircleIcon className="w-5 h-5 text-green-500" />,
      });
    }, 500);
  };

  const categoryColorClass = getCategoryColor(vendor.category);

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-xs sm:max-w-sm lg:max-w-md min-h-[400px]">
      
      {/* Vendor Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={vendor.imageUrl}
          alt={vendor.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-full shadow-md ${categoryColorClass}`}>
          {vendor.category}
        </div>
      </div>

      {/* Vendor Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate mb-2">
          {vendor.name}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
          <MapPinIcon className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400" />
          <span className="truncate">{vendor.location}</span>
        </div>

        {/* Map Section */}
        <div className="h-36 w-full mb-4 rounded-md overflow-hidden border border-gray-300 dark:border-gray-700 shadow-sm">
          <VendorMap vendors={[vendor]} />
        </div>

        {/* Rating & Reviews */}
        <div className="flex justify-between items-center mb-3">
          <StarRating rating={vendor.rating} />
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {vendor.reviewCount} reviews
          </span>
        </div>

        {/* Contact Button */}
        <button
          onClick={handleContactClick}
          disabled={isLoading}
          className="w-full flex items-center justify-center py-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium shadow-md transition-transform duration-200 active:scale-95 disabled:opacity-50"
        >
          {isLoading ? "Loading..." : (
            <>
              <PhoneIcon className="w-4 h-4 mr-2" />
              <span>Contact</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

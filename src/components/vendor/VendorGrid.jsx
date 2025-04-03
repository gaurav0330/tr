import VendorCard from "./VendorCard";
import { MapPinIcon, AlertCircleIcon, LoaderIcon } from "lucide-react";

/**
 * VendorGrid - Displays a grid of vendor cards with loading, error, and empty states
 * @param {Object} props - Component props
 * @param {Array} props.vendors - Array of vendor objects
 * @param {boolean} props.isLoading - Loading state
 * @param {Error|null} props.error - Error object if any
 */
export default function VendorGrid({ vendors = [], isLoading, error }) {
  // Loading state
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
        <LoaderIcon className="w-14 h-14 text-blue-600 dark:text-blue-400 animate-spin mb-4" />
        <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
          Loading vendors...
        </p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-red-500 dark:text-red-400 animate-fade-in">
        <AlertCircleIcon className="w-14 h-14 mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Oops! Something went wrong.</h3>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-md">
          {error.message || "An unknown error occurred. Please try again later."}
        </p>
      </div>
    );
  }

  // Empty state
  if (!vendors.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md animate-fade-in">
        <MapPinIcon className="w-14 h-14 text-gray-400 dark:text-gray-600 mb-4" />
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          No Vendors Found
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
          We couldn't find any vendors matching your search criteria. Try adjusting your filters or search terms.
        </p>
      </div>
    );
  }

  // Vendor grid
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center w-full animate-fade-in">
      {vendors.map((vendor) => (
        <VendorCard key={vendor.id} vendor={vendor} />
      ))}
    </div>
  );
}

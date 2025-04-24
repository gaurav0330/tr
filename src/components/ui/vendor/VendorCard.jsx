import { Heart } from "lucide-react";

export default function VendorCard({ vendor, isNearYou, isDashboard = false }) {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-xl transition-transform hover:shadow-2xl hover:scale-[1.02] duration-300 flex items-start gap-5">
      <img
        src={vendor.photo}
        alt={vendor.name}
        className="w-16 h-16 rounded-full object-cover border-2 border-accent"
      />

      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h2 className="text-lg font-semibold">{vendor.name}</h2>
            <p className="text-sm text-gray-400 dark:text-gray-300">{vendor.profession}</p>
          </div>
          {!isDashboard && (
            <Heart className="text-accent cursor-pointer hover:scale-110 transition-transform" />
          )}
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
          {isDashboard ? (
            <>
              <div className="text-xs text-gray-500 mt-1">
                ⭐ {vendor.rating} • Contacted {vendor.lastContacted}
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between">
                <span className="font-medium">Experience:</span>
                <span>{vendor.experience}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Distance:</span>
                <span>
                  {vendor.distance}
                  {isNearYou?.(vendor.distance) && (
                    <span className="ml-2 inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Near you
                    </span>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Rating:</span>
                <span>⭐ {vendor.rating}</span>
              </div>
            </>
          )}
        </div>

        {!isDashboard && (
          <button className="mt-5 w-full bg-accent dark:bg-secondary text-white font-semibold py-3 rounded-xl hover:opacity-90 transition">
            Unlock Contact
          </button>
        )}
      </div>
    </div>
  );
}

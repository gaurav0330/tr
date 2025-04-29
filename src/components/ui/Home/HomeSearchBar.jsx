import { useState, useEffect, useRef } from "react";
import { Search, MapPin, X, ChevronDown } from "lucide-react";

const HomeSearchBar = () => {
  const [location, setLocation] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
  ]);
  const [recentSearches, setRecentSearches] = useState([
    "Mumbai, Maharashtra",
    "Delhi, NCR",
  ]);
  const [activeTab, setActiveTab] = useState("suggestions");
  const suggestionRef = useRef(null);

  // Close suggestions dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    if (e.target.value.length > 1) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleLocationSelect = (loc) => {
    setLocation(loc);
    setShowSuggestions(false);

    // Add to recent searches if not already present
    if (!recentSearches.includes(loc)) {
      setRecentSearches([loc, ...recentSearches.slice(0, 4)]);
    }
  };

  const handleSearch = () => {
    if (location.trim()) {
      // Add to recent searches
      if (!recentSearches.includes(location)) {
        setRecentSearches([location, ...recentSearches.slice(0, 4)]);
      }

      // Here you would typically navigate to search results
      console.log("Searching for vendors near:", location);
    }
  };

  const handleClearInput = () => {
    setLocation("");
    setShowSuggestions(false);
  };

  const handleUseCurrentLocation = () => {
    // This would normally use the browser's geolocation API
    setLocation("Your current location");
    setShowSuggestions(false);
  };

  return (
    <section className="bg-background py-10 text-center relative">
      <div className="container mx-auto px-4">
        <h2 className="text-text text-xl md:text-2xl font-semibold mb-4">
          Find vendors near you
        </h2>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md" ref={suggestionRef}>
            <div className="flex items-center w-full rounded-full bg-white dark:bg-card overflow-hidden shadow-md">
              <div className="flex items-center pl-4 text-text/60">
                <MapPin size={18} />
              </div>
              <input
                type="text"
                placeholder="Enter your location"
                className="flex-grow px-2 py-3 text-sm text-text bg-transparent placeholder:text-text/40 focus:outline-none"
                value={location}
                onChange={handleLocationChange}
                onFocus={() => location.length > 1 && setShowSuggestions(true)}
              />
              {location && (
                <button
                  onClick={handleClearInput}
                  className="px-2 text-text/40 hover:text-text"
                >
                  <X size={16} />
                </button>
              )}
              <button
                onClick={handleSearch}
                className="px-4 py-3 text-sm font-medium text-white bg-secondary hover:bg-logoIt transition-colors flex items-center"
              >
                <Search size={16} className="mr-1" />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>

            {/* Location suggestions dropdown */}
            {showSuggestions && (
              <div className="absolute mt-2 w-full bg-white dark:bg-card rounded-lg shadow-lg overflow-hidden z-10 text-left">
                <div className="flex border-b border-text/10">
                  <button
                    className={`flex-1 py-2 text-sm font-medium ${
                      activeTab === "suggestions"
                        ? "text-primary border-b-2 border-primary"
                        : "text-text/60"
                    }`}
                    onClick={() => setActiveTab("suggestions")}
                  >
                    Suggestions
                  </button>
                  <button
                    className={`flex-1 py-2 text-sm font-medium ${
                      activeTab === "recent"
                        ? "text-primary border-b-2 border-primary"
                        : "text-text/60"
                    }`}
                    onClick={() => setActiveTab("recent")}
                  >
                    Recent
                  </button>
                </div>

                {activeTab === "suggestions" ? (
                  <div>
                    <button
                      className="w-full px-4 py-3 flex items-center text-sm hover:bg-text/5 text-text/80"
                      onClick={handleUseCurrentLocation}
                    >
                      <MapPin size={16} className="mr-2 text-primary" />
                      Use my current location
                    </button>

                    {suggestions
                      .filter((sugg) =>
                        sugg.toLowerCase().includes(location.toLowerCase())
                      )
                      .map((suggestion, index) => (
                        <div
                          key={index}
                          className="px-4 py-3 flex items-center text-sm hover:bg-text/5 cursor-pointer"
                          onClick={() => handleLocationSelect(suggestion)}
                        >
                          <MapPin size={16} className="mr-2 text-text/60" />
                          <span>{suggestion}</span>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div>
                    {recentSearches.length > 0 ? (
                      recentSearches.map((search, index) => (
                        <div
                          key={index}
                          className="px-4 py-3 flex items-center text-sm hover:bg-text/5 cursor-pointer"
                          onClick={() => handleLocationSelect(search)}
                        >
                          <MapPin size={16} className="mr-2 text-text/60" />
                          <span>{search}</span>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-sm text-text/60">
                        No recent searches
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 text-text/60 text-sm">
          <span>Popular searches: </span>
          <button className="inline-flex items-center mx-1 text-primary hover:underline">
            Restaurants
          </button>
          <span>•</span>
          <button className="inline-flex items-center mx-1 text-primary hover:underline">
            Photographers
          </button>
          <span>•</span>
          <button className="inline-flex items-center mx-1 text-primary hover:underline">
            Event Planners
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSearchBar;

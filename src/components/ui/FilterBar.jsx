export default function FiltersBar({
    search,
    setSearch,
    experienceFilter,
    setExperienceFilter,
    ratingFilter,
    setRatingFilter,
    distanceFilter,
    setDistanceFilter,
    showNearMe,
    setShowNearMe,
  }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-6 items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search vendor or service, experience, rating..."
          className="p-3 rounded-xl bg-white text-black dark:bg-darkInput dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
  
        <select
          value={experienceFilter}
          onChange={(e) => setExperienceFilter(e.target.value)}
          className="p-3 rounded-xl bg-white text-black dark:bg-darkInput dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option>Any</option>
          <option>1+ years</option>
          <option>3+ years</option>
          <option>5+ years</option>
        </select>
  
        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
          className="p-3 rounded-xl bg-white text-black dark:bg-darkInput dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option>Any</option>
          <option>4.0+</option>
          <option>4.5+</option>
        </select>
  
        <select
          value={distanceFilter}
          onChange={(e) => setDistanceFilter(e.target.value)}
          className="p-3 rounded-xl bg-white text-black dark:bg-darkInput dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option>Any</option>
          <option>Within 3 km</option>
          <option>Within 5 km</option>
        </select>
  
        <button
          onClick={() => setShowNearMe((prev) => !prev)}
          className={`p-3 rounded-xl font-semibold transition 
            ${showNearMe ? "bg-accent text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"} 
            hover:bg-accent hover:text-white`}
        >
          {showNearMe ? "Showing Near Me" : "Show Near Me"}
        </button>
      </div>
    );
  }
  
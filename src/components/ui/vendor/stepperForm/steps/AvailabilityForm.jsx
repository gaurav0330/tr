import { useState } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const timeOptions = [
  "06:00 AM",
  "07:00 AM",
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
];
const serviceAreas = [
  "Downtown",
  "Westside",
  "Northside",
  "Eastside",
  "Southside",
];

export default function AvailabilityForm() {
  const [availability, setAvailability] = useState({
    startTime: "09:00 AM",
    endTime: "05:00 PM",
    selectedDays: ["Mon", "Tue", "Thu", "Fri"],
    radius: 25,
    address: "",
    additionalAreas: ["Downtown", "Westside"],
    available: true,
  });

  const toggleDay = (day) => {
    setAvailability((prev) => ({
      ...prev,
      selectedDays: prev.selectedDays.includes(day)
        ? prev.selectedDays.filter((d) => d !== day)
        : [...prev.selectedDays, day],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAvailability((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRangeChange = (e) => {
    setAvailability((prev) => ({
      ...prev,
      radius: Number(e.target.value),
    }));
  };

  const addServiceArea = (area) => {
    if (!availability.additionalAreas.includes(area) && area) {
      setAvailability((prev) => ({
        ...prev,
        additionalAreas: [...prev.additionalAreas, area],
      }));
    }
  };

  const removeServiceArea = (area) => {
    setAvailability((prev) => ({
      ...prev,
      additionalAreas: prev.additionalAreas.filter((a) => a !== area),
    }));
  };

  return (
    <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md grid md:grid-cols-2 gap-6">
      {/* Left Side */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-text">
          Step 2: Availability & Coverage
        </h2>

        {/* Operating Hours */}
        <div className="mb-4">
          <label
            htmlFor="startTime"
            className="block text-sm font-medium text-text mb-1"
          >
            Operating Hours
          </label>
          <div className="flex gap-3">
            <select
              id="startTime"
              name="startTime"
              value={availability.startTime}
              onChange={handleInputChange}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm w-1/2 bg-white dark:bg-card text-text focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {timeOptions.map((time) => (
                <option key={`start-${time}`} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <span className="self-center text-sm text-text/60">to</span>
            <select
              id="endTime"
              name="endTime"
              value={availability.endTime}
              onChange={handleInputChange}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm w-1/2 bg-white dark:bg-card text-text focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {timeOptions.map((time) => (
                <option key={`end-${time}`} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Days Available */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-text mb-1">
            Days Available
          </label>
          <div className="flex flex-wrap gap-2">
            {days.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={`px-4 py-1 rounded-full text-sm transition-colors ${
                  availability.selectedDays.includes(day)
                    ? "bg-accent text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-text"
                }`}
                aria-pressed={availability.selectedDays.includes(day)}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="space-y-4">
        {/* Service Radius */}
        <div>
          <label
            htmlFor="radius"
            className="block text-sm font-medium text-text mb-1"
          >
            Service Radius: {availability.radius} km
          </label>
          <input
            id="radius"
            name="radius"
            type="range"
            min={0}
            max={50}
            value={availability.radius}
            onChange={handleRangeChange}
            className="w-full accent-accent"
          />
        </div>

        {/* Business Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-text mb-1"
          >
            Business Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={availability.address}
            onChange={handleInputChange}
            placeholder="Enter your business address"
            className="w-full border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-lg text-sm bg-white dark:bg-card text-text focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Additional Service Areas */}
        <div>
          <label
            htmlFor="additionalArea"
            className="block text-sm font-medium text-text mb-1"
          >
            Additional Service Areas
          </label>
          <select
            id="additionalArea"
            name="additionalArea"
            className="w-full border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-lg text-sm bg-white dark:bg-card text-text focus:ring-2 focus:ring-primary focus:border-transparent"
            onChange={(e) => addServiceArea(e.target.value)}
            value=""
          >
            <option value="">Select areas...</option>
            {serviceAreas
              .filter((area) => !availability.additionalAreas.includes(area))
              .map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
          </select>

          <div className="flex gap-2 mt-2 flex-wrap">
            {availability.additionalAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center bg-accent/10 px-3 py-1 text-xs rounded-full text-accent"
              >
                {area}
                <button
                  type="button"
                  onClick={() => removeServiceArea(area)}
                  className="ml-1 text-accent hover:text-accent/80"
                  aria-label={`Remove ${area}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Currently Available Toggle */}
        <div className="flex items-center gap-2">
          <label htmlFor="available" className="text-sm text-text">
            Currently Available
          </label>
          <input
            id="available"
            name="available"
            type="checkbox"
            checked={availability.available}
            onChange={handleInputChange}
            className="h-4 w-4 accent-accent"
          />
        </div>
      </div>
    </div>
  );
}

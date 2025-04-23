import { useState } from "react";
import { Camera } from "lucide-react";

function BasicInfoForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    yearsExperience: "",
    aboutBusiness: "",
    serviceCategory: "",
    subcategory: "",
  });
  const [selectedServices, setSelectedServices] = useState([]);
  const [newService, setNewService] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addService = () => {
    if (newService.trim() && !selectedServices.includes(newService.trim())) {
      setSelectedServices((prev) => [...prev, newService.trim()]);
      setNewService("");
    }
  };

  const removeService = (service) => {
    setSelectedServices((prev) => prev.filter((s) => s !== service));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addService();
    }
  };

  // Pre-defined options for select elements
  const yearOptions = [...Array(20)].map((_, i) => ({
    value: `${i + 1}`,
    label: `${i + 1} years`,
  }));

  const categories = [
    { value: "beauty", label: "Beauty" },
    { value: "health", label: "Health" },
    { value: "fitness", label: "Fitness" },
  ];

  const subcategories = [
    { value: "hair", label: "Hair" },
    { value: "nails", label: "Nails" },
    { value: "spa", label: "Spa" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <label
            htmlFor="businessName"
            className="block text-sm font-medium text-text mb-2"
          >
            Business/Brand Name
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            value={formData.businessName}
            onChange={handleInputChange}
            placeholder="Enter your business name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-card text-text focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="yearsExperience"
            className="block text-sm font-medium text-text mb-2"
          >
            Years of Experience
          </label>
          <select
            id="yearsExperience"
            name="yearsExperience"
            value={formData.yearsExperience}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-card text-text focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select years</option>
            {yearOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            <option value="20+">20+ years</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="aboutBusiness"
            className="block text-sm font-medium text-text mb-2"
          >
            About Business
          </label>
          <textarea
            id="aboutBusiness"
            name="aboutBusiness"
            rows={4}
            value={formData.aboutBusiness}
            onChange={handleInputChange}
            placeholder="Tell us about your business"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-card text-text focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="serviceCategory"
              className="block text-sm font-medium text-text mb-2"
            >
              Service Category
            </label>
            <select
              id="serviceCategory"
              name="serviceCategory"
              value={formData.serviceCategory}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-card text-text focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="subcategory"
              className="block text-sm font-medium text-text mb-2"
            >
              Subcategory
            </label>
            <select
              id="subcategory"
              name="subcategory"
              value={formData.subcategory}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-card text-text focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select subcategory</option>
              {subcategories.map((subcategory) => (
                <option key={subcategory.value} value={subcategory.value}>
                  {subcategory.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-2">
            Services Offered
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            {selectedServices.map((service) => (
              <span
                key={service}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent/10 text-accent"
              >
                {service}
                <button
                  type="button"
                  onClick={() => removeService(service)}
                  className="ml-2 text-accent hover:text-accent/80"
                  aria-label={`Remove ${service}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newService}
              onChange={(e) => setNewService(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type and press enter to add services"
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-card text-text focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="button"
              onClick={addService}
              className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90"
              disabled={!newService.trim()}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-start">
        <label htmlFor="profilePicture" className="cursor-pointer">
          <div className="w-48 h-48 rounded-full bg-white dark:bg-card border-2 border-dashed border-accent flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Camera className="w-8 h-8 text-accent mb-2" />
            <span className="text-sm text-accent">Upload Profile Picture</span>
            <span className="text-xs text-text/60 mt-1">
              Recommended: 400×400px
            </span>
          </div>
          <input
            id="profilePicture"
            type="file"
            accept="image/*"
            className="hidden"
            aria-label="Upload profile picture"
          />
        </label>
      </div>
    </div>
  );
}

export default BasicInfoForm;

import { useState } from "react";
import { Plus, Trash2, Info, Upload, X } from "lucide-react";

function PricingGalleryForm() {
  const [formData, setFormData] = useState({
    basePrice: "",
    packages: [{ title: "", price: "" }],
    acceptOnlinePayments: false,
    acceptInstantBookings: false,
    gallery: [],
  });
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleBaseChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      basePrice: e.target.value,
    }));
  };

  const handlePackageChange = (index, key, value) => {
    const updatedPackages = [...formData.packages];
    updatedPackages[index][key] = value;
    setFormData((prev) => ({
      ...prev,
      packages: updatedPackages,
    }));
  };

  const addPackage = () => {
    setFormData((prev) => ({
      ...prev,
      packages: [...prev.packages, { title: "", price: "" }],
    }));
  };

  const removePackage = (index) => {
    if (formData.packages.length > 1) {
      setFormData((prev) => ({
        ...prev,
        packages: prev.packages.filter((_, i) => i !== index),
      }));
    }
  };

  const toggleSetting = (setting) => {
    setFormData((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const newFiles = Array.from(files).slice(0, 10 - formData.gallery.length);

    if (newFiles.length > 0) {
      const fileObjects = newFiles.map((file) => ({
        id: `img-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        file,
        preview: URL.createObjectURL(file),
        name: file.name,
      }));

      setFormData((prev) => ({
        ...prev,
        gallery: [...prev.gallery, ...fileObjects].slice(0, 10),
      }));
    }
  };

  const removeImage = (idToRemove) => {
    setFormData((prev) => {
      const updatedGallery = prev.gallery.filter(
        (img) => img.id !== idToRemove
      );
      // Release object URL to prevent memory leaks
      const imageToRemove = prev.gallery.find((img) => img.id === idToRemove);
      if (imageToRemove && imageToRemove.preview) {
        URL.revokeObjectURL(imageToRemove.preview);
      }
      return {
        ...prev,
        gallery: updatedGallery,
      };
    });
  };

  return (
    <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md">
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-text">
          Step 3: Pricing & Gallery
        </h2>

        {/* Base Price */}
        <div>
          <label
            htmlFor="basePrice"
            className="block text-sm font-medium text-text mb-2"
          >
            Base Price (₹)
          </label>
          <div>
            <input
              id="basePrice"
              type="number"
              placeholder="Enter base price"
              value={formData.basePrice}
              onChange={handleBaseChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-card text-text focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Custom Packages */}
        <div>
          <label className="block text-sm font-medium text-text mb-2">
            Custom Packages
          </label>
          <div className="space-y-3">
            {formData.packages.map((pkg, index) => (
              <div key={index} className="flex gap-3">
                <input
                  type="text"
                  placeholder="Package Title"
                  value={pkg.title}
                  onChange={(e) =>
                    handlePackageChange(index, "title", e.target.value)
                  }
                  className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-card text-text focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <div className="relative w-32">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">₹</span>
                  </div>
                  <input
                    type="number"
                    placeholder="Price"
                    value={pkg.price}
                    onChange={(e) =>
                      handlePackageChange(index, "price", e.target.value)
                    }
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg pl-7 pr-3 py-2 bg-white dark:bg-card text-text focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <button
                  onClick={() => removePackage(index)}
                  disabled={formData.packages.length <= 1}
                  className={`text-text/50 hover:text-accent transition-colors ${
                    formData.packages.length <= 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  aria-label="Remove package"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={addPackage}
            className="flex items-center gap-2 text-accent hover:text-accent/80 mt-3 text-sm font-medium"
            disabled={formData.packages.length >= 5}
          >
            <Plus className="w-4 h-4" />
            Add New Package {formData.packages.length >= 5 && "(Maximum 5)"}
          </button>
        </div>

        {/* Gallery Upload */}
        <div>
          <label className="block text-sm font-medium text-text mb-2">
            Gallery Photos{" "}
            <span className="text-text/60 text-xs">(Up to 10 photos)</span>
          </label>
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`mt-2 border-2 border-dashed rounded-lg p-8 transition-colors ${
              dragActive
                ? "border-accent bg-accent/5"
                : "border-accent/20 hover:border-accent/40"
            }`}
          >
            <label
              htmlFor="gallery-upload"
              className="cursor-pointer w-full h-full"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <Upload className="w-10 h-10 text-accent/50 mb-2" />
                <p className="text-sm text-text/70">
                  Drag and drop your photos here, or click to browse
                </p>
                <p className="text-xs text-text/50 mt-1">
                  Support: JPG, PNG, WEBP (Max 5MB each)
                </p>
              </div>
              <input
                id="gallery-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                disabled={formData.gallery.length >= 10}
              />
            </label>
          </div>

          {/* Gallery Preview */}
          {formData.gallery.length > 0 && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {formData.gallery.map((img) => (
                <div
                  key={img.id}
                  className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden group"
                >
                  <img
                    src={img.preview}
                    alt={img.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeImage(img.id)}
                    className="absolute top-1 right-1 bg-black/50 hover:bg-black/70 p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Remove image"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {formData.gallery.length < 10 && (
                <label htmlFor="add-more-photos" className="cursor-pointer">
                  <div className="aspect-square bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                    <Plus className="w-6 h-6 text-accent/50" />
                  </div>
                  <input
                    id="add-more-photos"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          )}
        </div>

        {/* Payment Settings */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-text">
                Accept Online Payments
              </span>
              <div className="relative">
                <button
                  type="button"
                  onMouseEnter={() => setActiveTooltip("payments")}
                  onMouseLeave={() => setActiveTooltip(null)}
                  className="text-text/50 hover:text-accent transition-colors"
                  aria-label="Information about online payments"
                >
                  <Info className="w-4 h-4" />
                </button>
                {activeTooltip === "payments" && (
                  <div className="absolute z-10 w-64 p-2 bg-white dark:bg-gray-800 text-text text-sm rounded-md shadow-lg -right-2 top-6">
                    Allow customers to pay online for your services
                    <div className="absolute -top-1 right-2 w-2 h-2 bg-white dark:bg-gray-800 transform rotate-45" />
                  </div>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={() => toggleSetting("acceptOnlinePayments")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                formData.acceptOnlinePayments
                  ? "bg-accent"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              aria-pressed={formData.acceptOnlinePayments}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ${
                  formData.acceptOnlinePayments
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-text">
                Accept Instant Bookings
              </span>
              <div className="relative">
                <button
                  type="button"
                  onMouseEnter={() => setActiveTooltip("bookings")}
                  onMouseLeave={() => setActiveTooltip(null)}
                  className="text-text/50 hover:text-accent transition-colors"
                  aria-label="Information about instant bookings"
                >
                  <Info className="w-4 h-4" />
                </button>
                {activeTooltip === "bookings" && (
                  <div className="absolute z-10 w-64 p-2 bg-white dark:bg-gray-800 text-text text-sm rounded-md shadow-lg -right-2 top-6">
                    Allow customers to book instantly without approval
                    <div className="absolute -top-1 right-2 w-2 h-2 bg-white dark:bg-gray-800 transform rotate-45" />
                  </div>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={() => toggleSetting("acceptInstantBookings")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                formData.acceptInstantBookings
                  ? "bg-accent"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              aria-pressed={formData.acceptInstantBookings}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ${
                  formData.acceptInstantBookings
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingGalleryForm;

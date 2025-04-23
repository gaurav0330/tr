
const BasicInfoForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="businessName"
            className="block text-sm font-medium text-gray-700"
          >
            Business/Brand Name
          </label>
          <input
            id="businessName"
            type="text"
            placeholder="Enter your business name"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-700"
          >
            Years of Experience
          </label>
          <select
            id="experience"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          >
            <option value="">Select Experience</option>
            <option value="1">1 Year</option>
            <option value="5">5 Years</option>
            <option value="10">10 Years</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="aboutBusiness"
            className="block text-sm font-medium text-gray-700"
          >
            About Business
          </label>
          <textarea
            id="aboutBusiness"
            rows="4"
            placeholder="Describe your business"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label
              htmlFor="serviceCategory"
              className="block text-sm font-medium text-gray-700"
            >
              Service Category
            </label>
            <select
              id="serviceCategory"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            >
              <option value="">Select Service Category</option>
              <option value="web">Web Development</option>
              <option value="design">Design</option>
            </select>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="serviceSubcategory"
              className="block text-sm font-medium text-gray-700"
            >
              Subcategory
            </label>
            <select
              id="serviceSubcategory"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            >
              <option value="">Select Subcategory</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
            </select>
          </div>
        </div>
      </div>

      {/* Right Column (Profile Image Select) */}
      <div className="space-y-4">
        <label
          htmlFor="profileImage"
          className="block text-sm font-medium text-gray-700"
        >
          Profile Image
        </label>
        <input
          id="profileImage"
          type="file"
          className="block w-full text-sm text-gray-700 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        />
      </div>
    </div>
  );
};

export default BasicInfoForm;

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import VendorGrid from '../components/vendor/VendorGrid';
import SearchAndFilterBar from '../components/ui/SearchAndFilterBar';
import Pagination from '../components/ui/Pagination';
import { mockVendors } from '../services/vendorService';

/**
 * VendorListing Component
 * Displays a list of vendors with search, filter, and pagination features.
 */
export default function VendorListing() {
  // State variables for search, category filtering, and pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const vendorsPerPage = 8; // Number of vendors displayed per page

  // Reset pagination when search or filter criteria change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  /**
   * Filters vendors based on search term and selected category
   */
  const filteredVendors = mockVendors.filter((vendor) => {
    const matchesSearch =
      searchTerm === '' ||
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === '' || vendor.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Extract unique categories for filtering dropdown
  const categories = [...new Set(mockVendors.map((vendor) => vendor.category))];

  /**
   * Handles pagination logic
   */
  const indexOfLastVendor = currentPage * vendorsPerPage;
  const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
  const currentVendors = filteredVendors.slice(indexOfFirstVendor, indexOfLastVendor);
  const totalPages = Math.max(1, Math.ceil(filteredVendors.length / vendorsPerPage));

  return (
    <>
      <Header />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              <span className="text-blue-600 dark:text-blue-400">Find</span> the Best Service Providers
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
              Discover top-rated vendors in your area
            </p>
          </motion.div>

          {/* Search and Filter */}
          <SearchAndFilterBar
            onSearch={setSearchTerm}
            onFilter={setSelectedCategory}
            categories={categories}
            selectedCategory={selectedCategory}
          />

          {/* Vendor Grid */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <VendorGrid vendors={currentVendors} />
          </motion.div>

          {/* Pagination */}
          {totalPages >= 1 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

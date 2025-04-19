import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import VendorGrid from '../components/vendor/VendorGrid';
import SearchAndFilterBar from '../components/ui/SearchAndFilterBar';
import Pagination from '../components/ui/Pagination';
import { mockVendors } from '../services/vendorService';
import { useTheme } from '../contexts/ThemeContext'; // ⬅️ Import the context

export default function VendorListing() {
  const { themeColors } = useTheme(); // ⬅️ Grab themeColors from context

  // State variables for search, category filtering, and pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const vendorsPerPage = 8;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const filteredVendors = mockVendors.filter((vendor) => {
    const matchesSearch =
      searchTerm === '' ||
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === '' || vendor.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(mockVendors.map((vendor) => vendor.category))];

  const indexOfLastVendor = currentPage * vendorsPerPage;
  const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
  const currentVendors = filteredVendors.slice(indexOfFirstVendor, indexOfLastVendor);
  const totalPages = Math.max(1, Math.ceil(filteredVendors.length / vendorsPerPage));

  return (
    <>
      <Header />

      <main
        className="flex-grow"
        style={{
          backgroundColor: themeColors.background,
          color: themeColors.text,
          transition: 'background-color 0.3s ease',
        }}
      >
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl font-extrabold sm:text-4xl" style={{ color: themeColors.text }}>
              <span style={{ color: themeColors.accent }}>Find</span> the Best Service Providers
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl sm:mt-4" style={{ color: themeColors.text }}>
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

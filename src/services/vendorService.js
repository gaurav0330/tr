/**
 * Mock vendor data for development.
 * This data will be used instead of an API request.
 */
export const mockVendors = [
  {
    id: 1,
    name: "SparkleWash Car Service",
    category: "Car Wash",
    location: "San Francisco, CA",
    latitude: 40.7128,
    longitude: -74.0060,
    rating: 4.7,
    reviewCount: 128,
    imageUrl: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwd2FzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 2,
    name: "Clean Home Services",
    category: "Home Cleaning",
    location: "Los Angeles, CA",
    latitude: 34.0522,
    longitude: -118.2437,
    rating: 4.9,
    reviewCount: 243,
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 3,
    name: "Quick Fix Electricians",
    category: "Electrical Services",
    location: "New York, NY",
    latitude: 40.7128,
    longitude: -74.0060,
    rating: 4.8,
    reviewCount: 189,
    imageUrl: "https://plus.unsplash.com/premium_photo-1661929137248-2544fd28de13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Pro Plumbing Experts",
    category: "Plumbing Services",
    location: "Miami, FL",
    latitude: 25.7617,
    longitude: -80.1918,
    rating: 4.6,
    reviewCount: 130,
    imageUrl: "https://plus.unsplash.com/premium_photo-1664301135901-383935f2104f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Plumbing Services Image
  }
];

/**
 * Fetch all vendors (Static Data)
 * @returns {Promise<Array>} Array of vendor objects.
 */
export async function fetchVendors() {
  return mockVendors; // Return mock data directly
}

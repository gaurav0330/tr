import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.jsx";
import VendorListing from "./pages/VendorListing.jsx";

/**
 * AppRouter Component
 * Defines application routes using React Router and now it has a single route for the Vendor Listing page.
 */
function AppRouter() {
  return (
    <Routes>
      {/* Route for the Vendor Listing Page */}
      <Route path="/" element={<VendorListing />} />
    </Routes>
  );
}

/**
 * Main App Component
 * Wraps the application with Router and includes the Toaster component for notifications.
 */
function App() {
  return (
    <Router>
      <AppRouter />
      <Toaster />
    </Router>
  );
}

export default App;

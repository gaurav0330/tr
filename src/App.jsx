import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.jsx";

import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/Auth/Login.jsx";
import Header from "./components/ui/Header.jsx";
import Footer from "./components/ui/Footer.jsx";
import Signup from "./pages/Auth/Signup.jsx";
import Dashboard from "./pages/Vendor/Dashboard.jsx";
import StepperForm from "./pages/Vendor/Form.jsx";
import VendorListingPage from "./pages/Customer/VendorListingPage.jsx";
import CustomerDashboard from "./pages/Customer/CustomerDashboard.jsx";
import ServicePage from "./pages/ServicePage.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/form" element={<StepperForm />} />
      <Route
        path="/vendor-listing/:category"
        element={<VendorListingPage />}
      />{" "}
      {/* Updated route */}
      <Route path="/customerdashboard" element={<CustomerDashboard />} />
      <Route path="/services" element={<ServicePage />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AppRouter />
      <Toaster />
      <Footer />
    </Router>
  );
}

export default App;

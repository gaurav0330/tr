import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.jsx";
import HowPage from "./pages/HowPage.jsx"; // Import the HowPage

function AppRouter() {
  return (
    <Routes>
      {/* Route for the new Landing (HowPage) */}
      <Route path="/" element={<HowPage />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRouter />
      <Toaster />
    </Router>
  );
}

export default App;

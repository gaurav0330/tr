import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.jsx";
import HomePage from "./pages/HomePage.jsx";

function AppRouter() {
  return (
    <Routes>
      {/* Route for the new Landing (HowPage) */}
      <Route path="/" element={<HomePage />} />
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

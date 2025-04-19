import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.jsx";
import HowPage from "./pages/HowPage.jsx"; // Import the HowPage
import Login from "./pages/Auth/Login.jsx";
import Header from "./components/ui/Header.jsx";
import Footer from "./components/ui/Footer.jsx";
import Signup from "./pages/Auth/Signup.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HowPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
    <Header/>
      <AppRouter />
      <Toaster />
      <Footer />
    </Router>
  );
}

export default App;

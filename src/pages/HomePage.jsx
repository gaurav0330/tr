// src/pages/HowPage.jsx
import CategoriesSection from "../components/ui/Home/CategoriesSection";
import HowItWorksSection from "../components/ui/Home/HowItWorksSection";
import LoginOptionsSection from "../components/ui/Home/LoginOptionsSection";
import TestimonialSection from "../components/ui/Home/TestimonialSection";
import TopVendorsSection from "../components/ui/Home/TopVendorsSection";
// import HeroSection from "../components/HeroSection";
// import CategoryCards from "../components/CategoryCards";
// import HowItWorks from "../components/HowItWorks";
// import LoginOptions from "../components/LoginOptions";

export default function HomePage() {
  return (
    <div>
      <CategoriesSection />
      <HowItWorksSection />
      <LoginOptionsSection />
      <TopVendorsSection />
      <TestimonialSection />

      {/* <Header /> */}
      {/* <HeroSection />
      <CategoryCards />
      <HowItWorks />
      <LoginOptions /> */}
      {/* <Footer />  */}
    </div>
  );
}

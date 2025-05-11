// import androidMockup from '../../../assets/app-section/Untitled.svg'; // Adjust the path accordingly
// import IosMockup from '../../../assets/app-section/1.svg'; // Adjust the path accordingly
// import GooglePlayBadge from '../../../assets/app-section/1.svg'; // Adjust the path accordingly
// import AppStoreBadge from '../../../assets/app-section/1.svg';
export default function AppComingSoonSection() {
  return (
    <section className="py-16 px-6 md:px-16 bg-background text-text text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Our App is Coming Soon!
      </h2>
      <p className="text-base md:text-lg text-text/80 mb-10">
        Get ready to experience FindyIt on the go.
      </p>

      {/* Phone Mockups */}
      <div className="flex justify-center gap-6 mb-10">
        <img
          src= ""
          alt="Android Mockup"
          className="w-40 md:w-52"
        />
        <img
          src="/mockup-ios.png"
          alt="iOS Mockup"
          className="w-40 md:w-52"
        />
      </div>

      {/* Store Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <a href="#">
          <img
            src="/google-play-badge.png"
            alt="Get it on Google Play"
            className="h-12"
          />
        </a>
        <a href="#">
          <img
            src="/app-store-badge.png"
            alt="Download on the App Store"
            className="h-12"
          />
        </a>
      </div>

      {/* Notify Form */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-md bg-card text-white placeholder:text-text/50 border border-text/20 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button className="bg-accent text-white px-6 py-2 rounded-md hover:opacity-90 transition">
          Notify Me
        </button>
      </div>
    </section>
  );
}

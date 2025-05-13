import { useState } from "react";
import playStoreLogo from "../../../assets/app-coming-soon/playstore2.png";
import iosStoreLogo from "../../../assets/app-coming-soon/app-store.png";
import androidScreen from "../../../assets/app-coming-soon/android.png";
import { Bell, CheckCircle } from "lucide-react";

export default function AppComingSoonSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would normally send the email to your backend
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-background text-text">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Coming Soon
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-text">
            FindyIt Mobile Experience
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text/80 max-w-2xl mx-auto">
            Take FindyIt with you everywhere. Our mobile app is packed with all
            the features you love, optimized for on-the-go use.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* App Preview Column */}
          <div className="w-full lg:w-1/2 flex justify-center relative mb-8 lg:mb-0">
            {/* Decorative elements */}
            <div className="absolute w-48 sm:w-64 h-48 sm:h-64 bg-accent/5 rounded-full -z-10 blur-3xl" />

            <div className="w-full max-w-xs relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-xl -z-10" />

              {/* Phone frame with shadow */}
              <div className="relative">
                <img
                  src={androidScreen}
                  alt="FindyIt App Preview"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Download Info Column */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Download Our App
            </h3>
            <p className="text-sm sm:text-base text-text/80 mb-6 sm:mb-8 max-w-md">
              Be among the first to experience FindyIt on mobile. Download from
              your preferred app store or sign up to get notified when we
              launch.
            </p>

            {/* Store buttons */}
            <div className="flex flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto justify-center lg:justify-start flex-wrap">
              <a
                href="#"
                className="flex items-center justify-center bg-card hover:bg-card/80 border border-white/10 px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-md group min-w-fit"
              >
                <img
                  src={playStoreLogo}
                  alt="Get it on Google Play"
                  className="h-6 sm:h-8 w-auto mr-2 sm:mr-3"
                />
                <div className="text-left">
                  <div className="text-xs text-text/70">Get it on</div>
                  <div className="font-bold text-xs sm:text-sm group-hover:text-accent transition-colors">
                    Google Play
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-center bg-card hover:bg-card/80 border border-white/10 px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-md group min-w-fit"
              >
                <img
                  src={iosStoreLogo}
                  alt="Download on the App Store"
                  className="h-6 sm:h-8 w-auto mr-2 sm:mr-3"
                />
                <div className="text-left">
                  <div className="text-xs text-text/70">Download on the</div>
                  <div className="font-bold text-xs sm:text-sm group-hover:text-accent transition-colors">
                    App Store
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Notify Form */}
        <div className="max-w-xl mx-auto bg-card p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <h3 className="font-bold text-lg sm:text-xl mb-1">
              Get Notified on Launch
            </h3>
            <p className="text-xs sm:text-sm text-text/70 mb-3 sm:mb-4">
              Be the first to know when our app is ready to download
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 sm:py-3 rounded-lg bg-background text-text
                    placeholder:text-text/50 border border-white/10
                    focus:outline-none focus:ring-2 focus:ring-accent pl-9 sm:pl-10 text-sm sm:text-base"
                  disabled={isSubmitted}
                />
                <Bell className="absolute left-2 sm:left-3 top-2.5 sm:top-3.5 h-4 sm:h-5 w-4 sm:w-5 text-text/50" />
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base
                  ${
                    isSubmitted
                      ? "bg-green-600 text-white cursor-default"
                      : "bg-accent text-white hover:bg-accent/90 active:scale-95"
                  }`}
              >
                {isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 mr-1 sm:mr-2" />
                    Subscribed!
                  </span>
                ) : (
                  "Notify Me"
                )}
              </button>
            </div>
 
            <p className="text-xs text-text/60 mt-1 sm:mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

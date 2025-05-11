import { Briefcase, Lock, Search } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Search className="w-14 h-14 text-accent" />,
      title: "Search Vendors",
      description: "Browse vendors by location and category.",
    },
    {
      icon: <Lock className="w-14 h-14 text-accent" />,
      title: "View & Unlock Contact",
      description: "Check vendor details and unlock contact.",
    },
    {
      icon: <Briefcase className="w-14 h-14 text-accent" />,
      title: "Get Service",
      description: "Connect instantly and get service done seamlessly.",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16 bg-background text-text">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
        HOW IT WORKS
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center text-center min-w-[150px] px-2 relative"
          >
            {/* Connector Dots (Only between steps) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute right-0 top-[36px] translate-x-1/2">
                <div className="flex space-x-1">
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full bg-accent"
                    ></div>
                  ))}
                </div>
              </div>
            )}

            {/* Icon */}
            <div className="mb-3">{step.icon}</div>

            {/* Text */}
            <div className="max-w-[7.5rem]">
              <h3 className="text-sm font-medium mb-1 leading-tight">
                {step.title}
              </h3>
              <p className="text-xs text-text/80 leading-snug">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

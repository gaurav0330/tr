export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Search vendors",
      description: "Find local vendors in your area",
    },
    {
      number: 2,
      title: "View details",
      description: "Check vendor profiles and services",
    },
    {
      number: 3,
      title: "Unlock contact",
      description: "Access vendor contact information",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16 bg-background text-text">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        How it works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center bg-[hsl(var(--card))] text-[hsl(var(--text))] p-6 rounded-xl shadow-md text-center"
          >
            <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))] text-white flex items-center justify-center text-lg font-semibold mb-4">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
            <p className="text-sm text-[hsl(var(--text)/0.8)]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

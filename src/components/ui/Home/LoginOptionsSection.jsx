import { User, Store } from "lucide-react";

export default function LoginOptionsSection() {
  const loginOptions = [
    {
      title: "Customer Login",
      icon: <User className="text-[hsl(var(--accent))] w-8 h-8" />,
      buttonText: "Login as Customer",
    },
    {
      title: "Vendor Login",
      icon: <Store className="text-[hsl(var(--accent))] w-8 h-8" />,
      buttonText: "Login as Vendor",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16 bg-background text-text">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Login Options
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
        {loginOptions.map((option, index) => (
          <div
            key={index}
            className="flex-1 bg-card text-card-foreground p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center"
          >
            <div className="mb-4">{option.icon}</div>
            <p className="font-semibold text-lg mb-4">{option.title}</p>
            <button className="bg-accent px-4 py-2 text-background text-sm font-medium rounded-xl hover:bg-accent/90 transition">
              {option.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

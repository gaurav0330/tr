import { Wrench, ShoppingCart, Home, User } from "lucide-react";

const services = [
  {
    icon: <Wrench className="w-8 h-8 text-accent" />,
    title: "Home Repairs",
    views: "2.5k Views",
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-accent" />,
    title: "Grocery Delivery",
    views: "1.8k Views",
  },
  {
    icon: <Home className="w-8 h-8 text-accent" />,
    title: "Real Estate Agents",
    views: "1.2k Views",
  },
  {
    icon: <User className="w-8 h-8 text-accent" />,
    title: "Personal Trainers",
    views: "900 Views",
  },
];

export default function MostViewedServicesSection() {
  return (
    <section className="py-12 px-6 md:px-16 bg-background text-text">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
        Most Viewed Services
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-card rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
            <p className="text-sm text-text/70">{service.views}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Star } from "lucide-react";

export default function TopVendorsSection() {
  const vendors = [
    {
      name: "Elite Plumbers",
      image:
        "https://plus.unsplash.com/premium_photo-1664301135901-383935f2104f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.8,
      description: "Trusted plumbing solutions with 10+ years of experience.",
    },
    {
      name: "Bright Sparks Electric",
      image:
        "https://plus.unsplash.com/premium_photo-1661929137248-2544fd28de13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.6,
      description:
        "Reliable and safe electrical services for homes and offices.",
    },
    {
      name: "Color My Walls",
      image:
        "https://images.unsplash.com/photo-1706721629960-267c99369d68?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.4,
      description: "Professional painting services with a colorful touch.",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16 bg-background text-text">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Top-rated vendors near you
      </h2>

      <div className="flex justify-center space-x-6 flex-wrap gap-6">
        {vendors.map((vendor, index) => (
          <div
            key={index}
            className="bg-card text-card-foreground p-4 rounded-2xl shadow-md hover:shadow-lg transition w-80"
          >
            <img
              src={vendor.image}
              alt={vendor.name}
              className="w-full h-44 object-cover rounded-xl mb-4"
            />
            <div className="px-2 flex flex-col">
              {/* Title and Rating Row */}
              <div className="flex justify-between items-center mb-1">
                <p className="font-semibold text-lg">{vendor.name}</p>
                <div className="flex items-center text-yellow-400">
                  <Star size={16} className="mr-1" />
                  <span className="text-sm font-medium text-text">
                    {vendor.rating}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {vendor.description}
              </p>

              <button className="bg-accent px-4 py-2 text-background text-sm font-semibold rounded-xl hover:bg-accent/90 transition">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

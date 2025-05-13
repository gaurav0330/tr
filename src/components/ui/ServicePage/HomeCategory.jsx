import { Star } from "lucide-react";

export default function HomeCategory() {
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
    {
      name: "Green Thumb Gardens",
      image:
        "https://plus.unsplash.com/premium_photo-1678121801723-f78d94990dac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.7,
      description: "Expert gardening and landscaping services for your home.",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16 bg-background text-text">
      {/* Heading and Explore More in row */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
          Home Repair & Services
        </h2>
        <button className="bg-accent text-background px-6 py-2 rounded-full font-semibold hover:bg-accent/90 transition">
          Explore More
        </button>
      </div>

      {/* Vendors grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {vendors.map((vendor, index) => (
          <div
            key={index}
            className="bg-card text-card-foreground p-4 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={vendor.image}
              alt={vendor.name}
              className="w-full h-44 object-cover rounded-xl mb-4"
            />
            <div className="px-2 flex flex-col">
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

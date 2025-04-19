import { Wrench, Bolt, Paintbrush, ShoppingCart } from "lucide-react";

export default function CategoriesSection() {
  const categories = [
    {
      title: "Plumber",
      icon: <Wrench className="text-[hsl(var(--accent))] w-8 h-8" />,
    },
    {
      title: "Electrician",
      icon: <Bolt className="text-[hsl(var(--accent))] w-8 h-8" />,
    },
    {
      title: "Painter",
      icon: <Paintbrush className="text-[hsl(var(--accent))] w-8 h-8" />,
    },
    {
      title: "Grocery",
      icon: <ShoppingCart className="text-[hsl(var(--accent))] w-8 h-8" />,
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16 bg-background text-text">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Browse by Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {categories.map((category) => (
          <div
            key={category.title}
            className="flex flex-col items-center justify-center bg-card text-card-foreground p-4 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="w-12 h-12 mb-3">{category.icon}</div>
            <p className="text-sm font-medium">{category.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Star } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "John Doe",
      profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
      rating: 4,
      comment: "This service is amazing! Highly recommend it to everyone!",
    },
    {
      name: "Jane Smith",
      profilePic: "http://randomuser.me/api/portraits/men/88.jpg",
      rating: 4,
      comment: "Great experience, but I think there's room for improvement.",
    },
    {
      name: "Robert Brown",
      profilePic: "https://randomuser.me/api/portraits/women/17.jpg",
      rating: 5,
      comment: "Absolutely love it! Everything works perfectly!",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-16 bg-background text-text">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        What Our Users Say
      </h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-stretch">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-card text-card-foreground p-6 rounded-2xl shadow-md hover:shadow-lg transition w-full max-w-xs mb-6 md:mb-0"
          >
            <img
              src={testimonial.profilePic}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4"
            />
            <p className="font-semibold text-lg">{testimonial.name}</p>
            <div className="flex items-center text-yellow-400 mb-4">
              {/* Display filled stars */}
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                  }
                />
              ))}
            </div>
            <p className="text-sm text-center">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

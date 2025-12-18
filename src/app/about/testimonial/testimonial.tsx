// app/components/TestimonialsSection.tsx
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Subham Rao",
    role: "First-time Homebuyer",
    quote:
      "Livora made my dream of homeownership a reality. The agents were patient, knowledgeable, and helped me navigate every step of the process. I couldn't be happier with my new home!",
    avatar: "/images/aboutimg/testimonial.png",
  },
  {
    name: "Krishankaa",
    role: "Real Estate Investor",
    quote:
      "As an investor, I need reliable data and quick access to properties. Livora's platform exceeded my expectations with verified listings and market insights that helped me make informed decisions.",
    avatar: "/images/aboutimg/testimonial.png",
  },
  {
    name: "Atu Daga",
    role: "Family Relocating",
    quote:
      "Moving across states was stressful, but Livora's team made it seamless. They understood our family's needs and found us the perfect home in a great neighborhood with excellent schools.",
    avatar: "/images/aboutimg/testimonial.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F7F9FC] py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
            What Our Clients Say About Us
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Real stories from families and investors who trusted Livora.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col h-full"
            >
              {/* Avatar + Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                {item.quote}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mt-6 text-[#2559FF]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx} className="text-lg">
                    ★
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

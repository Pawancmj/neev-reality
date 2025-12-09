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
    name: "Subham rao",
    role: "First-time Homebuyer",
    quote:
      "Livora made my dream of homeownership a reality. The agents were patient, knowledgeable, and helped me navigate every step of the process. I couldn't be happier with my new home!",
    avatar: "/images/aboutimg/testimonial.png",
  },
  {
    name: "krishankaa",
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
    <section className="bg-[#F7F9FC] py-16 mx-auto" style={{width:1520,height:692}}>
      <div className=" mx-auto px-4 mt-14" style={{width:1240}}>
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
            What Our Clients Say About Us
          </h2>
          <p className="mt-4 text-gray-500">
            Real stories from families and investors who trusted Livora.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 " style={{width:1240}}>
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col h-full"
              style={{width:400}}>
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
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                {item.quote}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mt-6 text-[#2559FF]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx} className="text-xl">
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

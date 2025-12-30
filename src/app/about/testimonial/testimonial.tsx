"use client";

import { useEffect, useRef } from "react";
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
      "Livora made my dream of homeownership a reality. The agents were patient, knowledgeable, and helped me navigate every step of the process.",
    avatar: "/images/aboutimg/testimonial.png",
  },
  {
    name: "Krishankaa",
    role: "Real Estate Investor",
    quote:
      "Livora's platform exceeded my expectations with verified listings and market insights that helped me make informed decisions.",
    avatar: "/images/aboutimg/testimonial.png",
  },
  {
    name: "Atu Daga",
    role: "Family Relocating",
    quote:
      "Moving across states was stressful, but Livora made it seamless and found us the perfect home.",
    avatar: "/images/aboutimg/testimonial.png",
  },
  {
    name: "Rahul Mehta",
    role: "NRI Buyer",
    quote:
      "Transparent process, regular updates, and genuine advice. Highly recommended.",
    avatar: "/images/aboutimg/testimonial.png",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  /* ===== AUTO SCROLL ONLY ===== */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 360;

    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - cardWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F7F9FC] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
            What Our Clients Say{" "}
            <span className="text-[#DBA40D]">About Us</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Real stories from families and investors who trusted Livora.
          </p>
        </div>

        {/* Auto Scroll Slider */}
        <div
          ref={scrollRef}
          className="
            flex gap-6
            overflow-x-hidden
            scroll-smooth
            px-2
          "
        >
          {testimonials.map((item, i) => (
            <article
              key={i}
              className="
                w-[85%]
                sm:w-[70%]
                lg:w-[32%]
                flex-shrink-0
                bg-white
                rounded-2xl
                border border-gray-200
                shadow-sm
                p-6
                flex flex-col
              "
            >
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

              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                {item.quote}
              </p>

              <div className="flex gap-1 mt-6 text-[#DBA40D]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx} className="text-lg">★</span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

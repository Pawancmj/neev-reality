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
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* ================= SWIPE SUPPORT ================= */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current || !scrollRef.current) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50) {
      scrollRef.current.scrollBy({
        left: diff > 0 ? 320 : -320,
        behavior: "smooth",
      });
    }
    touchStartX.current = null;
  };

  return (
    <section className="bg-[#F7F9FC] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== Heading ===== */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
            What Our Clients Say{" "}
            <span className="text-[#DBA40D]">About Us</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Real stories from families and investors who trusted Livora.
          </p>
        </div>

        {/* ===== MOBILE / TAB SLIDER ===== */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="flex gap-6 overflow-x-hidden px-2 pt-2"
          >
            {testimonials.map((item) => (
              <article
                className="
    w-[85%]
    sm:w-[70%]
    flex-shrink-0
    bg-white
    rounded-2xl
    border border-gray-200
    shadow-sm
    p-6
    flex flex-col
  "
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

                {/* Rating */}
                <div className="flex gap-1 mt-6 text-[#DBA40D]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className="text-lg">★</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ===== DESKTOP GRID (UNCHANGED) ===== */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8
                         flex flex-col transition hover:shadow-md hover:-translate-y-1"
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

              <p className="text-[15px] text-gray-600 leading-relaxed flex-1">
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
  
"use client";

import React, { useRef } from "react";
import Image from "next/image";

type Developer = {
  name: string;
  projects: string;
  logo: string;
};

const developers: Developer[] = [
  { name: "DGS Group", projects: "41+ Projects", logo: "/images/developers/d1.png" },
  { name: "Pranav Constructions Pvt. Ltd.", projects: "35+ Projects", logo: "/images/developers/d2.png" },
  { name: "Ruparel Realty", projects: "26+ Projects", logo: "/images/developers/d3.png" },
  { name: "Sugee Group", projects: "33+ Projects", logo: "/images/developers/d4.png" },
  { name: "Rustomjee", projects: "24+ Projects", logo: "/images/developers/d5.png" },
  { name: "Lodha Group", projects: "44+ Projects", logo: "/images/developers/d6.png" },
  { name: "Arkade Developers", projects: "28+ Projects", logo: "/images/developers/d7.png" },
  { name: "Ajmera Group", projects: "26+ Projects", logo: "/images/developers/d8.png" },
  { name: "H. Rishabraj Builder", projects: "28+ Projects", logo: "/images/developers/d9.png" },
  { name: "Adityaraj Group", projects: "34+ Projects", logo: "/images/developers/d10.png" },
];

const DevelopersSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  /* ================= SCROLL BUTTONS ================= */
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  /* ================= SWIPE (KEEP FOR MOBILE) ================= */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current || !scrollRef.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50) {
      scrollRef.current.scrollBy({
        left: diff > 0 ? 280 : -280,
        behavior: "smooth",
      });
    }
    touchStartX.current = null;
  };

  return (
    <section className="w-full bg-[#F5F7FB] py-16">
      {/* ===== Heading ===== */}
      <div className="mx-auto max-w-5xl text-center px-6">
        <h2 className="text-3xl font-semibold text-gray-900">
          Top Real Estate Developers in{" "}
          <span className="text-[#DBA40D]">Gurgaon</span>
        </h2>
      </div>

      {/* ===== MOBILE / TABLET SLIDER WITH BUTTONS ===== */}
      <div className="mt-12 lg:hidden relative">
        {/* Scroll Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border flex items-center justify-center hover:bg-white hover:shadow-xl transition-all text-gray-600 hover:text-gray-900"
          aria-label="Scroll left"
        >
          ←
        </button>
        
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border flex items-center justify-center hover:bg-white hover:shadow-xl transition-all text-gray-600 hover:text-gray-900"
          aria-label="Scroll right"
        >
          →
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-20 py-12 snap-x snap-mandatory"
        >
          {developers.map((dev) => (
            <div
              key={dev.name}
              className="
                min-w-[240px] snap-center
                flex-shrink-0
                flex flex-col items-center
                rounded-xl bg-white
                px-6 py-8
                border border-gray-100
                shadow-[0_10px_25px_rgba(0,0,0,0.08)]
                hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]
                transition-all duration-300
              "
            >
              <div className="-mt-14 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-white/80 to-white border-2 border-gray-100 shadow-lg">
                <Image
                  src={dev.logo}
                  alt={dev.name}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              <p className="mt-6 text-base font-semibold text-gray-900 text-center leading-tight">
                {dev.name}
              </p>

              <p className="mt-2 text-sm font-medium text-gray-600 bg-gray-50/50 px-3 py-1 rounded-full">
                {dev.projects}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== DESKTOP GRID (UNCHANGED) ===== */}
      <div
        className="
          hidden lg:grid
          mx-auto mt-12 max-w-[1240px]
          grid-cols-5 gap-8 px-6
        "
      >
        {developers.map((dev) => (
          <div
            key={dev.name}
            className="
              flex flex-col items-center
              rounded-xl bg-white
              px-6 py-6
              border border-gray-100
              shadow-[0_8px_20px_rgba(0,0,0,0.06)]
              hover:shadow-[0_14px_32px_rgba(0,0,0,0.08)]
              transition
            "
          >
            <div className="-mt-12 flex h-20 w-20 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm">
              <Image
                src={dev.logo}
                alt={dev.name}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            <p className="mt-4 text-sm font-semibold text-gray-900 text-center">
              {dev.name}
            </p>

            <p className="mt-1 text-xs text-gray-500">
              {dev.projects}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevelopersSection;

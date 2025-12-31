"use client";

import React, { useEffect, useRef } from "react";
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
        container.scrollBy({ left: 260, behavior: "smooth" });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  /* ================= SWIPE ================= */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current || !scrollRef.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50) {
      scrollRef.current.scrollBy({
        left: diff > 0 ? 260 : -260,
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

      {/* ===== MOBILE / TAB SLIDER ===== */}
      <div className="mt-12 lg:hidden">
        <div
          ref={scrollRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="flex gap-6 overflow-x-hidden px-6 pt-12"
        >
          {developers.map((dev) => (
            <div
              key={dev.name}
              className="
                min-w-[220px]
                flex-shrink-0
                flex flex-col items-center
                rounded-xl bg-white
                px-6 py-6
                border border-gray-100
                shadow-[0_8px_20px_rgba(0,0,0,0.06)]
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

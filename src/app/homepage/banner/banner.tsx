"use client";

import React, { useEffect, useRef } from "react";

type StatItem = {
  value: string;
  label: string;
};

const stats: StatItem[] = [
  { value: "500+", label: "Properties Sold" },
  { value: "10+", label: "Years of Experience" },
  { value: "100+", label: "Trusted Agents & Partners" },
  { value: "95%", label: "Client Satisfaction Rate" },
];

const StatsBar: React.FC = () => {
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
        container.scrollBy({ left: 220, behavior: "smooth" });
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
        left: diff > 0 ? 220 : -220,
        behavior: "smooth",
      });
    }
    touchStartX.current = null;
  };

  return (
    <section className="mx-auto bg-[#F8FBFF] py-12 w-full max-w-[1520px]">
      {/* ================= MOBILE / TAB SLIDER ================= */}
      <div className="md:hidden">
        <div
          ref={scrollRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="flex gap-8 overflow-x-hidden px-6"
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="
                min-w-[180px]
                flex-shrink-0
                flex flex-col items-center
                text-center
              "
            >
              <span className="text-3xl font-semibold text-black">
                {item.value}
              </span>
              <span className="mt-2 text-sm text-gray-600">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex mx-auto max-w-[1083px] items-start justify-between gap-10 px-4 sm:px-6 text-left">
        {stats.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-start"
          >
            <span className="text-4xl text-black">
              {item.value}
            </span>
            <span className="mt-2 text-base text-gray-600">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;

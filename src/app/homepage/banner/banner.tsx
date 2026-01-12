"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

type StatItem = {
  finalValue: number;
  label: string;
  icon: string; 
};

const stats: StatItem[] = [
  { finalValue: 100, label: "Awards", icon: "/images/homebanner/lg1.png" },
  { finalValue: 15, label: "Years of Trust and Experties", icon: "/images/homebanner/lg2.png" },
  { finalValue: 50, label: "Dedicated Agents and Financial Advisors", icon: "/images/homebanner/lg3.png" },
  { finalValue: 1500, label: "Happy Clients", icon: "/images/homebanner/lg4.png" },
  { finalValue: 30, label: "SCO Plots", icon: "/images/homebanner/lg5.png" },
  { finalValue: 100, label: "Hand-Picked Projects Across Market", icon: "/images/homebanner/lg6.png" },
];

const StatsBar: React.FC<{ stats?: StatItem[] }> = ({ stats: customStats }) => {
  const useStats = customStats || stats;
  const [counts, setCounts] = useState<number[]>(useStats.map(() => 0));
  const observedRef = useRef<HTMLDivElement>(null);
  const animationIds = useRef<NodeJS.Timeout[]>([]);

  // Intersection Observer for triggering count animations
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounts();
            observer.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (observedRef.current) {
      observer.current.observe(observedRef.current);
    }

    return () => {
      observer.current?.disconnect();
      animationIds.current.forEach(clearTimeout);
    };
  }, []);

  // Animate counts from 0 to final value
  const animateCounts = useCallback(() => {
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;

    useStats.forEach((stat, index) => {
      let start = 0;
      const target = stat.finalValue;
      const increment = target / steps;

      animationIds.current[index] = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(animationIds.current[index]!);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(start);
          return newCounts;
        });
      }, stepTime);
    });
  }, [useStats]);

  return (
    <section className="relative mx-auto mb-6 py-8 w-full max-w-[1520px] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
      </div>

      {/* ✅ PERFECT RESPONSIVE LAYOUT - CARDS AFTER TEXT */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12 flex flex-col xl:flex-row items-start gap-6 sm:gap-8 xl:gap-12">
        {/* Left Text Section - FIRST (Natural Order) */}
        <div ref={observedRef} className="flex-1 max-w-md w-full xl:pt-22">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 lg:mb-6 drop-shadow-lg leading-tight">
            Why neevreality.com?
          </h2>
          <p className="text-black text-sm sm:text-base lg:text-lg leading-relaxed drop-shadow-md pr-0 xl:pr-8">
            Why Choose neevrealty.com for Real Estate in Gurgaon
            & Delhi NCR? Neevrealty is transforming property
            buying, selling, and renting by offering verified
            property listings for flats, villas, apartments, SCO plots,
            commercial spaces, and budget-friendly homes.
            Whether you're looking for affordable housing projects,
            under-construction apartments, ready-to-move flats, or
            investment properties, 100acress makes your journey
            simple, safe, and transparent. With a huge database of
            residential and commercial real estate projects in India,
            the platform ensures trusted builders, genuine deals,
            and expert guidance every step of the way.
          </p>
        </div>

        {/* Right Stats Grid - SECOND (Natural Order) */}
        <div className="flex-1 w-full xl:mt-6">
          {/* Mobile/Tablet: 2x3 Grid (6 cards, NO SCROLL) */}
          <div className="grid grid-cols-2 gap-4 xl:hidden p-4">
            {useStats.map((item, index) => (
              <div
                key={item.label}
                className="flex flex-col items-center h-48 rounded-xl bg-white/95 backdrop-blur-xl shadow-xl border border-white/50 hover:scale-105 transition-all duration-300 group p-4"
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-all duration-300 overflow-hidden">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain drop-shadow-md"
                  />
                </div>
                <span className="text-xl font-black text-black drop-shadow-lg mb-2">
                  {counts[index].toLocaleString()}+
                </span>
                <span className="text-xs font-semibold text-gray-700 tracking-wide text-center leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* ✅ 1280px+ Laptop/Desktop: EXACT 3x2 DESIGN */}
          <div className="hidden xl:grid grid-cols-3 gap-12 p-6 mt-4">
            {useStats.map((item, index) => (
              <div
                key={item.label}
                className="
                  col-span-1 flex flex-col items-center h-52 hover:scale-110 rounded-2xl bg-white/95
                  backdrop-blur-xl shadow-2xl border border-white/50 hover:shadow-gold
                  transition-all duration-500 hover:-translate-y-2 group relative m-4 
                "
              >
                {/* Custom Logo/Image Section - SAME POSITIONING */}
                <div className="w-20 h-20 rounded-full relative right-8 bottom-4 bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300 overflow-hidden">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={40}
                    height={40}
                    className="w-15 h-15 object-contain drop-shadow-lg group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                
                <span className="text-4xl xl:text-5xl font-black text-black drop-shadow-2xl group-hover:text-[#B8860B] absolute bottom-20 left-1/2 -translate-x-1/2">
                  {counts[index].toLocaleString()}+
                </span>
                <span className="text-lg font-semibold text-gray-700 tracking-wide text-center leading-tight absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] px-2">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;

"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

type StatItem = {
  finalValue: number;
  label: string;
  icon: string; 
};

const stats: StatItem[] = [
  { finalValue: 100, label: "Hand-Picked Projects Across Market", icon: "/images/homebanner/lg6.png" },
  { finalValue: 50, label: "Dedicated Agents and Financial Advisors", icon: "/images/homebanner/lg3.png" },
  { finalValue: 15, label: "Years of Trust and Experties", icon: "/images/homebanner/lg2.png" },
  { finalValue: 1500, label: "Happy Clients", icon: "/images/homebanner/lg4.png" },     
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
    <section ref={observedRef} className="relative mx-auto py-8 sm:py-12 w-full max-w-[1520px] bg-[#F8FBFF] h-[330px]  overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-white/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 sm:bottom-20 right-4 sm:right-20 w-20 sm:w-24 h-20 sm:h-24 bg-white/20 rounded-full blur-2xl"></div>
      </div>

      {/* Horizontal Cards Layout - Fully Responsive */}
      <div className="mx-auto max-w-[1400px] px-3 sm:px-4 md:px-6 lg:px-12">
        {/* Mobile Only: Horizontal Scroll (up to lg breakpoint) */}
        <div className="flex gap-3 sm:gap-4 lg:hidden overflow-x-auto pb-4 sm:pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent  [-webkit-scrollbar:height-4px] [-webkit-scrollbar-track:rounded] [-webkit-scrollbar-thumb:rounded-full]">
          {useStats.map((item, index) => (
            <div
              key={item.label}
              className="flex-none w-36 sm:w-44 md:w-48 h-40 sm:h-48 md:h-52 rounded-xl bg-white/95 backdrop-blur-xl shadow-xl border border-white/50 hover:scale-105 transition-all duration-300 group p-3 sm:p-4 snap-center"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-lg mb-2 sm:mb-3 group-hover:scale-110 transition-all duration-300 overflow-hidden">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                  className="w-5 sm:w-6 h-5 sm:h-6 object-contain drop-shadow-md"
                />
              </div>
              <span className="text-lg sm:text-xl font-black text-black drop-shadow-lg mb-1 sm:mb-2 block leading-tight">
                {counts[index].toLocaleString()}+
              </span>
              <span className="text-xs sm:text-sm  tracking-wide text-center leading-tight line-clamp-2">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* 1024px+: HORIZONTAL ROW - OVERFLOW FIXED */}
        {/* <section className="h-[300px] w-[1520px] bg-blue-100 mx-auto relative right-28 bottom-12"> */}
        <div className="hidden lg:flex lg:gap-3 xl:gap-20 p-6   bg-white/95 shadow-2xl rounded-2xl mx-auto  max-w-[1240px] h-[240px] justify-center items-start overflow-x-auto lg:overflow-visible xl:overflow-hidden">
          {useStats.map((item, index) => (
            <div
              key={item.label}
              className="
                flex flex-col items-center xl:h-44 hover:scale-95 rounded-2xl bg-white/95
                backdrop-blur-xl shadow-2xl border border-white/50 hover:shadow-gold
                transition-all duration-500 hover:-translate-y-2 flex-shrink-0 group relative p-3 xl:p-4 w-[200px] lg:w-[200px] xl:w-[200px] h-[130px] relative top-3
              "
            >
              {/* Custom Logo/Image Section - ORIGINAL positioning */}
              <div className="w-16 xl:w-20 h-16 xl:h-20 rounded-full relative right-6 xl:right-8 bottom-3 xl:bottom-10 bg-white flex items-center justify-center shadow-xl border-2 border-[#cad1db] group-hover:scale-110 transition-all duration-300 overflow-hidden">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={86}
                  height={86}
                  className="w-[86px]   xl:w-10 h-[86px] xl:h-10 object-contain drop-shadow-lg group-hover:scale-110 transition-all duration-300"
                />
              </div>
              
              {/* ORIGINAL text positioning restored */}
              <span className="text-2xl xl:text-4xl font-black text-black drop-shadow-2xl group-hover:text-[#B8860B] absolute bottom-16 xl:bottom-20 left-1/2 -translate-x-1/2 leading-none">
                {counts[index].toLocaleString()}+
              </span>
              <span className="text-base xl:text-lg w-[133px] h-[47px]   text-center leading-tight absolute bottom-2 left-1/2 -translate-x-1/2 w-[95%] xl:w-[99%] px-1 xl:px-2 line-clamp-2">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        {/* </section> */}
      </div>
    </section>
  );
};

export default StatsBar;
